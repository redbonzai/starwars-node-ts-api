import {RequestHandler} from "express";
import {JediService} from "../../../services/jedi.service";
import {Film, Species} from "../../../interfaces";
import {APIError} from "../../../error-handling/messages";

export const speciesClassificationByFilm: RequestHandler = async (req, res, next) => {
    let species: any = [];
    const jedi = new JediService()
    const filmId: number = parseInt(req.params.id, 10)

    await jedi.starwarsEpisodeByNumber(filmId).then((film: Film) => {
        species = jedi.classifyFilmSpecies(film.species).then((species: Species[]) => {
            film.species = species;
            return res.status(200).json({data: {film}})
        }).catch(error => {
            console.error(error.stack)
            next(new APIError('Not Found', 'Error retrieving film species classifications', 404))
        })

    }).catch(error => {
        console.error(error.stack)
        next(new APIError('Not Found', 'Error retrieving data for the queried film', 404))
    })
}
