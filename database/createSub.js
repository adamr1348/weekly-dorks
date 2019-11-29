const db        = require('./index.js');
const resCodes  = require('../responseCodes.json');
const formatter = require('../server/responseFormatter.js');


function createSub (subName, res, isSeedCall) {
    let endpointName = subName.split(' ').join('_').toLowerCase();
    let queryString  = `
        INSERT INTO subs (name, endpoint)
        VALUES ('${subName.toLowerCase()}', '${endpointName}');
        CREATE TABLE IF NOT EXISTS ${endpointName} (
        id serial PRIMARY KEY,
        title VARCHAR(140),
        upvotes INTEGER,
        downvotes INTEGER,
        linkURL VARCHAR(100),
        text VARCHAR(15000));
    `

    db
        .query(queryString)
        .then(data => {
            console.log('success');
            if (res) {
                res.send(formatter(1));
            }
        })
        .catch(err => {
            console.log(err)
            if (res) {
                if (err.constraint === 'subs_name_key') {
                    res.send(formatter(-1));
                } else {
                    res.send(formatter(-2));
                }
            }
            if (isSeedCall) {
                console.log(queryString);
            }
        })
}

// createSub('test1', null, true);

module.exports = createSub;