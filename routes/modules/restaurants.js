const express = require('express')
const router = express.Router()
const Restaurantlist = require('../../models/restaurant')

// 編輯餐廳頁面 
router.get('/:restaurant_id/edit', (req, res) => {
  const userId = req.user._id
  const _id = req.params.restaurant_id
  return Restaurantlist.findOne({ _id, userId })
    .lean()
    .then((restaurant) => res.render('edit', { restaurant }))
    .catch(err => console.log(err))
})

// 更新已編輯餐廳內容
router.post('/:restaurant_id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.restaurant_id
  return Restaurantlist.findOneAndUpdate({ _id, userId }, req.body)
    .then((restaurant) => res.redirect(`/restaurants/${_id}`))
    .catch(err => console.log(err))
})

// 新增餐廳頁面
router.get('/new', (req, res) => {
  res.render('new')
})

// 新增餐廳
router.post('/', (req, res) => {
  const userId = req.user._id
  req.body.userId = userId
  Restaurantlist.create(req.body)
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

// 瀏覽特定餐廳
router.get('/:restaurant_id', (req, res) => {
  const _id = req.params.restaurant_id
  const userId = req.user._id
  return Restaurantlist.findOne({ _id, userId })
    .lean()
    .then((restaurant) => res.render('show', { restaurant }))
    .catch(err => console.log(err))
})
// 刪除餐廳
router.post('/:restaurant_id/delete', (req, res) => {
  const userId = req.user._id
  const _id = req.params.restaurant_id
  return Restaurantlist.findOne({ _id, userId })
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(err => console.log(err))
})

module.exports = router