import type { Request, Response } from "express"

export class AuthController {
    constructor() {
        
    }
    registerUser = (req: Request, res: Response) => {
        res.json({ message: "RegisterUser controller"});
    }

    loginUser = (req: Request, res: Response) => {
        res.json({ message: "LoginUser controller"});
    }
}