const db = require('./index.js');
const resCodes = require('../responseCodes.json');


function createSub (subName, res) {
    let endpointName = subName.split(' ').join('_').toLowerCase();
    db
        .query(`
            INSERT INTO subs (name, endpoint)
            VALUES ('${subName.toLowerCase()}', '${endpointName}');
            CREATE TABLE IF NOT EXISTS ${endpointName} (
            id serial PRIMARY KEY,
            title VARCHAR(140),
            upvotes INTEGER,
            downvotes INTEGER,
            linkURL VARCHAR(100),
            text VARCHAR(15000));
        `)
        .then(data => {
            db.end();
            if (res) {
                res.send(resCodes["1"])
            }
        })
        .catch(err => {
            db.end();
            if (res) {
                if (err.constraint === 'subs_name_key') {
                    resCodes["-1"];
                } else {
                    resCodes["-2"];
                }
            }
        })
}

createSub('Works once');

module.exports = createSub;