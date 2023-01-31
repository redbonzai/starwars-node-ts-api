import {RequestHandler} from "express";
import {JediService} from "../../../services/jedi.service";
import {APIError} from "../../../error-handling/messages";

export const planetsPopulation: RequestHandler = async (req, res, next) => {
    const jedi = new JediService()

    await jedi.galaxyPlanetPopulation().then((planets: any) => {
        return res.status(200).json({data: planets})
    }).catch(error => {
        console.error(error.stack)
        next(new APIError('Not Found', 'Error retrieving planet population data', 404))
    })
}
