export interface IUser {
  about: string;
  address: string;
  balance: string;
  company: string;
  email: string;
  eyeColor: string;
  favoriteFruit: string;
  friendsDynamic: IFriendCount[];
  gender: string;
  _id: string;
}

interface IFriendCount {
    count: number;
    date: string;
}
