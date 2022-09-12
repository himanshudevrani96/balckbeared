import web3 from "web3";

export const toLp = (amount: any) => {
  return web3.utils.toWei(amount, "ether");
};

export const fromLp = (amount: any) => {
  return web3.utils.fromWei(amount, "ether");
};

export const tousdcLp = (amount: any) => {
  return web3.utils.toWei(amount, "mwei");
};

export const fromusdcLp = (amount: any) => {
  return web3.utils.fromWei(amount, "mwei");
};

export const toGwei = (amount: any) => {
  return web3.utils.toWei(amount, "gwei");
};
export const fromGwei = (amount: any) => {
  return web3.utils.fromWei(amount, "gwei");
};
export const renderTokenAmountText = (amount: any) => {
  const token = amount.replace(/,/g, "");

  if (!isNaN(parseFloat(token))) {
    return parseFloat(token).toLocaleString("en-US", {
      maximumFractionDigits: 6,
      minimumFractionDigits: 0,
    });
  }

  return "0";
};

export const renderEarnTokenAmountText = (amount: any) => {
    const token = amount.replace(/,/g, "");
  
    if (!isNaN(parseFloat(token))) {
      return parseFloat(token).toLocaleString("en-US", {
        maximumFractionDigits: 5,
        minimumFractionDigits: 5,
      });
    }
  
    return "0";
  };

  export const setupNetwork = async (library:any,chain:string) => {
    const provider = library.currentProvider;
    if (provider) {
      const chainId = parseInt(chain, 10)
      try {
        await provider.request({
          method: 'wallet_switchEthereumChain',
          params: [
            {
              chainId: `0x${chainId.toString(16)}`,
              // chainName: 'Binance Smart Chain Mainnet',
              // nativeCurrency: {
              //   name: 'BNB',
              //   symbol: 'bnb',
              //   decimals: 18,
              // },
              // rpcUrls: ["https://bsc-dataseed.binance.org","https://bsc-dataseed1.defibit.io"],
              // blockExplorerUrls: ['https://bscscan.com'],
            },
          ],
        })
        return true
      } catch (error) {
        console.error(error)
        return false
      }
    } else {
      console.error("Can't setup the BSC network on metamask because window.ethereum is undefined")
      return false
    }
  }

