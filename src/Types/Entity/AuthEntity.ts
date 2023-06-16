export interface IAdmin {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    token: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ILoginApiParam {
    email: string;
    password: string;
    deviceId: string;
    deviceType: string;
    fcmToken: string
}

