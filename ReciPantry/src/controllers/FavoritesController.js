import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { favoritesService } from "../services/FavoritesService.js";


export class FavoritesController extends BaseController {
    constructor() {
        super('api/favorites');
        this.router
            .use(Auth0Provider.getAuthorizedUserInfo)
            .post('', this.createFavorite);
    }
    async createFavorite(req, res, next) {
        try {
            const favBody = req.body;
            favBody.accountId = req.userInfo.id;
            const fav = await favoritesService.createFavorite(favBody);
            res.send(fav);
        } catch (error) {
            next(error);
        }
    }
}
