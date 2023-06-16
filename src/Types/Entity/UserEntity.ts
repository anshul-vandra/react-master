export interface IUser {
    _id: string;
    userName: string;
    email: string;
    phoneNumber: string;
    createdAt: Date | '';
    updatedAt: Date | '';
}