/** @jsxImportSource @emotion/react */
import React, {useEffect, useState} from "react";

import {AccountantType} from "../Types";
import {accountantsService} from "../services/AccountantsService";
import {loadingContainer} from "./AccountantListStyles";
import Loading from "./common/Loading";
import Accountant from "./Accountant";

type PropsType = {
    page: number;
}

const AccountantPageList = ({page}: PropsType) => {
    const [isLoading, setIsLoading] = useState(true);
    const [accountants, setAccountants] = useState<Array<AccountantType>>([]);

    useEffect(() => {
        accountantsService.getAccountantData(page, 5)
            .then((result) => setAccountants(accountants.concat(result.results)))
            .finally(() => setIsLoading(false));
    }, [page]);


    if (isLoading) {
        return <div css={loadingContainer}><Loading/></div>;
    }
    return (
        <>
            {accountants.map((accountant: AccountantType) => {
                return <Accountant key={accountant.login.uuid + accountant.email} accountant={accountant}/>
            })}
        </>
    );
};

export default AccountantPageList;
