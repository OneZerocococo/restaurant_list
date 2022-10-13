const express = require('express')
const router = express.Router()
const Restaurantlist = require('../../models/restaurant')
const sortSelect = require('../../utilities/sortSelect')

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
  let keyword = req.query.keyword.trim()
  const regKeyword = new RegExp(keyword, 'gi')
  const sortSelector = req.query.sortSelector
  const [sortby, sortBool] = sortSelect(sortSelector)

  let notFound = false

  return Restaurantlist.find({
    $or: [{ name: regKeyword }, { category: regKeyword }],
  })
    .sort(sortby)
    .lean()
    .then((restaurant) => {
      if (!restaurant || !restaurant.length) {
        notFound = true
      }
      res.render('index', { restaurant, notFound, keyword, sortBool })
    })
    .catch(error => {
      console.log(error)
    })
})


module.exports = router