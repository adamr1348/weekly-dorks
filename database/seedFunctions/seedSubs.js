const createSub = require('../createSub.js');
const faker     = require('faker');

const subEntry = () => {
    let subName = faker.random.word();
    if (!subName.includes('-')) {
        createSub(subName, null, true);
    } else {
        subEntry();
    }
}

const makeNSubs = (n) => {
    for (var x = 0; x < n; x++) {
        subEntry();
    }
}

makeNSubs(20);