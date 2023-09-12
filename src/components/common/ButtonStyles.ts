import {css} from "@emotion/react";
import {colors} from "../../GeneralStyles";

export const buttonStyles = css`
  background-color: ${colors.blue1};
  border-radius: 8px;
  opacity: 1;
  color: ${colors.blue2};
  border: #E3F2FD;
  padding: 8px 16px;
  
  :hover {
    cursor: pointer;
  }
`;
