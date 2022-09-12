import web3 from "web3";
import getRpcUrl from "./getRpcUrl";

const RPC_URL = getRpcUrl();

export const simpleProvider =
  RPC_URL && new web3(new web3.providers.HttpProvider(RPC_URL));
