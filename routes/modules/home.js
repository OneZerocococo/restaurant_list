const express = require('express')
const router = express.Router()
const Restaurantlist = require('../../models/restaurant')

router.get('/', (req, res) => {
  Restaurantlist.find()
    .lean()
    .then((restaurant) => res.render('index', { restaurant }))
    .catch((error) => console.log(error))
})
router.post('/', (req, res) => {
  console.log('req.body', req.body)
  res.render('index')
})

// 搜尋特定餐廳
router.get('/search', (req, res) => {
  const keyword = req.query.keyword.trim()
  if (!keyword) {
    return res.redirect('/')
  }

  Restaurantlist.find()
    .lean()
    .then((restaurant) => {
      const searchedRestaurant = restaurant.filter(
        (data) =>
          data.name.toLowerCase().includes(keyword) ||
          data.category.includes(keyword)
      )
      res.render('index', { restaurant: searchedRestaurant, keyword: keyword })
    })

})

module.exports = router