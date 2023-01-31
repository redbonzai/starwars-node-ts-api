import {Router} from 'express';
import {starshipsByLuke} from "../middleware/v1/jedi-middleware/starshipsByLuke";
import {jsonParser} from "../middleware/v1/general/bodyParser";
import {speciesClassificationByFilm} from "../middleware/v1/jedi-middleware/speciesClassificationByFilm";
import {planetsPopulation} from "../middleware/v1/jedi-middleware/planetsPopulation";
import {APIError} from "../error-handling/messages";


export let jediRouter = Router();

jediRouter.route('/character/:id/starships')
    .get(starshipsByLuke)
    .post(jsonParser);

jediRouter.route('/film/:id/species')
    .get(speciesClassificationByFilm)

jediRouter.route('/galaxy/planets')
    .get(planetsPopulation)

