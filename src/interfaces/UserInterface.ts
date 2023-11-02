export type IUser = {
    userID:string,
    userName : string,
    userInvested : number[],
    userEmail : string,
    userPack : string
}

export type TNormalUser = {
    filter(arg0: (use: any) => boolean): TNormalUser[]
    userID:string,
    userActiveDeposit: string ,
    userName : string,
    userInvested : number[],
    userEmail : string,
    userPack : string,
}