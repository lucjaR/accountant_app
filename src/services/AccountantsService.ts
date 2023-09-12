import {AccountantResponseType} from "../Types";

class AccountantsService {
    public getAccountantData = async (pageNr: number, pageSize: number = 5): Promise<AccountantResponseType> => {
        return fetch(`https://randomuser.me/api/?seed=abc&gender=female&page=${pageNr}&results=${pageSize}`, {
            method: 'GET'
        }).then(response => {
            if (response.ok) {
                return response.json();
            }
            throw Error(response.statusText);
        }).catch((error) => {
            throw Error("Nie można pobrać danych")
        })
    }
}

export const accountantsService = new AccountantsService();
