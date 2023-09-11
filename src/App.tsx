/** @jsxImportSource @emotion/react */
import React, {Suspense, lazy} from 'react';
import {css} from '@emotion/react'

import Loading from "./components/common/Loading";
import {appStyles, loadingContainer} from "./components/AppStyles";
import Logo from "./components/common/Logo";

function App() {
    const AccountantList = lazy(() => import('./components/AccountantList'))
    return (
        <div css={appStyles}>
            <Suspense fallback={<div css={loadingContainer}><Loading/></div>}>
                <Logo />
                <AccountantList/>
            </Suspense>
        </div>
    );
}

export default App;
