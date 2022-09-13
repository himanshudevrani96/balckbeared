import { useWeb3React } from "@web3-react/core";



export const useWallet = async() => {

  const { activate, chainId, account, library } = useWeb3React();
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
  return  {switchEthereum} 
}

