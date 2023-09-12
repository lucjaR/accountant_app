/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react';
import React from "react";
import {Link} from "react-router-dom";

import {logoContainer} from "./LogoStyles";

const Logo = () => {
    return (
        <div css={logoContainer}>
            <Link to={`/ksiegowi`}><img
                src="https://www.infakt.pl/wp-content-new/themes/infakt/assets/images/2020/logo-infakt.svg"
                width="91" height="24" alt="logo infakt"/>
            </Link>
        </div>
    );
}

export default Logo;
