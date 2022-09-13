import { useWeb3React } from "@web3-react/core";
import React, { useState } from "react";
import Web3 from "web3";
import { simpleProvider } from "../../utils/provider";
import {
  Wrapper, Container
} from "./style";

const Homepage = () => {
  const web3 = new Web3(Web3.givenProvider)
  const [resss, setres] = useState<any>("")

 const {account,library, chainId} = useWeb3React()
console.log({chainId});


  var isAddress = function (address: any) {
    // function isAddress(address) {
    // if (!/^(0x)?[0-9a-f]{40}$/i.test(address)) {
    //   // check if it has the basic requirements of an address
    //   return false;
    // } else if (/^(0x)?[0-9a-f]{40}$/.test(address) || /^(0x)?[0-9A-F]{40}$/.test(address)) {
    //   // If it's all small caps or all all caps, return "true
    //   return true;
    // } else {
      // Otherwise check each case
      // return isChecksumAddress(address);
    // }
  }


  const isValidAddress = (adr: any) => {
    try {
      const web3 = new Web3()
      web3.utils.toChecksumAddress(adr)
      return true
    } catch (e) {
      return false
    }
  }

  // if(isAddress()){
  //   //code when address is correct
  // }
  // else{
  //   // code to be executed when address is incorrect
  // }

  return (
    <Wrapper>
      <Container>
        <input
          type="text"
          value={resss}
          onChange={(e: any) => {
            setres(e.target.value)
          }}
        />
        <button onClick={() => {
          // console.log(isValidAddress(resss));
          // const val = library?.eth.getBalance("0xdEE7E25D3ccb46DeFc3AC9BFF95453a5521cc979")
          // console.log({val});
          
          let res3 = web3.eth.getCode(resss, function (err:any, res:any) {
            console.log({res});
            
            if (res === "0x") {
              console.log("res", "account");

            }else{
              console.log("contract");
              
            }
          })

        }}>check</button>

        <div className="NFTcontainer">

        </div>
      </Container>
    </Wrapper>
  );
};
export default Homepage;
