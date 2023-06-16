// Can vary depending on your BE response

export interface IApiSuccess {
    data: any;
    message: number;
    status: number
}
export interface IApiError {
    message: string;
    status: number
}