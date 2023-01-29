import {RequestHandler} from "express";
import {Character, Starship} from "../../../interfaces";
import {JediService} from "../../../services/jedi.service";
import {APIError} from "../../../models/messages";

export const starshipsByLuke: RequestHandler = async (req, res, next) => {
    let starships: any = [];
    const jedi = new JediService()
    const characterId: number = parseInt(req.params.id, 10)

    await jedi.characterById(characterId).then((luke: Character) => {
        starships = jedi.getStarships(luke.starships).then((starships: Starship[]) => {
            luke.starships = starships;
            res.status(200).json({
                data: {
                    luke
                }
            });
        }).catch(error => {
            console.error(error.stack)
            next(new APIError('Not Found', 'Error retrieving data for Luke\'s starships', 404))
        })

    }).catch(error => {
        console.error(error.stack)
        next(new APIError('Not Found', 'Error retrieving data for Luke', 404))
    });
};
