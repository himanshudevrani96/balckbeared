import {
  GET_BALANCE,
  LOGIN,
  WALLET_BALANCE,
  TOKEN_BALANCE,
  WALLET_CONNECT_CHECK,
} from "../actions";

const initialState = {
  amount: 0,
  loader: false,
  userAddress: "",
  walletBalance: "",
  tokenBalance: "0",
  switchModal: false,
  walletConnectCheck: false,
  chainId: 1,
};

const walletReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_BALANCE:
      return {
        ...state,
        amount: action.amount,
      };
    case LOGIN:
      return {
        ...state,
        userAddress: action.address,
      };   
    case WALLET_BALANCE:
      return {
        ...state,
        walletBalance: action.balance,
      };
    case TOKEN_BALANCE:
      return {
        ...state,
        tokenBalance: action.balance,
      };
    case WALLET_CONNECT_CHECK:
      return {
        ...state,
        walletConnectCheck: action.value,
      };
    default:
      return state;
  }
};

export default walletReducer;
