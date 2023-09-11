/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import {AccountantType} from "../Types";
import Accountant from "./Accountant";
import {accountantList, accountantListContainer, buttonStyles} from "./AccountantListStyles";
import React, {useEffect, useState} from "react";
import {accountantsService} from "../services/AccountantsService";

const AccountantList = () => {
    const [accountants, setAccountants] = useState<Array<AccountantType>>([]);
    const [pages, setPages] = useState(1);

    useEffect(() => {
        accountantsService.getAccountantData(pages, 5).then((result) => setAccountants(accountants.concat(result.results)))
    }, [pages]);

    const loadMore = () => {
        setPages(pages => pages + 1);
    }

    return (
        <div css={accountantListContainer}>
            <div css={accountantList}>
                {accountants.map((accuntant:AccountantType) => {
                    return <Accountant key={accuntant.login.uuid} accountant={accuntant} />
                })}
            </div>
            {accountants.length > 0 && <button onClick={() => loadMore()} css={buttonStyles}>więcej</button>}
        </div>
    );
}
export default AccountantList;
