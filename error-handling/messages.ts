
export class APIError extends Error {
    constructor(
        name: string,
        message: string,
        public status: number,
        public properties?: any,
        public internalProperties?: any
    ) {
        super();
        this.name = name;
        this.message = message;
    }

    /**
     * Convert APIError object to a PublicError object.
     */
    publicError() {
        return new PublicError(this)
    }

    static notFoundException(properties?: any, internalProperties?: any) {
        return new APIError('NotFoundException', 'Specified resource could not be found', 404, properties, internalProperties);
    }

    static invalidQueryParameter(properties?: any, internalProperties?: any) {
        return new APIError('InvalidQueryParameter', 'Invalid query parameter', 400, properties, internalProperties);
    }

    static missingBodyException(properties?: any, internalProperties?: any) {
        return new APIError('MissingBodyException', 'Missing data in request', 400, properties, internalProperties);
    }

    static serverError(properties?: any, internalProperties?: any) {
        return new APIError('ServerError', 'Internal request failed', 500, properties, internalProperties);
    }
}

export class PublicError {
    name: string
    message: string
    status: number
    properties?: any

    constructor(err: APIError) {
        this.name = err.name;
        this.message = err.message;
        this.status = err.status;
        this.properties = err.properties;
    }
}

export class PublicInfo {
    constructor(
        public message: string,
        public status: number,
        public properties?: any
    ) {}

    static infoDeleted(properties?: any) {
        return new PublicInfo('Resource deleted', 200, properties);
    }

    static infoCreated(properties?: any) {
        return new PublicInfo('Resource created', 201, properties);
    }

    static infoUpdated(properties?: any) {
        return new PublicInfo('Resource updated', 200, properties);
    }
}
