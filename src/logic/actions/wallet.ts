import {
    GET_BALANCE,
    LOGIN,
    WALLET_BALANCE,
    TOKEN_BALANCE,
    CHECK_WALLET_CONNECT,
    WALLET_CONNECT_CHECK,
  } from "./constant";

  export const getLPBalance = (amount: any) => {
    return {
      type: GET_BALANCE,
      amount: amount,
    };
  };
  
  
  export const Login = (userAddress: String) => {
    return {
      type: LOGIN,
      address: userAddress,
    };
  };
  
  export const checkWalletConnect = () => {
    return {
      type: CHECK_WALLET_CONNECT,
    };
  };
  
  
  export const getWalletBalance = (balance: String) => {
    return {
      type: WALLET_BALANCE,
      balance: balance,
    };
  };
  
  
  export const tokenBalance = (value: any) => {
    return {
      type: TOKEN_BALANCE,
      balance: value,
    };
  };
  export const getBalance = (address: any,library: any) => async (dispatch: any) => {
    try{
      if (address) {
        const balance = await library.eth.getBalance(address);
        dispatch(getWalletBalance(balance));
        dispatch(getLPBalance(address));
      }
    }catch(e){
      console.log(e)
    }
  
  };
  
  
  export const walletConnectCheck = (value: any) => {
    return {
      type: WALLET_CONNECT_CHECK,
      value: value,
    };
  };
