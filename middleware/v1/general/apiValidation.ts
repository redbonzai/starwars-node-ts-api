import {RequestHandler} from "express";
import {APIError} from "../../../error-handling/messages";

export const apiValidation: RequestHandler = (req, res, next) => {
    if (req.header('Accept') !== 'application/json' || req.header('Content-Type') !== 'application/json') {
        next(new APIError('Unacceptable content', 'Only json is supported',400));
    } else {
        next()
    }
}
