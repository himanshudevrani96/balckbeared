import styled, { keyframes } from "styled-components";
import { colors, screenSizes } from "../../shared/styles/theme";
import { Button } from "../../shared/components/button";

import backCover from "../../assets/image/mobile-cover.svg";
import backCoverDesktop from "../../assets/image/cover-page.svg";
import { StyledTable } from "../../shared/components/styledTable";

export const Container = styled.div`
  margin: 20px;
  @media (min-width: ${screenSizes.mediaS}px) {
    margin: 10px 40px;
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    margin: 10px 40px;
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    margin: 10px 70px;
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    margin: 10px 100px;
  }
  @media (min-width: ${screenSizes.mediaXXL}px) {
    margin: 10px 119px;
  }
`;
export const Wrapper = styled.div`
  background-color:#12132b;
  margin-top: 80px;
  position: relative;
`;
export const WalletContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20%;
  h2{
    color:#fff
  }
`;
export const Col = styled.div``;

export const Heading = styled.div`
  font-size: 28px;
  line-height: 35px;
  color: ${colors.white};
  margin: 14px 0;
  font-family: Bold;
`;

export const SubHead = styled.div`
  display: flex;
  p {
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 31px;
    color: ${colors.white};
    margin: 0;
    font-family: SemiBold;
  }
  a {
    color: ${colors.green};
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    margin: 9px;
    font-family: SemiBold;
  }
`;

export const MainContainer = styled.div``;

export const SideContainer = styled.div`
  margin: 20px 0;
  @media (min-width: ${screenSizes.mediaS}px) {
    margin: 20px auto;
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    margin: 0;
  }
  position: relative;
`;

export const SideContainerWrapper = styled.div`
  border: 1px solid rgba(186, 169, 255, 0.1);
  width: 89%;
  padding: 20px;
  margin-top: 20px;
  border: 1px solid rgba(186, 169, 255, 0.1);
  background: rgba(186, 169, 255, 0.07);
  backdrop-filter: blur(15px);
  padding: 0px 20px 20px 20px;
  position: absolute;
  top: 0;

  // @media (min-width: ${screenSizes.mediaXL}px) {
  //   position: fixed;
  //   width: 26%;
  // }
  // @media (min-width: ${screenSizes.mediaXXL}px) {
  //   position: fixed;
  //   width: 26%;
  // }

  // @media (min-width: ${screenSizes.mediaLX}px) {
  //   position: fixed;
  //   width: 27%;
  // }

  // @media (min-width: ${screenSizes.mediaLXX}px) {
  //   position: fixed;
  //   width: 24%;
  // }
  // @media (min-width: ${2200}px) {
  //   position: fixed;
  //   width: 22%;
  // }
  // @media (min-width: ${2300}px) {
  //   position: fixed;
  //   width: 21%;
  // }

  // @media (min-width: ${2400}px) {
  //   position: fixed;
  //   width: 16%;
  // }
`;

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: ${screenSizes.mediaXL}px) {
    display: block;
  }
`;

export const InfoBox = styled.div`
  border: 1px solid rgba(186, 169, 255, 0.1);
  padding: 16px;
  margin-bottom: 20px;
  @media (min-width: ${screenSizes.mediaS}px) {
    margin-bottom: 0px;
  }
  h2 {
    font-family: SemiBold;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: ${colors.white};
    opacity: 0.6;
    margin: 0 0 10px 0;
  }
  p {
    font-family: SemiBold;
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    color: ${colors.white};
    margin: 0;
  }
`;

export const GridInfoBox = styled.div`
  border: 1px solid rgba(186, 169, 255, 0.1);
  padding: 16px;
  width: auto;
  @media (min-width: ${screenSizes.mediaM}px) {
    width: 30%;
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    width: 30%;
  }

  h2 {
    font-family: SemiBold;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: ${colors.white};
    opacity: 0.6;
    margin: 0 0 10px 0;
  }
  p {
    font-family: SemiBold;
    font-weight: 500;
    font-size: 20px;
    line-height: 25px;
    color: ${colors.white};
    margin: 20px 0;
  }
`;

export const FlexInfo = styled.div`
  display: flex;
  margin-top: 10px;

  h3 {
    font-family: SemiBold;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: ${colors.white};
    opacity: 0.6;
    margin: 0;
  }

  span {
    font-family: SemiBold;
    font-weight: 600;
    font-size: 13px;
    line-height: 16px;
    color: ${colors.green};
    margin: 2px 0 0 15px;
  }
`;

export const Returns = styled.div`
  border: 1px solid rgba(186, 169, 255, 0.1);
  padding: 16px 0;
  width: auto;
  margin-right: 0px;
  margin-bottom: 20px;

  @media (min-width: ${screenSizes.mediaM}px) {
    width: 93%;
    margin-right: 18px;
    margin-bottom: 0px;
  }

  @media (min-width: ${screenSizes.mediaL}px) {
    width: 65%;
    margin-right: 18px;
    margin-bottom: 0px;
  }

  h2 {
    font-family: SemiBold;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: ${colors.white};
    opacity: 0.6;
    margin: 0 0 10px 0;
  }
`;

export const ReturnRow = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  text-align: center;
  h4 {
    font-family: Regular;
    color: ${colors.white};
    opacity: 0.8;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
  }
  p {
    font-family: SemiBold;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: ${colors.white};
    margin: 22px 0 5px 0;
  }
`;

export const Distribution = styled.div`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  @media (min-width: ${screenSizes.mediaL}px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const DoughnutChartArea = styled.div`
  border: 1px solid rgba(186, 169, 255, 0.1);
  padding: 16px;
  width: auto;
  @media (min-width: ${screenSizes.mediaL}px) {
    width: 22%;
  }
  @media (min-width: ${1330}px) {
    width: 20%;
  }
`;

export const TableWrapper = styled.div`
  border: 1px solid rgba(186, 169, 255, 0.1);
  padding: 16px 0;
  width: auto;
  margin-right: 0;
  // overflow-x: auto;
  margin-bottom: 20px;
  @media (min-width: ${screenSizes.mediaM}px) {
    width: 100%;
    margin-right: 22px;
    overflow: none;
    margin-bottom: 0px;
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    width: 71%;
    overflow: none;
    margin-bottom: 0px;
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    width: 71%;
    overflow: none;
    margin-bottom: 0px;
  }
  @media (min-width: ${1330}px) {
    width: 74%;
  }

  h2 {
    font-family: SemiBold;
    color: ${colors.white};
    opacity: 0.6;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    margin: 0;
  }
`;
export const InfoCol = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    width: 8px;
    height: 8px;
    background: #00f1fd;
    display: block;
    border-radius: 50%;
    margin: 4px 7px 0 0;
  }
  p {
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    color: ${colors.white};
    margin: 0;
    font-family: SemiBold;
  }
`;

// export const StyledPaymentTable = styled(StyledTable)`
//   margin-top: 20px;
//   .ReactTable .-pagination {
//     position: relative;
//     border-top: 0;
//   }
//   .ReactTable .-pagination .-pageSizeOptions {
//     margin: 3px 10px;
//     position: absolute;
//     :before {
//       cursor: initial;
//       content: "showing:";
//     }
//     select {
//       margin-bottom: 0;
//     }

//     @media (min-width: ${screenSizes.mediaL}px) {
//       bottom: 5px;
//       left: 100px;
//     }
//   }
//   .ReactTable .rt-thead {
//     .rt-th {
//       display: flex;
//       justify-content: flex-end;
//       font-weight: 800;
//       font-size: 12px;
//       text-transform: capitalize;
//       width: auto !important;

//       @media (min-width: ${screenSizes.mediaL}px) {
//         font-size: 10px;
//         line-height: 20px;
//         color: ${colors.white};
//         font-family: Regular;
//       }
//       @media (min-width: ${screenSizes.mediaXL}px) {
//         font-size: 12px;
//         line-height: 20px;
//         color: ${colors.white};
//         font-family: Regular;
//       }
//     }
//     .rt-th:first-child {
//       display: flex;
//       justify-content: flex-start;
//     }
//     .rt-th:nth-child(2) {
//       display: flex;
//       justify-content: flex-end;
//       @media (min-width: ${screenSizes.mediaS}px) {
//         justify-content: flex-start;
//       }
//     }

//     .rt-th:nth-child(3) {
//       display: none;
//       @media (min-width: ${screenSizes.mediaS}px) {
//         display: block;
//       }
//     }

//     .rt-th:nth-child(4) {
//       display: none;
//       @media (min-width: ${screenSizes.mediaS}px) {
//         display: block;
//       }
//     }

//     .rt-th:last-child {
//       padding-right: 10px;
//       @media (min-width: ${screenSizes.mediaS}px) {
//         padding-right: 30px;
//       }
//     }
//   }

//   .ReactTable .rt-thead.-header {
//     background: ${colors.base};
//     color: ${colors.white};
//     font-weight: 500;
//     border-top-left-radius: 8px;
//     border-top-right-radius: 8px;
//     min-width: 300px !important;
//     font-family: sans-serif;
//   }

//   .ReactTable .rt-tbody {
//     font-size: 12px;
//     background: transparent;
//     min-width: 300px !important;

//     .rt-tr.-odd {
//       border-radius: 4px;
//     }
//     .rt-td {
//       color: ${colors.white} !important;
//       all: unset;
//       text-align: center;
//       padding: 17px 0 18px 0;
//       box-sizing: border-box;
//       position: relative;
//       font-family: SemiBold;
//       width: auto !important;
//       @media (min-width: ${screenSizes.mediaS}px) {
//         text-align: right;
//       }
//       @media (min-width: ${screenSizes.mediaL}px) {
//         font-size: 10px;
//         line-height: 20px;
//         color: ${colors.white};
//         font-family: Regular;
//       }
//       @media (min-width: ${screenSizes.mediaXL}px) {
//         font-size: 12px;
//         line-height: 20px;
//         color: ${colors.white};
//         font-family: Regular;
//       }
//     }
//     .rt-td:first-child {
//       text-align: left;
//     }

//     .rt-td:nth-child(3) {
//       display: none;
//       @media (min-width: ${screenSizes.mediaS}px) {
//         display: block;
//       }
//     }

//     .rt-td:nth-child(4) {
//       display: none;
//       @media (min-width: ${screenSizes.mediaS}px) {
//         display: block;
//       }
//     }

//     .rt-td:last-child {
//       padding-right: 20px;
//       padding-left: 20px;
//     }
//     @media (min-width: ${screenSizes.mediaL}px) {
//       font-size: 14px;
//     }
//   }

//   .ReactTable .rt-tfoot {
//     font-size: 12px;
//     margin-bottom: 30px;
//     min-height: 100px;
//     .rt-td {
//       text-align: right;
//       border-right: 0px;
//       padding: 17px 0 18px 0;
//     }
//     .footer-border {
//       margin: 12px 0;
//       border-bottom: 1px solid rgba(255, 255, 255, 0.1);
//     }
//     @media (min-width: ${screenSizes.mediaL}px) {
//       font-size: 16px;
//     }
//   }

//   span {
//     opacity: 0.4;
//   }

//   .arrow-div {
//     margin: 0 7px;
//   }

//   .active-down-arrow {
//     display: none;
//   }

//   .active-down-arrow-flipped {
//     transform: rotate(180deg);
//     display: none;
//   }

//   .-sort-desc {
//     box-shadow: none !important;
//     &:before {
//       content: "▼";
//       float: right;
//       margin-right: 5px;
//     }
//   }

//   .-sort-asc {
//     box-shadow: none !important;
//     &:before {
//       content: "▲";
//       float: right;
//       margin-right: 5px;
//     }
//   }
// `;

export const StyledPaymentTable = styled(StyledTable)`
  margin-top: 30px;
  .ReactTable .-pagination {
    position: relative;
    border-top: 0;
  }
  ReactTable .rt-tr-group {
    border-bottom: 1px solid rgba(186, 169, 255, 0.25) !important;
  }
  .ReactTable .-pagination .-pageSizeOptions {
    margin: 3px 10px;
    position: absolute;
    :before {
      cursor: initial;
      content: "showing:";
    }
    select {
      margin-bottom: 0;
    }

    @media (min-width: ${screenSizes.mediaL}px) {
      bottom: 5px;
      left: 100px;
    }
  }
  .ReactTable .rt-thead {
    .rt-th {
      display: flex;
      justify-content: flex-end;
      font-weight: 800;
      font-size: 10px;
      font-weight: normal;
      text-transform: Capitalize;
      @media (min-width: ${screenSizes.mediaL}px) {
        font-size: 11px;
        line-height: 20px;
      }
      @media (min-width: ${1400}px) {
        font-size: 12px;
        line-height: 20px;
      }
    }
    .rt-th:first-child {
      display: flex;
      justify-content: flex-start;
    }
    .rt-th:nth-child(2) {
      display: flex;
      justify-content: center;
    }

    .rt-th:nth-child(3) {
      display: none;
      @media (min-width: ${screenSizes.mediaS}px) {
        display: flex;
      }
    }

    .rt-th:nth-child(4) {
      display: none;
      @media (min-width: ${screenSizes.mediaS}px) {
        display: flex;
      }
    }

    .rt-th:last-child {
      padding-right: 20px;
    }
  }

  .ReactTable .rt-thead.-header {
    background: rgba(186, 169, 255, 0.03);
    color: ${colors.white};
    font-weight: 500;
    min-width: 300px !important;
    @media (min-width: ${screenSizes.mediaS}px) {
      min-width: 600px;
    }
  }

  .ReactTable .rt-tbody {
    font-size: 12px;
    min-width: 300px !important;
    @media (min-width: ${screenSizes.mediaS}px) {
      min-width: 600px;
      padding: 0 10px;
    }

    background: #121119 !important;
    .rt-tr.-odd {
      border-radius: 4px;
    }
    .rt-tr {
      &:hover {
        cursor: pointer;
      }
    }
    .rt-td {
      color: ${colors.white} !important;
      all: unset;
      text-align: right;
      padding: 10px 12px 10px 0;
      box-sizing: border-box;
      position: relative;
      font-family: SemiBold;
      font-weight: 600;
      font-size: 12px;
      line-height: 15px;
    }
    .rt-td:first-child {
      text-align: left;
    }

    .rt-td:nth-child(2) {
      text-align: center;
    }

    .rt-td:nth-child(3) {
      display: none;
      @media (min-width: ${screenSizes.mediaS}px) {
        display: block;
      }
    }

    .rt-td:nth-child(4) {
      display: none;
      @media (min-width: ${screenSizes.mediaS}px) {
        display: block;
      }
    }

    .rt-td:last-child {
      padding-right: 20px;
      padding-left: 20px;
    }
  }

  .ReactTable .rt-tfoot {
    font-size: 12px;
    margin-bottom: 30px;
    min-height: 100px;
    .rt-td {
      text-align: right;
      border-right: 0px;
      padding: 17px 0 18px 0;
    }
    .footer-border {
      margin: 12px 0;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    @media (min-width: ${screenSizes.mediaL}px) {
      font-size: 16px;
    }
  }

  span {
    opacity: 0.4;
  }

  .arrow-div {
    margin: 0 7px;
  }

  .active-down-arrow {
    display: none;
  }

  .active-down-arrow-flipped {
    transform: rotate(180deg);
    display: none;
  }

  .-sort-desc {
    box-shadow: none !important;
    &:before {
      content: "▼";
      float: right;
      margin-right: 5px;
    }
  }

  .-sort-asc {
    box-shadow: none !important;
    &:before {
      content: "▲";
      float: right;
      margin-right: 5px;
    }
  }
`;

export const SideContainerText = styled.h1`
  font-family: SemiBold;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  margin: 3px;
  color: ${(props) => (props.color === "white" ? "#ffffff" : "#00D7E7")};
`;
export const SideContainerHeader = styled.div`
  display: flex;
`;

export const TokenContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

export const TokenContainer = styled.div<{ selected: any }>`
  // background: rgba(186, 169, 255, 0.03);
  width: auto;
  height: 80px;
  margin-top: 17.5px;
  margin-bottom: 2px;
  border: 1px solid rgba(186, 169, 255, 0.1);
  transition: all 0.2s;

  background: ${(props) =>
    props.selected ? `#222030` : `rgba(186, 169, 255, 0.03)`};

  &:hover {
    background: #222030;
    border: 0.5px solid rgba(186, 169, 255, 0.25);
  }
`;

export const DownArrow = styled.div`
  align-self: center;
  margin-bottom: -31px;
  margin-top: -12px;
  z-index: 5;
`;

export const TokenMainWrapper = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-between;
  padding: 0 12px;
`;

export const TokenPrimary = styled.div`
  display: flex;
`;

export const InputWrapper = styled.input`
  width: 100px;
  height: 30px;
  border: 0;
  outline: none;
  background: inherit;
  color: ${colors.white};
  font-size: 24px;
  font-family: SemiBold;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 30px;
  text-align: right;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const TokenBalance = styled.div``;

export const TokenBalanceText = styled.h1`
  font-family: "SemiBold";
  font-style: normal;
  font-weight: normal;
  font-size: 11px;
  line-height: 12px;
  color: ${colors.white};
  opacity: 0.6;
  margin: 0;

  @media (min-width: ${screenSizes.mediaXXL}px) {
    font-size: 12px;
    line-height: 15px;
  }
`;
export const TokenBalanceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 12px;
`;

export const TokenPara = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 7px 0;
  margin-bottom: -4px;
`;

export const SlippageWrapper = styled.div`
  margin-top: 14px;
  display: flex;
`;

export const SlippageButton = styled.button<{ selected: any }>`
  background: initial;
  border: ${(props) =>
    props.selected
      ? `1px solid ${colors.neon}`
      : `1px solid rgba(186, 169, 255, 0.25)`};

  background: ${(props) =>
    props.selected ? `rgba(0, 215, 231, 0.1)` : `initial`};

  width: 50px;
  height: 28px;
  color: ${colors.neon};
  margin-right: 4px;
  font-family: SemiBold;
  font-size: 12px;
  line-height: 15px;
  padding: 5px 9px;
  transition: all 0.2s;
  &:hover {
    border: 1px solid #00d7e7;
    background: rgba(0, 215, 231, 0.1);
    backdrop-filter: blur(15px);
  }
`;

export const SlippageInput = styled.input<{ selected: any }>`
  height: 25px;
  border: 1px solid rgba(186, 169, 255, 0.03);
  outline: none;
  background: rgba(186, 169, 255, 0.03);
  color: ${(props) => (props.selected ? "#fff" : "#a09fa2")};
  font-size: 12px;
  font-family: SemiBold;
  font-style: normal;
  font-weight: 600;
  line-height: 15px;
  padding: 0 6px;

  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    font-style: Semibold;
    font-size: 12px;
    line-height: 15px;
    color: #a09fa2;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    font-style: Semibold;
    font-size: 12px;
    line-height: 15px;
    color: #a09fa2;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    font-style: Semibold;
    font-size: 12px;
    line-height: 15px;
    color: #a09fa2;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    font-style: Semibold;
    font-size: 12px;
    color: #a09fa2;
  }

  &:hover {
    background: #222030;
    border: 0.5px solid rgba(186, 169, 255, 0.25);
  }
`;

// export const BuyButton = styled.button`
//   background: #00d7e7;
//   border: 1px solid #00d7e7;
//   width: 335px;
//   height: 41px;
//   color: #1d1a28;
//   margin-right: 4px;
//   margin-top: 24px;
// `;

// export const BuyText = styled.h1`
//   font-family: Source Code Pro;
//   font-style: Semibold;
//   font-size: 12px;
//   line-height: 15px;
// `;

export const ButtonWrapper = styled.div`
  margin: 16px 0px;
`;

export const FooterText = styled.h1`
  font-family: Regular;
  font-size: 10px;
  line-height: 13px;
  color: rgba(255, 255, 255, 0.6);
`;

export const FooterWrapper = styled.div`
  text-align: center;
`;

type TabProps = {
  isActive?: boolean;
};
export const HeaderMain = styled.div<TabProps>`
  font-family: SemiBold;
  width: 50%;
  cursor: pointer;
  padding: 20px;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: ${(props) => (props.isActive ? "#00D7E7 " : "#A09FA2")};
  border-bottom: ${(props) =>
    props.isActive
      ? "1px solid rgb(0, 215, 231) "
      : "1px solid rgba(186, 169, 255, 0.1)"};

  background: ${(props) =>
    props.isActive
      ? "radial-gradient( 34.23% 53.55% at 47% 111%,rgba(0,215,231,0.4) 0%,rgba(46,46,46,0) 95% )"
      : "none"};
`;

export const TokenListWrapper = styled.div`
  border-top: 1px solid rgba(186, 169, 255, 0.1);
  padding: 20px;
`;

export const TokenRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
  img {
    margin-right: 15px;
  }
  h1 {
    font-family: SemiBold;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: ${colors.white};
    margin: 0;
  }

  p {
    font-family: Regular;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 15px;
    color: #a09fa2;
    margin: 0;
  }

  span {
    font-family: SemiBold;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    color: ${colors.white};
  }
`;

export const DesktopItems = styled.div`
  display: none;
  @media (min-width: ${screenSizes.mediaS}px) {
    display: block;
  }
`;

export const ChartContainerWrap = styled.div`
  margin: 0 0 -32px 0;
  text-align: right;
`;

export const ModelMainText = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 25px;
  text-align: center;
  font-family: SemiBold;
  color: ${colors.white};
`;

export const ModelSubText = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: ${colors.white};
  font-family: SemiBold;
`;

export const ModelSubLink = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #00d7e7;
  font-family: SemiBold;
  cursor: pointer;
`;

export const GradientOne = styled.div`
  filter: blur(200px);
  height: 600px;
  width: 600px;
  position: absolute;
  right: 0;
  background: linear-gradient(
    229.35deg,
    rgba(92, 93, 141, 0.4) 7.11%,
    rgba(14, 14, 14, 0.4) 73.87%
  );
  top: 0;
  display: none;
  @media (min-width: ${screenSizes.mediaS}px) {
    display: block;
  }
`;

export const GradientTwo = styled.div`
  filter: blur(200px);
  height: 500px;
  width: 500px;
  position: absolute;
  left: 0;
  background: linear-gradient(
    270deg,
    rgba(92, 93, 141, 0.4) 0%,
    rgba(14, 14, 14, 0.4) 69.17%
  );
  filter: blur(200px);
  transform: rotate(-180deg);
  top: 700px;
  display: none;
  @media (min-width: ${screenSizes.mediaS}px) {
    display: block;
  }
`;

export const DropArea = styled.div<{ selected: any }>`
  display: flex;
  cursor: pointer;
  background: transparent;
  border-radius: 8px;
  padding: 2px 10px;
  height: 27px;
  margin: 9px 0 0 0;
  transition: all 0.3s;
  background: ${(props) =>
    props.selected ? `rgba(186, 169, 255, 0.07)` : `transparent`};

  &:hover {
    background: rgba(186, 169, 255, 0.07);
  }
`;

export const DropAreaMin = styled.div`
  display: flex;
  cursor: pointer;
  background: transparent;
  border-radius: 8px;
  padding: 2px 10px;
  height: 27px;
  margin: 9px 0 0 0;
  transition: all 0.3s;
`;

export const Percentage = styled.span`
  position: absolute;
  right: 7%;
  font-size: 12px;
  color: #a09fa2;
  top: 19%;
`;

export const ChechboxButton = styled.button<{ selected: any }>`
  background: initial;
  position: relative;
  border: ${(props) =>
    props.selected
      ? `1px solid ${colors.neon}`
      : `1px solid rgba(186, 169, 255, 0.25)`};

  background: ${(props) =>
    props.selected ? `rgba(0, 215, 231, 0.1)` : `initial`};

  width: 18px;
  height: 18px;
  color: ${colors.neon};
  margin-right: 4px;
  font-family: SemiBold;
  font-size: 12px;
  line-height: 15px;
  padding: 5px 9px;
  transition: all 0.2s;
  &:hover {
    border: 1px solid #00d7e7;
    background: rgba(0, 215, 231, 0.1);
    backdrop-filter: blur(15px);
  }
`;

export const PriceImpactPara = styled.div`
  font-family: SemiBold;
  font-size: 12px;
  color: #ffffff;
  line-height: 15px;
  font-weight: normal;
  width: 313px;
  margin-left: 11px;
  @media (max-width: ${screenSizes.mediaXL}px) {
    width: 100%
  }
`;

export const PriceImpactPer = styled.div`
font-family: SemiBold;
font-size: 12px;
color: #FF483E;
line-height: 15px;
font-weight: normal;
`;

export const DropdownArea = styled.div`
  position: relative;
  z-index: 1;
`;

export const DropdownHead = styled.div`
  display: flex;
  align-items: center;
  // margin-left: auto;
  width: 94%;
  padding: 10px;
  // margin-bottom: 20px;
  border: 1px solid rgba(186, 169, 255, 0.25);
  justify-content: space-between;
  margin: 20px 0 30px 0;
  @media (min-width: ${screenSizes.mediaS}px) {
    margin: 0;
    width: max-content;
    justify-content: flex-start;
  }
  span {
    font-family: SemiBold;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 15px;
    color: ${colors.neon};
    margin: 0 5px;
    cursor: pointer;
  }
`;

export const DropdownContent = styled.div`
  position: absolute;
  top: 104px;
  right: 0;
  border-radius: 4px;
  padding: 0 10px;
  width: 250px;
  color: ${colors.white};

  background-color: #4e5151c7;
  border: 1px solid rgba(186, 169, 255, 0.1);
  backdrop-filter: blur(15px);

  @media (min-width: ${screenSizes.mediaS}px) {
    top: 45px;
  }
`;
export const DropdownContentRow = styled.div`
  display: flex;
  align-items: center;
  // border-bottom: 1px solid rgba(186, 169, 255, 0.1);
  cursor: pointer;
  padding: 10px 0;
  transition: all 0.3s;

  &:last-child {
    border-bottom: none;
  }

  p {
    font-family: SemiBold;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 15px;
    color: ${colors.neon};
    margin: 0 5px;
  }

  &:hover {
    p {
      color: ${colors.neon};
    }
  }
`;
export const DropTokenImage = styled.img`
  height: 16px;
  margin-right: 5px;
`;
export const SoonTag = styled.span`
  display: inline-block;
  font-size: 8px;
  color: #a09fa2;
  padding: 5px 10px;
  background: #121018;
  border-radius: 8px;

  margin-left: 5px;
  font-family: SemiBold;
`;

export const BannerWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  @media (min-width: ${screenSizes.mediaS}px) {
    flex-direction: row;
  }
`;
export const DropWrap = styled.div`
  width: 100%;
  background-color:#12132b;
  @media (min-width: ${screenSizes.mediaS}px) {
    width: auto;
  }
`;
