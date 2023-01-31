require('dotenv').config();

export default {
    "development": {
        "username": process.env.DB_USER,
        "password": process.env.DB_PASS,
        "database": process.env.DB_DATABASE,
        "host": "127.0.0.1",
        "dialect": "postgres"
    },
    "test": {
        "username": process.env.DB_TEST_USER,
        "password": process.env.DB_TEST_PASS,
        "database": process.env.DB_TEST_DATABASE,
        "host": "127.0.0.1",
        "dialect": "postgres"
    },
    "production": {
        "username": "root",
        "password": null,
        "database": "database_production",
        "host": "127.0.0.1",
        "dialect": "mysql"
    }
}
