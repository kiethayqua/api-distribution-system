const db = require('../firebase');
const _ = require('lodash');

module.exports = {
    index: async (req, res)=>{
        let people = await db.collection('people').get().then((querySnapshot) => {
            let data = [];
            querySnapshot.forEach((doc) => {
                data.push(doc.data());
            });
            return data;
        });

        // sắp xếp thời gian mới nhất
        people = _.sortBy(people, ['date']).reverse();
        res.render('index', {people: people});
    },
}