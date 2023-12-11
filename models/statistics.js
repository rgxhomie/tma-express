const slugid = require('slugid');

const _statisctics = [
    {
        "name": "Aimee Zank",
         "scores": [
           {
             "score": 1.463179736705023,
             "type": "exam"
           },
           {
             "score": 11.78273309957772,
             "type": "quiz"
           },
           {
             "score": 35.8740349954354,
             "type": "homework"
           }
         ]
    }
];

function getAll () {
    return _statisctics;
}

function getByName (name) {
    return _statisctics.find(s => s.name === name);
}

async function create (data) {
    _statisctics.push(data);
}

function upd (name, data) {
    const stats = _statisctics.find(s => s.name === name)

    Object.keys(data).forEach(k => {
        stats[k] = data[k];
    })
}

function del (name) {
    _statisctics = _statisctics.filter(s => s.name !== name);
}

function worst (name) {
    return _statisctics.sort((a, b) => {
        const aScore = a.scores.find(s => s.type === 'homework').score;
        const bScore = b.scores.find(s => s.type === 'homework').score;

        return aScore - bScore;
    })[0];
}

module.exports = {
    getAll,
    getByName,
    create,
    upd,
    del,
    worst
}