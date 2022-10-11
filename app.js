const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const methodOverride = require('method-override')

const routes = require('./routes')
const app = express()
const port = 3000
const Restaurantlist = require('./models/restaurant')
mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(routes)







app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})