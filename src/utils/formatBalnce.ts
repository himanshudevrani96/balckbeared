import BigNumber from "bignumber.js";
import { BIG_TEN } from "./bignumber";

export const getDecimalAmount = (amount: BigNumber, decimals = 18) => {
  return new BigNumber(amount).times(BIG_TEN.pow(decimals));
};

export const getBalanceAmount = (amount: BigNumber, decimals = 18) => {
  return new BigNumber(amount).dividedBy(BIG_TEN.pow(decimals));
};
export const getBalanceNumber = (balance: BigNumber, decimals = 18) => {
  return getBalanceAmount(balance, decimals).toNumber();
};

export const getFullDisplayBalance = (
  balance: BigNumber,
  decimals = 18,
  displayDecimals = 3
) => {
  return getBalanceAmount(balance, decimals).toFixed(displayDecimals);
};
