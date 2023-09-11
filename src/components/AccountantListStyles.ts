import {css} from '@emotion/react';
import {colors} from "../GeneralStyles";

export const accountantListContainer = css`
  display: flex;
  flex-direction: column;
  padding: 24px 40px;
  align-items: center;
  
  @media(min-width: 768px) {
    padding: 40px;
  }
  @media(min-width: 992px) {
    padding: 64px;
  }
  @media(min-width: 1200px) {
    padding: 64px 84px;
  }
`;
export const accountantList = css`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;

  @media(min-width: 648px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
export const buttonStyles = css`
  background-color: ${colors.blue1};
  border-radius: 8px;
  opacity: 1;
`;
