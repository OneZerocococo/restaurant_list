const express = require('express')
const exphbs = require('express-handlebars')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const restaurantList = require('./restaurant.json')
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


// setting body-parser
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => {
  res.render('index', { restaurants: restaurantList.results })
})
app.post('/', (req, res) => {
  console.log('req.body', req.body)
  res.render('index')
})

app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const restaurants = restaurantList.results.filter(restaurant => {
    return restaurant.name.toLowerCase().includes(keyword.toLowerCase()) ||
      restaurant.category.toLowerCase().includes(keyword.toLowerCase())
  })
  const notFound = !restaurants.length
  res.render('index', { restaurants, keyword, notFound })
})

app.get('/restaurants/:restaurant_id', (req, res) => {
  const restaurant = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)
  res.render('show', { restaurant })
})

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})