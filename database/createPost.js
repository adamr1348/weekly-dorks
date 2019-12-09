const db = require('./index.js');

const createPost = (title, type, content) => {
    let endpoint = title.split(' ').join('_').toLowerCase();
    if (type === 'text') {

    } else {

    }
}