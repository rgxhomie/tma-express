const slugid = require('slugid');
const bcrypt = require('bcryptjs');

const _students = [
    {
        "id": "a8_YezW8T7e1jLxG7evy-A",
        "firstName": "John",
        "lastName": "Doe",
        "email": "johndoe@example.com",
        "password": "mysecretpasswordsalt",
        "age": 30,
        "address": {
          "street": "123 Main St",
          "city": "Anytown",
          "state": "CA",
          "zip": "12345",
          "country": "USA"
        },
        "createdAt": "2023-05-06T08:12:34.567Z",
        "tags": [
          "Sales",
          "Marketing"
        ]
    }
];

function getAll () {
    return _students;
}

function getByEmail (email) {
    return _students.find(s => s.email === email);
}

async function create (student) {
    const id = slugid.nice();
    const createdAt = new Date().toISOString();
    const salt = await bcrypt.genSalt(5);
    const password = await bcrypt.hash(student.password, salt);

    _students.push({
        ...student,
        id,
        createdAt,
        password
    });
}

function upd (name, data) {
    const student = _students.find(s => s.name === name)

    Object.keys(data).forEach(k => {
        student[k] = data[k];
    })
}

function del (email) {
    _students.filter(s => s.email !== email);
}

module.exports = {
    getAll,
    getByEmail,
    create,
    upd,
    del
}