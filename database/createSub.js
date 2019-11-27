const db = require('./index.js');


function createSub (subName) {
    let endpointName = subName.split(' ').join('-').toLowerCase();
    db
        .query(`
            INSERT INTO subs (name, endpoint)
            VALUES ('${subName}', '${endpointName}');
            CREATE TABLE ${subName} (
            id serial PRIMARY KEY
            title VARCHAR(140)
            upvotes INTEGER
            downvotes INTEGER
            linkURL VARCHAR(100)
            text VARCHAR(15000));
        `)
        .then(data => {
            console.log(data)
            db.end();
        })
        .catch(err => {
            //TODO respond with error according to constraint violation
            //note: check err.constaint to be 'subs_name_key' or 'subs_endpointname_key'
            console.log(err.constraint);
            db.end();
        })
}

createSub('doesnt works');

module.exports = createSub;