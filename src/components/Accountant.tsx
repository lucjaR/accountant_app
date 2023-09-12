/** @jsxImportSource @emotion/react */

import {AccountantType, GenderType} from "../Types";
import {
    accountantAvatarAndName,
    accountantContainer,
    accountantDetails,
    accountantDetailsContainer,
    accountantName,
    accountantPhone,
    buttonContainer,
    currency
} from "./AccountantStyles";
import Avatar from "./common/Avatar";
import Label from "./common/Label";
import AccountantName from "./AccountantName";
import Button from "./common/Button";

type PropsType = {
    accountant: AccountantType;
}
const Accountant = ({accountant}: PropsType) => {
    const genderLabel = accountant.gender === GenderType.male ? 'Twój księgowy' : 'Twoja księgowa';

    return (
        <div css={accountantContainer}>
            <div css={accountantAvatarAndName}>
                <Avatar picture={accountant.picture}/>
                <div css={accountantName}>
                    <Label label={genderLabel} size={16} lineHeight={24}/>
                    <AccountantName name={accountant.name}/>
                </div>
            </div>

            <div css={accountantDetailsContainer}>
                <Label label={'E-mail'} size={14} lineHeight={20}/>
                <a href={`mailto:${accountant.email}`} title={accountant.email} css={accountantDetails}>
                    {accountant.email}
                </a>
            </div>
            <div css={accountantDetailsContainer}>
                <Label label={'Telefon'} size={14} lineHeight={20}/>
                <a href={`tel:+${accountant.cell}`} css={accountantPhone}>+{accountant.cell}</a>
            </div>
            <div css={accountantDetailsContainer}>
                <Label label={'Średnia cena netto usługi / m-c'} size={14} lineHeight={20}/>
                <div>
                    <span css={accountantDetails}>350,00</span>
                    <span css={currency}>PLN</span>
                </div>
            </div>
            <div css={buttonContainer}>
                <Button label={'Dowiedz się więcej'} onClick={() => {}}/>
            </div>
        </div>
    );
}

export default Accountant;
