
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

