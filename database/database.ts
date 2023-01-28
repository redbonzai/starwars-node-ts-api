import {Pool} from "pg";
const port:number = parseInt(process.env.DB_PORT || '5432');

export const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS,
    port: port
})

// pool.connect().then(client => {
//     client.query('SELECT * FROM addresses', (err, res) => {
//         console.log(err, res)
//         client.release()
//     })
// })
