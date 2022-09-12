import {
    WSB_BNB,
    LP_TOKEN,
    CAKE,
    LP_CAKE,
    BUSD,
    LP_BUSD,
    WSB_BNB_SWAP_ADDRESS,
    WSB_CAKE_SWAP_ADDRESS,
    WSB_BUSD_SWAP_ADDRESS,
    WSBD_TOKEN,
    CAKE_TOKEN,
    BUSD_TOKEN,
    CAKE_COIN_ADDRESS,
    BUSD_COIN_ADDRESS,
    WSB_COIN_ADDRESS,
    BNB_COIN_TOKEN,
  } from "../config";
  
  export const WalletTypes = {
    default: 0,
    metamask: 1,
    walletConnect: 2,
    authereum: 3,
    burnerConnect: 4,
    uniLogin: 5,
    mewWallet: 6,
    binance: 7,
  };
  
  export const Networks = {
    mainnet: "0x1",
    ropsten: "0x3",
    rinkeby: "0x4",
    goerli: "0x5",
    kovan: "0x2a",
    moonBaseAlpha: "0x507",
  };
  
  export const AddressConfig = [
    {
      WSB_BNB: WSB_BNB,
      LP_TOKEN: LP_TOKEN,
    },
    {
      CAKE: CAKE,
      LP_CAKE: LP_CAKE,
    },
    {
      BUSD: BUSD,
      LP_BUSD: LP_BUSD,
    },
    {
      WSB: WSBD_TOKEN,
    },
  ];
  
  export const AddressConfigSwap = [
    {
      SWAP_WSB_BNB: WSB_BNB_SWAP_ADDRESS,
    },
    {
      SWAP_WSB_CAKE: WSB_CAKE_SWAP_ADDRESS,
    },
    {
      SWAP_WSB_BUSD: WSB_BUSD_SWAP_ADDRESS,
    },
  ];
  
  export const AddressApproveConfig = [
    {
      CAKE: CAKE_TOKEN,
    },
    {
      BUSD: BUSD_TOKEN,
    },
    {
      WSB: WSBD_TOKEN,
    },
  ];
  
  export const Address = {
    WSB_BNB: WSB_BNB,
    LP_TOKEN: LP_TOKEN,
  };
  
  export const selectPoolAddress = (type: string) => {
    switch (type) {
      case "WSB-BNB":
        return AddressConfig[0];
      case "WSB-CAKE":
        return AddressConfig[1];
      case "WSB-BUSD":
        return AddressConfig[2];
      default:
        return "";
    }
  };
  
  export const selectTokenAddress = (type: string) => {
    switch (type) {
      case "WSB-CAKE":
        return CAKE_TOKEN;
      case "WSB-BUSD":
        return BUSD_TOKEN;
      case "WSB-WSB":
        return WSBD_TOKEN;
      default:
        return "";
    }
  };
  
  export const selectCoinAddress = (type: string) => {
    switch (type) {
      case "WSB-CAKE":
        return CAKE_COIN_ADDRESS;
      case "WSB-BUSD":
        return BUSD_COIN_ADDRESS;
      case "WSB-WSB":
        return WSB_COIN_ADDRESS;
      case "WSB-BNB":
        return BNB_COIN_TOKEN;
      default:
        return "";
    }
  };
  
  export const lpTokenAddress = (type: string) => {
    switch (type) {
      case "WSB-CAKE":
        return LP_CAKE;
      case "WSB-BUSD":
        return LP_BUSD;
      case "WSB-BNB":
        return LP_TOKEN;
      default:
        return "";
    }
  };
  
  export const lpNewTokenAddress = (type: string) => {
    switch (type) {
      case "WSB-WSB":
        return WSBD_TOKEN;
      case "WSB-BUSD":
        return LP_BUSD;
      case "WSB-BNB":
        return LP_TOKEN;
      default:
        return "";
    }
  };
  
  export const selectPoolId = (type: any) => {
    switch (type) {
      case "WSB-BNB":
        return "1";
      case "WSB-BUSD":
        return "2";
      case "WSB-WSB":
        return "0";
      default:
        return "";
    }
  };
  
  // export const TokenDetail = [
  //   {
  //     name: "BTC",
  //     fullName: "Bitcoin",
  //     img: require("../assets/icons/btc.svg").default,
  //   },
  //   {
  //     name: "ETH",
  //     fullName: "Ethereum",
  //     img: require("../assets/icons/eth.svg").default,
  //   },
  //   {
  //     name: "LINK",
  //     fullName: "Link",
  //     img: require("../assets/icons/linkc.svg").default,
  //   },
  //   {
  //     name: "AAVE",
  //     fullName: "Aave",
  //     img: require("../assets/icons/aave.svg").default,
  //   },
  //   {
  //     name: "MKR",
  //     fullName: "MKR",
  //     img: require("../assets/icons/mkr.svg").default,
  //   },
  //   {
  //     name: "SNX",
  //     fullName: "SNX",
  //     img: require("../assets/icons/snx.svg").default,
  //   },
  //   {
  //     name: "IDEX",
  //     fullName: "IDEX",
  //     img: require("../assets/icons/idex.svg").default,
  //   },
  //   {
  //     name: "COMP",
  //     fullName: "COMP",
  //     img: require("../assets/icons/comp.svg").default,
  //   },
  //   {
  //     name: "YFI",
  //     fullName: "YFI",
  //     img: require("../assets/icons/yfi.svg").default,
  //   },
  //   {
  //     name: "ENJ",
  //     fullName: "ENJ",
  //     img: require("../assets/icons/enj.svg").default,
  //   },
  //   {
  //     name: "UMA",
  //     fullName: "UMA",
  //     img: require("../assets/icons/uma.svg").default,
  //   },
  //   {
  //     name: "ZRX",
  //     fullName: "ZRX",
  //     img: require("../assets/icons/zrx.svg").default,
  //   },
  //   {
  //     name: "CRV",
  //     fullName: "CRV",
  //     img: require("../assets/icons/crv.svg").default,
  //   },
  //   {
  //     name: "RAZOR",
  //     fullName: "RAZOR",
  //     img: require("../assets/icons/razor.svg").default,
  //   },
  //   {
  //     name: "BAL",
  //     fullName: "BAL",
  //     img: require("../assets/icons/bal.svg").default,
  //   },
  //   {
  //     name: "REN",
  //     fullName: "REN",
  //     img: require("../assets/icons/ren.svg").default,
  //   },
  //   {
  //     name: "SRM",
  //     fullName: "SRM",
  //     img: require("../assets/icons/srm.svg").default,
  //   },
  //   {
  //     name: "NMR",
  //     fullName: "NMR",
  //     img: require("../assets/icons/nmr.svg").default,
  //   },
  //   {
  //     name: "RARI",
  //     fullName: "RARI",
  //     img: require("../assets/icons/rari.svg").default,
  //   },
  //   {
  //     name: "SWAP",
  //     fullName: "SWAP",
  //     img: require("../assets/icons/swap.svg").default,
  //   },
  //   // {
  //   //   name: "WSBC",
  //   //   fullName: "WSBC",
  //   //   img: require("../assets/icons/wsbc.svg").default,
  //   // },
  // ];
  
  export const TokenDetail = [
    {
      id: 0,
      name: "DAI",
      fullName: "DAI",
      img: require("../assets/icons/btc.svg").default,
      address: "0x04df6e4121c27713ed22341e7c7df330f56f289b",
      imageName: "btc",
      coinName: "dai",
    },
    {
      id: 1,
      name: "WBTC",
      fullName: "WBTC",
      img: require("../assets/icons/eth.svg").default,
      address: "0x1c8e3bcb3378a443cc591f154c5ce0ebb4da9648",
      imageName: "eth",
      coinName: "wrapped-bitcoin",
    },
    {
      id: 2,
      name: "BAL",
      fullName: "BAL",
      img: require("../assets/icons/bal.svg").default,
      address: "0x41286bb1d3e870f3f750eb7e1c25d7e48c8a1ac7",
      imageName: "bal",
      coinName: "balancer",
    },
    {
      id: 3,
      name: "PERP",
      fullName: "PERP",
      img: require("../assets/icons/aave.svg").default,
      address: "0x8f4bebf498cc624a0797fe64114a6ff169eee078",
      imageName: "aave",
      coinName: "perpetual-protocol",
    },
    {
      id: 4,
      name: "MKR",
      fullName: "MKR",
      img: require("../assets/icons/mkr.svg").default,
      address: "0xaf9ac3235be96ed496db7969f60d354fe5e426b0",
      imageName: "mkr",
      coinName: "maker",
    },
    {
      id: 5,
      name: "USDC",
      fullName: "USDC",
      img: require("../assets/icons/snx.svg").default,
      address: "0xc2569dd7d0fd715b054fbf16e75b001e5c0c1115",
      imageName: "snx",
      coinName: "usd-coin",
    },
    {
      id: 6,
      name: "WETH",
      fullName: "WETH",
      img: require("../assets/icons/idex.svg").default,
      address: "0xdfcea9088c8a88a76ff74892c1457c17dfeef9c1",
      imageName: "idex",
      coinName: "idex",
    },
  
    // {
    //   name: "WSBC",
    //   fullName: "WSBC",
    //   img: require("../assets/icons/wsbc.svg").default,
    // },
  ];
  

  