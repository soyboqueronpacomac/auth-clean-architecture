import { Router } from "express";

export class AuthRoutes {
    static get routes(): Router{
        const routes = Router();

        //rutas login
        routes.post('/login', (_req, res) => {
            res.json('login')
        });
        //ruta register
        routes.post('/register', (req, res) => {
            res.json('register')
        })

        return routes;
    }
}