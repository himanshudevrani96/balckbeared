import React from "react";
import {
  NavContainer,
  AppLogo,
  WalletWrap,
  ToggleMenu,
  NavContainerWrap,
} from "./style";
import { useSelector, useDispatch } from "react-redux";
import { getBalance } from "../../../../logic/actions";
import ConnectWallet from "../../../../shared/connect-wallet";
import {
  useWeb3React,
} from "@web3-react/core";
const Navbar = (props: any) => {
  const [connectWallet, setConnectWallet] = React.useState(false);
  const { walletBalance, walletConnectCheck } = useSelector(
    (state: any) => state.wallet
  );
  const { library,chainId } = useWeb3React();

  const [menu, setMenu] = React.useState(false);

  const dispatch = useDispatch();
  const [walletAddress, setWalletAddress] = React.useState("");
  const [selectItem, setSelectItem] = React.useState(0);
  const [showDropdown, setShowDropdown] = React.useState(false);
  const [showLogout,setShowLogout] = React.useState(false);
  React.useEffect(() => {
    //@ts-ignore
    const walletConnect = JSON.parse(localStorage.getItem("walletConnected"));
    setConnectWallet(walletConnect);
    //@ts-ignore
    const address = JSON.parse(localStorage.getItem("address"));
    if (address) {
      dispatch(getBalance(address,library));
      var ret = address.replace(/(^"|"$)/g, "");
      setWalletAddress(ret);
    }
  }, [connectWallet, setConnectWallet, walletConnectCheck]);

  const openMobileMenu = () => {
    setMenu(!menu);
  };

  return (
    <NavContainerWrap>
      <NavContainer>
        <AppLogo src={'https://uploads-ssl.webflow.com/60c92ce167b91f55c48259ca/60e883fa2ffc2286619f0430_RapidInnovationsLogo.svg'} />

        <ToggleMenu
          onClick={openMobileMenu}
          src={require("../../../../assets/icons/mobile-toggle.svg").default}
        />
        <div style={{color:'#fff',border:'0.5px solid rgba(255,255,255,0.2)',padding: '5px 27px 5px 27px'}}>
          chain: {chainId}
        </div>
        <WalletWrap menu={menu} connectWallet={connectWallet} chainId={chainId} showLog={showLogout}>
          <ConnectWallet
            connectWallet={connectWallet}
            walletAddress={walletAddress}
            setConnectWallet={setConnectWallet}
            walletBalance={walletBalance}
            checkWallet={props.checkWallet}
            showWalletContent
            closeWalletModal={() => null}
            showLogout={(e:any) => setShowLogout(e)}
            menu={menu}
          />
        </WalletWrap>
      </NavContainer>
    </NavContainerWrap>
  );
};

export default Navbar;
