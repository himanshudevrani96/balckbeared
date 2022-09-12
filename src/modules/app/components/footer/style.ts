import styled from "styled-components";
import { colors, screenSizes } from "../../../../shared/styles/theme";

export const FooterContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (min-width: ${screenSizes.mediaS}px) {
    flex-direction: row;
    padding: 20px 40px;
  }
  p {
    font-family: Regular;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    text-align: center;
    color: ${colors.white};
  }

  a {
    margin-right: 20px;
  }
  img {
    margin-top: 6px;
  }
`;

export const FooterFlex = styled.div`
  display: flex;
  justify-content: center;
`;

export const NavTabsFooter = styled.div`
  display: flex;
  justify-content: center;
  border: none;
  margin-right: 0px;
  margin-bottom: 5px;
  @media (min-width: ${screenSizes.mediaS}px) {
    margin-right: 30px;
    border-right: 1px solid;
    border-color: rgba(255, 255, 255, 0.2);
    margin-bottom: 0;
  }
`;

export const NavTab = styled.div`
  color: #a09fa2;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  font-family: SemiBold;
  margin: 0 30px 0 0;
  padding-top: 7px;
  cursor: pointer;
  transaction:all 0.3s;
  &:hover{
    color: ${colors.neon};
  }
`;
