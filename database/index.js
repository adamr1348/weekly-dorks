const { Pool, Client } = require('pg');
const connectionString = `postgresql://localhost:5432/rebuild`;

const client = new Client(connectionString);
client.connect().then(() => console.log('Connected to database'));

module.exports = client;