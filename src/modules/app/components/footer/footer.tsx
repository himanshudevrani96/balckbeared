import React, { useState } from "react";
import { FooterContainer, FooterFlex, NavTabsFooter, NavTab } from "./style";

const Footer = () => {
  const toWsb = () => {
    window.open("https://www.wsbdapp.com/");
  };
  const toGov = () => {
    window.open("https://gov.wsbdapp.com/");
  };

  const toFarms = () => {
    window.open("https://farm.wsbdapp.com/");
  };
  const toVote = () => {
    window.open("https://vote.wsbdapp.com/");
  };

  return (
    <FooterContainer>
      <NavTabsFooter>
        <NavTab onClick={toWsb}>WSBDAPP.COM</NavTab>
        <NavTab onClick={toGov}>DISCUSS</NavTab>
        <NavTab onClick={toFarms}>FARMS</NavTab>
        <NavTab onClick={toVote}>VOTE</NavTab>
      </NavTabsFooter>

      <FooterFlex>
        <a href="https://twitter.com/WSBDApp" target="_blank" rel="noreferrer">
          <img
            src={require("../../../../assets/icons/twitter.svg").default}
            alt=""
          />
        </a>
        <a href="https://t.me/wallstreetbets" target="_blank" rel="noreferrer">
          <img
            src={require("../../../../assets/icons/telegram.svg").default}
            alt=""
          />
        </a>
        <a
          href="https://www.youtube.com/channel/UCUvxcGE0XCWVPmflZiUXK-g"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={require("../../../../assets/icons/youTube.svg").default}
            alt=""
          />
        </a>
      </FooterFlex>
    </FooterContainer>
  );
};

export default Footer;
