import type { Request, Response } from "express"
import { RegisterUserDto } from "../../domain";
import { CustomError } from "../../domain/errors/custom.error";
import { CustomReponse } from "../../domain/messages/custom.message";

export class AuthController {
    constructor() {
        
    }
    registerUser = (req: Request, res: Response) => {
        const [ error, registerUserDto] = RegisterUserDto.create(req.body);
        if(error){
            const err = CustomError.badRequest(error);
            return res.status(err.statusCode).json({
                statusCode: err.statusCode,
                message: err.message
            })
        }
        const response = CustomReponse.created(registerUserDto, "User registered successfully")
        res.status(response.statusCode).json(response);
    }

    loginUser = (req: Request, res: Response) => {
        const response = CustomReponse.ok(null, "login successfully")
        res.status(response.statusCode).json(response);
    }
}