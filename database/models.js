const db = require('./index.js');


db
    .query(
        'CREATE TABLE IF NOT EXISTS subs(\
        id serial PRIMARY KEY,\
        name VARCHAR (25) UNIQUE,\
        endpoint VARCHAR (25) UNIQUE)')
    .then(res => {
        console.log('SUBS TABLE CREATED')
        db.end();
    })
    .catch(err => console.log('There was an error: ' + err));