import { envsAdapater } from "./config";
import { Server, AppRouter } from "./presentation";

(async() =>{
    main()
})();

function main() {
    new Server({
        port: envsAdapater.PORT,
        routes: AppRouter.routes
    })
        .start()
}