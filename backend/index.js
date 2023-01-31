const express = require('express')
const app = express()
const dotenv = require("dotenv")
const cors = require('cors')
const mongoose = require('mongoose')
const { urlencoded } = require('express')
app.use(express.json())
app.use(urlencoded())
app.use(cors())

dotenv.config({ path: './.env' });

mongoose.connect('mongodb://localhost:27017/LoginSignupDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("===== Connected to MongoDB =====")
})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model('user', userSchema)

app.post('/login', (req, res) => {
    const { email, password } = req.body

    User.findOne({ email: email }, (err, user) => {
        if (user) {
            if (password === user.password) res.send({ message: 'Login Successfull!', user: user })
            else res.send({ message: 'Invalid Credentials' })
        } else {
            res.send({ message: 'Email not registered yet!' })
        }
    })
})

app.post('/signup', (req, res) => {
    const { name, email, password } = req.body

    User.findOne({ email: email }, (err, user) => {
        if (user) {
            res.send('Email already exist!')
        } else {
            const user = new User({
                name, email, password
            })
            user.save(err => {
                if (err) {
                    res.send('err')
                } else {
                    res.send('Successfully Registered!')
                }
            })
        }
    })
})

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})