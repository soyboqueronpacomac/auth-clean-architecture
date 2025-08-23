export class CustomReponse<T = any>{
    constructor(
        public readonly statusCode: number,
        public readonly message: string,
        public readonly data?: T
    ){}
    static ok<T>(data?: T, message:string = "Success") {
        return new CustomReponse<T>(200,message, data);
    }
    static created<T>(data?: T, message:string = "Resource created successfully") {
        return new CustomReponse<T>(201,message, data);
    }
    static noContent<T>(data?: T, message:string = "No Content") {
        return new CustomReponse<T>(204,message, data);
    }
}