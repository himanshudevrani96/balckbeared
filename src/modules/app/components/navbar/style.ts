import styled from "styled-components";
import { colors, screenSizes } from "../../../../shared/styles/theme";

export const NavContainerWrap = styled.div`
  background: #000;
  height: 60px;
  position: fixed;
  width: 100%;
  z-index: 100000;
`;

export const NavContainer = styled.div`
  height: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0;
  max-width: 1600px;
  position: fixed;
  width: 100%;
  z-index: 1000;
  margin: auto;
  right: 0;
  left: 0;
  background: #000;
  @media (min-width: ${screenSizes.mediaS}px) {
    height: 60px;
    flex-direction: row;
    align-items: center;
  }
`;

export const AppLogo = styled.img`
  cursor: pointer;
  height: 34px;
  margin-top: 10px;
  margin-bottom: 20px;
  margin-left: 10px;
  @media (min-width: ${screenSizes.mediaS}px) {
    margin-top: 0px;
    height: 50px;
    margin-bottom: 0px;
    width: 128px;
    margin-left: 40px;
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    margin-left: 70px;
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    margin-left: 100px;
  }
  @media (min-width: ${screenSizes.mediaXXL}px) {
    margin-left: 190px;
  }


`;
export const WalletWrap = styled.div<{menu:any,connectWallet:any,chainId:any,showLog:any}>`
  margin-right: ${props => props.menu ? '0':'50px'};
  display: ${props => props.menu ? 'block':'none'};
  z-index: ${props => props.menu ? '999999':'0'};
  margin-top: ${props => props.menu ? '72px':'0'};
  // transform: ${props => props.menu && props.connectWallet && props.chainId === 42 && props.showLog === false? 'translateX(-43%)':'none'};
  @media (min-width: ${screenSizes.mediaS}px) {
    display: ${props => props.menu ? 'none':'block'};
    margin-right: 20px;
    transform: ${props => props.menu && props.connectWallet && props.chainId === 42 && props.showLog === false? 'translateX(-43%)':'none'};
    display: ${props => props.menu ? 'block':'block'};

  }
  @media (min-width: ${screenSizes.mediaS}px) {
    display: ${props => props.menu ? 'none':'block'};
    margin-right: 40px;
    transform: ${props => props.menu && props.connectWallet && props.chainId === 42 && props.showLog === false? 'translateX(-43%)':'none'};
    display: ${props => props.menu ? 'block':'block'};

  }
  @media (min-width: ${screenSizes.mediaL}px) {
    margin-right: 60px;
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    margin-right: 80px;
  }
  @media (min-width: ${screenSizes.mediaXXL}px) {
    margin-right: 100px;
  }
`;

export const WalletMobileWrap = styled.div<{menu:any,connectWallet:any,chainId:any,showLog:any}>`
  margin-right: ${props => props.menu ? '0':'50px'};
  display: ${props => props.menu ? 'block':'block'};
  z-index: ${props => props.menu ? '999999':'0'};
  margin-top: ${props => props.menu ? '72px':'0'};
  // transform: ${props => props.menu && props.connectWallet && props.chainId === 42 && props.showLog === false? 'translateX(-43%)':'none'};
  @media (min-width: ${screenSizes.mediaS}px) {
    display: ${props => props.menu ? 'block':'block'};
    margin-right: 20px;
  }
  @media (min-width: ${screenSizes.mediaS}px) {
    display: ${props => props.menu ? 'block':'block'};
    margin-right: 40px;
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    margin-right: 70px;
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    margin-right: 100px;
  }
  @media (min-width: ${screenSizes.mediaXXL}px) {
    margin-right: 119px;
  }
`;

export const ToggleMenu = styled.img`
  display: block;
  margin: 20px;
  @media (min-width: ${screenSizes.mediaS}px) {
    display: none;
  }
`;
export const ToggleCloseMenu = styled.img`
display: block;
margin: 20px;
@media (min-width: ${screenSizes.mediaS}px) {
  display: block;
}
`;
export const NavTabs = styled.ul`
  list-style: none;
  transition: all 0.3s;
  margin: 0;
  padding: 0;
  display: none;
  @media (min-width: ${screenSizes.mediaS}px) {
    display: flex;
    flex-direction: row;
  }
`;
export const NavTab = styled.li<any>`
  cursor: pointer;
  position: relative;
  display: flex;

  a {
    font-family: SemiBold;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${colors.white};
    text-decoration: none;
    display: inline-block;
    padding: 21px 2px;
    @media (min-width: ${screenSizes.mediaS}px) {
      padding: 21px 10px;
    }
    @media (min-width: ${screenSizes.mediaM}px) {
      padding: 21px 18px;
    }  
    @media (min-width: ${screenSizes.mediaXL}px) {
      padding: 21px 35px;
    }
    ${(props) =>
      props.isActiveTab
        ? `
        color: ${colors.neon};
        opacity: 1;
        flex-direction: row-reverse;
    `
        : `
        color: ${colors.white};
        opacity: 0.4;
        flex-direction: row;
      `}
  }
  &:hover {
    // border-top: 1px solid ${colors.neon};
    // background: radial-gradient( 56.23% 45.55% at 50% 3%, rgba(0,215,231,0.4) 0%, rgba(46,46,46,0) 100% );
    a {
      color: ${colors.neon};
      opacity: 1;
    }
  }
  img {
    position: absolute;
    top: 20px;
    right: 0px;
    @media (min-width: ${screenSizes.mediaXL}px) {
      right: 12px;
    }
  }

  ${(props) =>
    props.isActiveTab
      ? `
      color:${colors.neon};
      border-top: 1px solid ${colors.neon};
      background: radial-gradient( 56.23% 45.55% at 50% 3%, rgba(0,215,231,0.4) 0%, rgba(46,46,46,0) 100% );
  `
      : `
    color:${colors.white};
    `}
`;

export const MobileOptions = styled.div`
display: block;
position: fixed;
background: #000;
    width: 100%;
    height: 100vh;
    top: 0;
    z-index: 10000;
    
@media (min-width: ${screenSizes.mediaS}px) {
none;
}
`;

export const MobileOptionHead = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const NavTabsMobile = styled.ul`
  list-style: none;
  transition: all 0.3s;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  padding-bottom:100px;
  // margin-top: 50px;
  // align-items: center;
  @media (max-width: ${screenSizes.mediaS}px) {
    margin-left:  37%;
  }
  @media (min-width: ${screenSizes.mediaS}px) {
    margin-left:  45%;
  }
`;
export const NavTabMobile = styled.li<any>`
  // text-align: center;
  padding: 10px;
  cursor: pointer;
  position: relative;
  @media (min-width: ${screenSizes.mediaXL}px) {
    margin-left: 20px;
  }

  a {
    font-family: SemiBold;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: ${colors.white};
    opacity: 0.4;
    text-decoration: none;
    ${(props) =>
      props.isActiveTab
        ? `
        opacity: 1;
        color:${colors.neon};
    `
        : `
        color:${colors.white};
        opacity: 0.4;
      `}
  }
  &:hover {
    a {
      color: ${colors.neon};
      opacity: 1;
    }
  }
  img {
    position: absolute;
    top: 16px;
  }
`;

export const Separator = styled.div`
  background: rgba(255, 255, 255, 0.2);
  width: 0.5px;
  height: 20px;
  margin-top: 20px;
`;

export const ProductDropdown = styled.div`
    position: absolute;
    top: 60px;
    width: 228px;
    height: 144px;
    background: rgba(186, 169, 255, 0.07);
    backdrop-filter: blur(15px);
    cursor: default;
`;
export const ProductMobileDropdown = styled.div`
`;
export const ProductDropdownPara = styled.div<{select:any,live:any}>`
  font-family: SemiBold;
  &:nth-child(1){
    margin-top: 24px;
  } 
  margin-left: 24px;
  margin-bottom: 12px;
  font-size: 12px;
  cursor: ${props => props.live ? 'pointer':'default'};
  color: ${props => props.select === 'white'? colors.white: '#A09FA2'};
`;