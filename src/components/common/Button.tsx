/** @jsxImportSource @emotion/react */

import {buttonStyles} from "./ButtonStyles";

type PropsType = {
    label: string;
    onClick: () => void;
}
const Button = ({label, onClick}: PropsType) => {
    return (
        <button onClick={onClick} css={buttonStyles}>{label}</button>
    );
}

export default Button;
