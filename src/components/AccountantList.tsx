/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, {useEffect, useState} from "react";

import {AccountantType} from "../Types";
import Accountant from "./Accountant";
import {accountantList, accountantListContainer} from "./AccountantListStyles";
import {accountantsService} from "../services/AccountantsService";
import Button from "./common/Button";

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
                {accountants.map((accountant: AccountantType) => {
                    return <Accountant key={accountant.login.uuid + accountant.email} accountant={accountant} />
                })}
            </div>
            {accountants.length > 0 && <Button label={'Więcej'} onClick={()=> loadMore()}/>}
        </div>
    );
}
export default AccountantList;
