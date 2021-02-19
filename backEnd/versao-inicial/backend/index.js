const app = require('express')()
const consign = require('consign')
const db = require('./config/db')


app.db = db

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')

app.listen(3000, () => {
    console.log('Backend executando...')
})