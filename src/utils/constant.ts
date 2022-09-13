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
    mumbai: "0x13881"
  };

  export const moralisApi = "ykEnM13eObcCorJBzIJvTmcv0d9IeYJJfadGKP0DKe15r96hjdktDwVxs9GcQvBA"

  const options = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'X-API-Key': 'ykEnM13eObcCorJBzIJvTmcv0d9IeYJJfadGKP0DKe15r96hjdktDwVxs9GcQvBA'
  }
};

fetch('https://deep-index.moralis.io/api/v2/0xE6b8fd297b23A55836622AE2cbE66771892B52F8/nft?chain=eth&format=decimal', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));