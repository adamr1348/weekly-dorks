const resCodes = require('../responseCodes.json');

function formatter (code) {
    return JSON.stringify({
        response: resCodes[code],
        code
    })
}

module.exports = formatter;