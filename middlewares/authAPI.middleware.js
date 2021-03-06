module.exports.checkAuthHeader = (req, res, next) => {
    const auth = { login: 'admin', password: 'admin' } // change this

    // parse login and password from headers
    const b64auth = (req.headers.authorization || '').split(' ')[1] || ''
    const [login, password] = Buffer.from(b64auth, 'base64').toString().split(':')

    console.log(b64auth);

    // Verify login and password are set and correct
    if (login && password && login === auth.login && password === auth.password) {
        // Access granted...
        return next()
    }

    // Access denied...

    res.status(401).send('Authentication required.') // custom message
}

