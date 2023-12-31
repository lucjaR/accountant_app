import {css} from '@emotion/react';

import {colors} from "../GeneralStyles";

const commonStyles = css`
  opacity: 1;
  color: ${colors.black};
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0;
  line-height: 24px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
export const accountantContainer = css`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  border-radius: 16px;
  border: 1px solid ${colors.gray1};
  margin: 12px;
  padding: 24px;
  max-width: 300px;
  width: 300px;
  height: 376px;
  box-sizing: border-box;
`;
export const accountantAvatarAndName = css`
  display: flex;
`;
export const accountantName = css`
  display: flex;
  flex-direction: column;
  padding-left: 16px;
  padding-top: 4px;
  overflow: hidden;
`;
export const accountantDetailsContainer = css`
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
`;
export const accountantDetails = css`
  ${commonStyles}
`;
export const accountantPhone = css`
  ${commonStyles}
  text-decoration: none;
`;
export const currency = css`
  opacity: 1;
  color: ${colors.black};
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0;
  line-height: 16px;
  padding-left: 4px;
`;
export const buttonContainer = css`
  display: flex;
  flex-grow: 1;
  align-items: flex-end;
`;
