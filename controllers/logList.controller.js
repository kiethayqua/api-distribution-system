const db = require('../api/firebase');

module.exports = {
    logList: async (req, res)=>{
        let people = await db.collection('people').get().then((querySnapshot) => {
            let data = [];
            querySnapshot.forEach((doc) => {
                data.push(doc.data());
            });
            return data;
        });
        res.render('logList', {people: people});
        
    }
}