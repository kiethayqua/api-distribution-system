'use strict'
let db = require('../../firebase');


module.exports = {
    get: async (req, res) => {
        let people = await db.collection('people').get().then((querySnapshot) => {
            let data = [];
            querySnapshot.forEach((doc) => {
                data.push(doc.data());
            });
            return data;
        });
        res.json(people);
    },
    store: async (req, res) => {
        let data = req.body;
        let result = await db.collection('people').add({
            image: data['name'],
            status: data['status'],
            date: data['date'],
        });
        res.json(result.id);
    }
}