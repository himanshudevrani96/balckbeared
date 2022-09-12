import { useEffect,useState } from "react";
import BigNumber from "bignumber.js";
import { BIG_ZERO } from '../utils/bignumber'
import { useWeb3React } from "@web3-react/core";
import {simpleProvider} from '../utils/provider';


export const useGetBnbBalance = () => {
 const [balance,setBalance] = useState(BIG_ZERO)
 const { account,library } = useWeb3React()

 useEffect(() => {
   const fetchBalance = async () => {
       try{
           if(account){
            const walletBalnce = await library.eth.getBalance(account)
            setBalance(new BigNumber(walletBalnce))
           }
       }catch(err){
         console.log(err)
       }
   }
    fetchBalance()
 },[account,setBalance,library])
 return {balance}
}

