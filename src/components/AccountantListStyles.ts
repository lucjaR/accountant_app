import {css} from '@emotion/react';

export const accountantListContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1400px;
  margin: auto;
`;
export const accountantList = css`
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;

  @media(min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media(min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
  }
  @media(min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 12px;
  }
  @media(min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 24px;
  }
  @media(min-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 24px;
  }
`;
export const loadingContainer = css`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
