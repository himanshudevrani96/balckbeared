import React,{useEffect} from "react";
import { IconButtonSolid } from "../components/icon-button-solid";
import {
  Content,
  SemiHead,
  AddressInfoWrap,
  BnbInfo,
  AddressInfo,
  OptionArea,
  WalletOption,
  WalletDetails,
  LinksFlex,
  StatusContent,
  StatusImage,
  ConnectButtonWrap,
  LinkFlex,
  ButtonWrapper,
} from "./style";

import PowerIcon from "../../assets/icons/power.svg";
import { colors } from "../styles/theme";
import CustomModal from "../custom-modal";
import {
  Login,
  walletConnectCheck,
} from "../../logic/actions";
import { WalletTypes } from "../../utils/constant";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../components/button";
// import { ButtonArea } from "../styles/styled";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import {
  Web3ReactProvider,
  useWeb3React,
  UnsupportedChainIdError,
} from "@web3-react/core";
import history from "../../modules/app/components/history";
import useAuth from "../../wallet_helpers/useAuth";
import { fromLp,renderTokenAmountText } from "../../utils/helpers";
import { useGetBnbBalance } from "../../hooks/useTokenBalance";
import { getFullDisplayBalance } from "../../utils/formatBalnce";

const ConnectWallet = (props: any) => {
  const {
    data,
    connectWallet,
    walletAddress,
    setConnectWallet,
    walletBalance,
    checkWallet,
    showWalletModal,
    closeWalletModal,
    showWalletContent,
  } = props;
  const [walletOptions, setWalletOptions] = React.useState(false);
  const [disconnectWallet, setDisconnectWallet] = React.useState(false);
  const [copy, setCopy] = React.useState(false);
  const [errorModal, setErrorModal] = React.useState(false);
  const [trustWallet, setTrustWallet] = React.useState(false);
  const [walletType, setWalletType] = React.useState(false);
  const [switchWallet, setSwitchWallet] = React.useState(false);

  const { loader, error, success, chainId } = useSelector(
    (state: any) => state.wallet
  );
  const dispatch = useDispatch();
  const { login, logout } = useAuth();
  const { account,deactivate,library } = useWeb3React();

  const {balance} = useGetBnbBalance()

  const connect = async (type: any) => {
 console.log(account)
    if (account) {
      //@ts-ignore
      const walletType = JSON.parse(localStorage.getItem('connectorId'))
      logout()
      deactivate();
      localStorage.clear();
      dispatch(walletConnectCheck(false));
      setDisconnectWallet(false);
    } else {
      try {
        login(type);
        localStorage.setItem("connectorId", JSON.stringify(type));
      } catch (error) {
        console.log(error);
        setErrorModal(true);
      }
    }
  };

  useEffect(() => {
  //@ts-ignore
  let walletType = JSON.parse(localStorage.getItem("connectorId"));
  //@ts-ignore
  const walletconnect = JSON.parse(localStorage.getItem("walletconnect"));

    if (account) {
      dispatch(Login(account));
      setConnectWallet(true);
      localStorage.setItem("address", JSON.stringify(account));
      localStorage.setItem("walletConnected", JSON.stringify(true));
      dispatch(walletConnectCheck(true));
    }else if (walletType === 2 && walletconnect === null) {
      logout();
      localStorage.clear();
    }
    setWalletOptions(false);
  }, [account]);

  const WalletModalClose = () => {
    setWalletOptions(false);
    closeWalletModal();
  };

  useEffect(() => {
    //@ts-ignore
    const walletType = JSON.parse(localStorage.getItem("connectorId"));
    setWalletType(walletType);
  }, []);


  return (
    <>
      <Content>
        {showWalletContent ? (
          connectWallet && account ? (
            <AddressInfoWrap menu={props.menu}>
              <BnbInfo menu={props.menu}>
                {" "}
                {renderTokenAmountText(getFullDisplayBalance(balance,18,6))} ETH
              </BnbInfo>
              <AddressInfo
                onClick={() => {
                  setDisconnectWallet(true);
                  props.showLogout(true);
                }}
              >
                {walletAddress}
              </AddressInfo>
            </AddressInfoWrap>
          ) : (
            <ConnectButtonWrap
              onClick={() => {
                setWalletOptions(true);
                props.showLogout(true);
              }}
            >
              <img
                src={require("../../assets/icons/connect-icon.svg").default}
                alt=""
              />
              <p>Connect</p>
            </ConnectButtonWrap>
          )
        ) : null}

        <CustomModal
          show={walletOptions || showWalletModal}
          toggleModal={() => {
            WalletModalClose();
            props.showLogout(false);
          }}
          heading="Connect to a Wallet"
          headIcon={require("../../assets/icons/money.svg").default}
        >
          <div style={{ marginTop: "25px" }}>
            <WalletOption onClick={() => connect(WalletTypes.metamask)}>
              <p>Metamask</p>

              <img
                src={require("../../assets/image/metamask.svg").default}
                alt=""
              />
            </WalletOption>
            <WalletOption onClick={() => connect(WalletTypes.walletConnect)}>
              <p>TrustWallet</p>

              <img
                src={require("../../assets/icons/wallet-connect.svg").default}
                alt=""
              />
            </WalletOption>
          </div>
        </CustomModal>

        {localStorage.getItem("address") && (
          <CustomModal
            show={disconnectWallet}
            toggleModal={() => {
              setDisconnectWallet(false);
              props.showLogout(false);
            }}
            heading="Your Wallet"
            headIcon={require("../../assets/icons/money.svg").default}
          >
            <WalletDetails>
              <p>{walletAddress}</p>
              <div style={{ textAlign: "center" }}>
                <Button
                  style={{ width: "100%" }}
                  color={colors.black}
                  background={colors.greenGradient}
                  onClick={() => connect(walletType)}
                >
                  Logout
                </Button>
              </div>
            </WalletDetails>
          </CustomModal>
        )}

        <CustomModal
          show={errorModal}
          toggleModal={() => {
            setErrorModal(false);
            setWalletOptions(false);
          }}
          heading="Authorization Error"
          headIcon={
            require("../../assets/icons/authorization-icon.svg").default
          }
        >
          <StatusContent>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "40px 0px 100px 0",
              }}
            >
              <p>Please authorize to access your account</p>
            </div>

            <ButtonWrapper>
              <Button
                style={{
                  width: "90%",
                  border: "1px solid rgba(186, 169, 255, 0.25)",
                  color: "#00D7E7",
                  background: "transparent",
                  margin: "0 5px 0 0",
                }}
                color={colors.black}
                background={colors.green}
                onClick={() => {
                  setErrorModal(false);
                }}
              >
                DISMISS
              </Button>
              <Button
                style={{ width: "90%", margin: "0 0 0 5px" }}
                color={colors.black}
                background={colors.green}
                onClick={() => {
                  setWalletOptions(true);
                  props.showLogout(true);
                  setErrorModal(false);
                }}
              >
                GET A WALLET
              </Button>
            </ButtonWrapper>
          </StatusContent>
        </CustomModal>

        <CustomModal
          // show={chainId !== 42 && connectWallet}
          toggleModal={async () => {
            setErrorModal(false);
            setWalletOptions(false);
            deactivate()
            localStorage.clear();
          }}
          heading="Wrong network"
          headIcon={require("../../assets/icons/wrong-network.svg").default}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "20px 0 60px 0",
              textAlign: "center",
              color: "#fff",
              fontFamily: "SemiBold",
            }}
          >
            It looks like you need to switch your wallet’s network. Please note
            that some wallets may not support changing networks.
          </div>

          <ButtonWrapper>
            <Button
              style={{
                width: "90%",
                border: "1px solid rgba(186, 169, 255, 0.25)",
                color: "#00D7E7",
                background: "transparent",
                margin: "0 5px 0 0",
              }}
              color={colors.black}
              background={colors.green}
              onClick={async () => {
                // setErrorModal(false);
                setWalletOptions(true);
                props.showLogout(true);
                //@ts-ignore
                localStorage.setItem("switch", JSON.stringify(true));
               deactivate()
                localStorage.removeItem("address");
                localStorage.removeItem("walletConnected");
                localStorage.removeItem("walletType");
              }}
            >
              SWITCH WALLET
            </Button>
            <Button
              style={{ width: "90%", margin: "0 0 0 5px" }}
              color={colors.black}
              background={colors.green}
              onClick={async () => {
                setErrorModal(false);
                await library.disconnect();
                localStorage.clear();
              }}
            >
              DISMISS
            </Button>
          </ButtonWrapper>
        </CustomModal>
      </Content>
    </>
  );
};
export default ConnectWallet;
