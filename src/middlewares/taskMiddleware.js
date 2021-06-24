const validateKeys = (req, res, next) => {
    const {title, description, priority, status} = req.body;
    
    const errors = {};

    if(!title) {
        errors.title = 'Missing failed name'
    }

    if(!description) {
        errors.description = 'Missing failed email'
    }

    if(!priority) {
        errors.priority = 'Missing failed password'
    }

    if(!status) {
        errors.status = 'Missing failed password'
    }

    if(Object.keys(errors).length !== 0) {
        return res.status(400).json(errors);
    }

    next();
}

module.exports = {
    validateKeys,
}