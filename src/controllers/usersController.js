const Users = require('../models/users')
const jwt = require('jsonwebtoken')
require('dotenv/config')

const createUser = async (req, res) => {
    const {name, email, password} = req.body

    const [user, created] = await Users.findOrCreate({where: { email }, defaults: { name, email, password } })

    if(created){
        delete req.body['password']
        return res.status(201).json({data: req.body})
    }

    res.status(400).json({data: 'email already exist!'})

}

const login = async (req, res) => {
    const {email, password} = req.body

    const user = await Users.findOne({where: { email }})

    if(user === null){
        return res.status(401).json({msg: 'Login invalid'})
    }

    if(email === user.email && password === user.password){
        const id = user.id
        const token = jwt.sign({ id }, process.env.SECRET, {
            // expiresIn: 600
        });
        return res.json({token})
    } 

    return res.status(401).json({msg: 'Login invalid'})

}


module.exports = {
    createUser,
    login,
};