const slugid = require('slugid');

const _articles = [
    {
        name:  'Express - introduction',
        description: 'Express - text',
        type: 'a',
        tags: []
    }
];

function getAll () {
    return _articles;
}

function getByName (name) {
    return _articles.find(s => s.name === name);
}

async function create (data) {
    _articles.push(data);
}

function upd (name, data) {
    const stats = _articles.find(s => s.name === name)

    Object.keys(data).forEach(k => {
        stats[k] = data[k];
    })
}

function del (name) {
    _articles = _articles.filter(s => s.name !== name);
}

module.exports = {
    getAll,
    getByName,
    create,
    upd,
    del
}