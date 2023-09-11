/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import {avatar, avatarContainer} from "./AvatarStyles";
import {AccountantPictureType} from "../../Types";

type PropsType = {
    picture: AccountantPictureType;
}

const Avatar = ({picture}: PropsType) => {
    return (
        <div css={avatarContainer}>
            <img src={picture.large} alt={'Picture'} css={avatar}/>
        </div>
    )
}

export default Avatar;
