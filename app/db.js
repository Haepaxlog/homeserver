const pgp = require('pg-promise')()
const connection = "postgresql://conni1410:Fcmnichi5000@localhost:5432/homeserver"
const db =  pgp(connection)

module.exports = db
