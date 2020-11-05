const db = require('../firebase');

module.exports = {
    login: (req, res) => {
        res.render('login');
        return;
    },
    postLogin: async (req, res) => {
        var email = req.body.email;
        var password = req.body.pass;

        var userRef = db.collection('user');
        const snapshot = await userRef.where('email', '==', email).get();
        if(snapshot.empty){
            res.render('login', {error: 'User is not exits!'});
            return;
        }

        snapshot.forEach(doc => {
            if(doc.data()['password'] != password){
                res.render('login', {error: 'Password is wrong!'});
                return;
            }else{
                res.cookie('user', doc.data().email, {signed: true});
                res.redirect('/index');
            }
        });
    }
}