const bcrypt = require('bcryptjs')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const Restaurant = require('../restaurant') // 載入 Restaurant model
const User = require('../user')
const restaurantList = require('../seeds/restaurants.json').results
const usersList = require('../seeds/users.json').users
const db = require('../../config/mongoose')

db.once('open', () => {
  console.log('Start writing seeds.....')
  Promise.all(
    usersList.map(user => {
      const { name, email, password, restaurantIndex } = user
      return User.create({
        name,
        email,
        password: bcrypt.hashSync(password, bcrypt.genSaltSync(10))
      })
        .then(user => {
          const restaurants = restaurantIndex.map(index => {
            const restaurant = restaurantList[index]
            restaurant.userId = user._id
            return restaurant
          })
          return Restaurant.create(restaurants)
        })
    })
  )
    .then(() => {
      console.log('seeder done')
      process.exit()
    })
    .catch(err => console.log(err))
})