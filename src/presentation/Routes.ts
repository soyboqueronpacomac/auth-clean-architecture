import { Router } from "express";
import { AuthRoutes } from "./auth";

export class AppRouter {
    static get routes (): Router {
        const routes = Router();
        //TODO: Todas rutas de la app
        // rutas auth
        routes.use('/api/auth', AuthRoutes.routes);
        return routes;
    }
}