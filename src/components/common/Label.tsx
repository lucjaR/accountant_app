/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

import {colors} from "../../GeneralStyles";

type PropsType = {
    label: string;
    size: number;
    lineHeight: number;

}

const Label = ({label, size, lineHeight}: PropsType) => {
    return (
        <StyledLabel size={size} lineHeight={lineHeight}>{label}</StyledLabel>
    )
}

export default Label;

type StyledLabelType = {
    size: number;
    lineHeight: number;
}

const StyledLabel = styled.span<StyledLabelType>`
  display: flex;
  font-size: ${(props: StyledLabelType) => props.size}px;
  font-weight: 400;
  line-height: ${(props: StyledLabelType) => props.lineHeight}px;
  color: ${colors.gray2};
  opacity: 1;
`;
