/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from "react";
import {logoContainer} from "./LogoStyles";

const Logo = () => {
    return (
        <div css={logoContainer}>
            <a href="https://www.infakt.pl/">
                <img src="https://www.infakt.pl/wp-content-new/themes/infakt/assets/images/2020/logo-infakt.svg"
                     width="91" height="24" alt="logo infakt"/>
            </a>
        </div>
    );
}

export default Logo;
