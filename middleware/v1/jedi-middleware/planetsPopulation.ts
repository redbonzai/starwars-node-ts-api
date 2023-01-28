import {RequestHandler} from "express";
import {JediService} from "../../../services/jedi.service";

export const planetsPopulation: RequestHandler = async (req, res, next) => {
    const jedi = new JediService()

    await jedi.galaxyPlanetPopulation().then((planets: any) => {
        return res.status(200).json({data: planets})
    })
}
