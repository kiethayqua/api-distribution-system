const db = require('../firebase');
module.exports.checkLogin = async (req, res, next)=>{

    if(!req.signedCookies.user){
        res.redirect('/auth/login');
        return;
    }

    const userRef = db.collection('user');
    const snapshot = await userRef.where('email', '==', req.signedCookies.user).get();
    if(snapshot.empty){
        res.redirect('/auth/login');
        return;
    }

    next();
}