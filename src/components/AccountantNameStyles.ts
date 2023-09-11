import {css} from '@emotion/react';

import {colors} from "../GeneralStyles";

export const nameStyles = css`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: ${colors.black};
  text-align: start;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
