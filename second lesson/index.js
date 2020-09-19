require('dotenv').config()
const {Client} = require('pg')
const client = new Client(
    {
        user: process.env.DB_USER,
        host: process.env.DB_HOST,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASSWORD,
        port: process.env.DB_PORT
    }
)

const name = 'Это'
let qu = 'SELECT * from shop where name = $1'

client.connect()


/*--------------
(client
    .query (qu, [name])
    .then (result => console.log(result))
    .catch(e => console.log(e.stack))
    .then (() => client.end())
*/

/*---------------
client.query(qu, [name], function(err, res) //=>
{
    console.log(err, res)
    client.end()
})
*/

//console.log(1)
