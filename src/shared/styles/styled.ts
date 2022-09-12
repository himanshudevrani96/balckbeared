import styled from "styled-components";
import { colors, screenSizes } from "./theme";

export interface ButtonAreaProps {
  gradient?: string;
  disabled?: boolean;
}
export const MainContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  @media (min-width: ${screenSizes.mediaM}px) {
    width: 70%;
    margin: 0 auto;
  }
`;

export const ThreeColumns = styled.div`
  display: grid;
  grid-gap: 0px;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: ${screenSizes.mediaS}px) {
    grid-gap: 25px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${screenSizes.mediaL}px) {
    grid-gap: 25px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    grid-gap: 25px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const TwoColumns = styled.div`
  display: grid;
  grid-gap: 0px;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: ${screenSizes.mediaS}px) {
    grid-gap: 25px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: ${screenSizes.mediaL}px) {
    grid-gap: 25px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: ${screenSizes.mediaXL}px) {
    grid-gap: 25px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SpreadColumns = styled.div`
display: flex;
flex-direction: column;
@media (min-width: ${screenSizes.mediaL}px) {
display: flex;
  flex-direction: row;
}
`;