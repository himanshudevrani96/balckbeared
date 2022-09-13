import { useCallback } from "react";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";
import { useWallet } from "./useWallet";
export const injected = new InjectedConnector({
  supportedChainIds: [80001],
});
const POLLING_INTERVAL = 12000;

const selectRpc = (type: number): any => {
  switch (type) {
    case 1:
      return {
        1: "https://mainnet.infura.io/v3/0fe795d7c0254f8096cdeba845d83e99",
      };
  }
};

const useAuth = () => {
  const { activate, deactivate , chainId} = useWeb3React();
  let walletconnect: any;
  const { ethereum }: any = window;
  const switchEthereum = async (connector: any) => {
    try {
      if (Number(chainId) !== 80001) {
        await ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x13881" }],
        });
        await activate(connector)
      }
    } catch(err)
     {
      const errObj: any = err
      if (errObj.code === 4902) {
        ethereum
          .request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0x13881",
                chainName: "Polygon Testnet Mumbai",
                nativeCurrency: {
                    name: "tMATIC",
                    symbol: "tMATIC", // 2-6 characters long
                    decimals: 18,
                },
                rpcUrls: ["https://rpc-mumbai.maticvigil.com"],
                blockExplorerUrls: ["https://mumbai.polygonscan.com/"],
              },
            ],
          })
          .then(() => 
          {
            activate(connector)
          }
          )
          .catch((error: any) => {
            console.error(error);
          });
      }
      if (errObj.code === 4001) {
        localStorage.clear()
      }
    }
  }

  const login = useCallback(
    (connectorID) => {
      //@ts-ignore
        walletconnect = new WalletConnectConnector({
        rpc: selectRpc(1),
        qrcode: true,
        pollingInterval: POLLING_INTERVAL,
        bridge: "https://bridge.walletconnect.org",
      });

      const selecWallet = (type: number): any => {
        switch (type) {
          case 1:
            return injected;
          case 2:
            return walletconnect;
        }
      };
      if (true) {
        activate(selecWallet(connectorID), async (error) => {
          if (error instanceof UnsupportedChainIdError) {
            if (connectorID === 1) {
              console.log(typeof switchEthereum);
              
              await switchEthereum(injected)
            }
            else if (connectorID === 2) {
              deactivate();
              localStorage.clear();
            }else
               activate(selecWallet(connectorID));
          } else {
            if (error instanceof NoEthereumProviderError) {
            } else if (
              error instanceof UserRejectedRequestErrorInjected ||
              error instanceof UserRejectedRequestErrorWalletConnect
            ) {
              walletconnect.walletConnectProvider = null;
            } else {
              console.log(error.name, error.message);
            }
          }
        });
      }
    },
    [activate]
  );

  const logout = useCallback(() => {
    deactivate();
    localStorage.clear();
    //@ts-ignore
    const walletType = JSON.parse(localStorage.getItem("connectorId"));
    if (walletType === 2) {
      walletconnect.walletConnectProvider = null;
    }
  }, [deactivate]);

  return { login, logout };
};

export default useAuth;
