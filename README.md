# TYPESCRIPT STAR WARS API IMPLEMENTATION


## INSTALLATION:
 ```terminal
    npm install
 ```

## CREATE ENV FILE:
```terminal
    cp .env.example .env
```

## CREATE THE FOLLOWING DIRECTORIES:
```terminal
    mkdir unitTestReports
    mkdir .nyc_output
```
> create the following empty file inside the unitTestReports directory:
```terminal
    touch unitTestReports/junitresults.xml
``` 

## START THE API:
 ```terminal
    npm start
 ```

## POSTMAN COLLECTION:
the link is here: [star wars implementation Postman Collection](https://api.postman.com/collections/2382474-52a0d4bd-0ac3-429b-9f10-d780a5996ca7?access_key=PMAT-01GQX9HCGJY3N9VHAXRC45SHZ3)

## NOTES: 
> I fulfilled the obligation of the test.  However, there are some things that I would have loved to do if time were more plentiful.

> If I would have had more time I would have implemented a database to store the data when it is queried so as
> to build my own PostgreSQL Star Wars API, and add to it.  I didn't do that, but I created the following to show the intent: 
### Created a database implementation on the api
>The database connection is intended to be used with a ETL process that is not yet built. 
> Also, there is an ORM ( TypeOrm ) that will be part of this process. 
> The intention here: ONce the data model is built, then as an automated ETL process, check that a row doesn't exist, and persist.

```typescript
    import { Pool } from 'pg';

    const pool = new Pool({
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD,
        port: parseInt(process.env.DB_PORT),
    });

    export default pool;
```
### There is a docker-compose.yml configuration for a postgreSQL database.
### There is also A Dockerfile. 
> Both of these work, but they are not fully implemented due to time. . 

### Created an sql.init file that is being run if docker is spooled up. 
 ```terminal 
docker compose up -d
```

Currently, one can either run the application on the api container, or can run it locally with npm start. 
The process is virtually the same.  In either case `NPM START` is executed, either on the local command line, or in a docker container.

>Thus, if I would have had more time, this would have been a dynamic data-driven api.
>### I created some middleware files that handle the following scenarios: 
- CORS
- Error Handling
- Logging
- apiValidation
- Request Validation
All of these work, but not all of them are implemented.
