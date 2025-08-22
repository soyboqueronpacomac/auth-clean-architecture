import { Router } from "express";
import { AuthController } from "./AuthController";

export class AuthRoutes {
    static get routes(): Router{
        const routes = Router();
        const controller = new AuthController();
        //rutas login
        routes.post('/login', controller.loginUser);
        //ruta register
        routes.post('/register', controller.registerUser)

        return routes;
    }
}