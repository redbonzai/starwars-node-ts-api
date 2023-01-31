import { RequestHandler, ErrorRequestHandler } from 'express';

export const errorHandler: ErrorRequestHandler = (err,req, res, next) => {
    switch(req.app.get('env')) {
        case 'development':
            console.log('error: ', err);
            return res.status(err.status).json(err);
        case 'production':
            // only logging in production
            return res.status(err.status).json(err.publicError())
    }
}
