/** @jsxImportSource @emotion/react */
import React, {useRef, useState} from "react";

import {accountantList, accountantListContainer} from "./AccountantListStyles";
import Button from "./common/Button";
import ErrorBoundary from "./common/ErrorBoundary";
import AccountantPageList from "./AccountantPageList";

const AccountantList = () => {
    const currentPage = useRef(0);
    const [pages, setPages] = useState([currentPage.current]);

    const loadMore = () => {
        currentPage.current = currentPage.current + 1
        setPages(pages => pages.concat(currentPage.current));
    }

    return (
        <div css={accountantListContainer}>
            <div css={accountantList}>
                <ErrorBoundary messageText={"O nie! Coś poszło nie tak"}>
                    {pages.map((page: number) => {
                        return (
                            <AccountantPageList key={page} page={page}/>
                        );
                    })}
                </ErrorBoundary>
            </div>
            <Button label={'Więcej'} onClick={() => loadMore()}/>
        </div>
    );
}
export default AccountantList;
