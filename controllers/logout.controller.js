module.exports.logout = (req, res) =>{
    res.clearCookie('user');
    res.redirect('/auth/login');
    return;
}