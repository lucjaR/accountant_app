/** @jsxImportSource @emotion/react */
import React from 'react';

import {appStyles} from "./components/AppStyles";
import Logo from "./components/common/Logo";
import ErrorBoundary from "./components/common/ErrorBoundary";
import AccountantList from "./components/AccountantList";

function App() {
    return (
        <div css={appStyles}>
            <ErrorBoundary messageText={"O nie! Coś poszło nie tak"}>
                <Logo/>
                <AccountantList/>
            </ErrorBoundary>
        </div>
    );
}

export default App;
