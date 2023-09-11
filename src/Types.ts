export type AccountantNameType = {
    first: string;
    last: string;
}
export type AccountantPictureType = {
    thumbnail: string;
    medium: string;
    large: string
}
export enum GenderType {
    'male' = 'male',
    'female' = 'female'
}

export type AccountantType = {
    cell: string;
    gender: GenderType;
    name: AccountantNameType;
    email: string;
    picture: AccountantPictureType;
    login: {
        uuid: string;
    };
};
export type AccountantResponseType = {
    results: AccountantType[];
    info: {
        page: number;
    };
};
