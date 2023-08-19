require('dotenv').config();

/* const config = {
    port: 5000//No es necesario hacerlo asi
} */

const PORT = process.env.PORT
const DB_PASSWORD = process.env.DB_PASSWORD

/* module.exports = {
    port: PORT,
    dbPassword: DB_PASSWORD
} */ //Una manera de exportar varias a la vez


const config = {
    port: process.env.PORT,
    dbPassword: process.env.DB_PASSWORD
}

module.exports = config