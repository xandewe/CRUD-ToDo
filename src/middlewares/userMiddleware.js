const jwt = require('jsonwebtoken')
require('dotenv/config')

const validateKeys = (req, res, next) => {
    const {name, email, password} = req.body;
    
    const errors = {};

    if(!name) {
        errors.name = 'Missing failed name'
    }

    if(!email) {
        errors.email = 'Missing failed email'
    }

    if(!password) {
        errors.password = 'Missing failed password'
    }

    if(Object.keys(errors).length !== 0) {
        return res.status(400).json(errors);
    }

    next();
}

const validateKeysLogin = (req, res, next) => {
    const {email, password} = req.body;

    const errors = {};

    if(!email) {
        errors.email = 'Missing failed email'
    }

    if(!password) {
        errors.password = 'Missing failed password'
    }

    if(Object.keys(errors).length !== 0) {
        return res.status(400).json(errors);
    }

    next();

}

const verifyUserJWT = (req, res, next) => {
    const token = req.headers['authorization'];
    if(!token){    
        return res.status(401).json({msg: 'No Token provided'});
    };

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if(err) return res.status(401).json({msg: 'Failed to authenticate token!'});

        const id = decoded.id
        req.user = {
            id
        }
        next();
    });
}

module.exports = {
    validateKeys,
    validateKeysLogin,
    verifyUserJWT,
};