const db = require('../firebase');

module.exports = {
    index: async (req, res)=>{
        let people = await db.collection('people').get().then((querySnapshot) => {
            let data = [];
            querySnapshot.forEach((doc) => {
                data.push(doc.data());
            });
            return data;
        });
        res.render('index', {people: people});
    },
}