/** @jsxImportSource @emotion/react */

import {AccountantNameType} from "../Types";
import {nameStyles} from "./AccountantNameStyles";

type PropsType = {
    name: AccountantNameType;
}

const AccountantName = ({name}: PropsType) => {
    return (
        <div css={nameStyles} title={`${name.first} ${name.last}`}>{`${name.first} ${name.last}`}</div>
    );
}

export default AccountantName;
