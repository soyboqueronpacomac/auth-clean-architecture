import { Validators } from "../../../config";

export class RegisterUserDto {
    private constructor(
        public name: string,
        public email: string,
        public password: string
    ) {
        
    }

    static create(body: {[key: string]: any}): [string?, RegisterUserDto?] {
        const { name, email, password} = body;
        // Si nombre no viene
        if (!name) return ['Missing name'];
        if (!email) return ['Missing email'];
        if(!Validators.email.test(email)) return ['Email is not valid']
        if (!password) return ['Missing password'];
        if (password.length < 8) return ['Password too short'];

        return [
            undefined,
            new RegisterUserDto( name, email.toLowerCase(), password)
        ]

        
    }
}