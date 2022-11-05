# 餐廳清單


## 介紹

使用者的餐廳清單，可以瀏覽餐廳清單，包含餐廳評分、查看詳細資訊，詳細資訊包含餐廳簡介和圖片、可連結到地圖。

### 功能

- 使用者可註冊網站、也可使用Facebook登入
- 使用者登入後才可使用網站功能，如下:
- 查看所有餐廳、包含餐廳名稱、圖片、類型、評分數
- 瀏覽餐廳的詳細資訊
- 可點擊連結餐廳的地址到 Google 地圖
- 可搜尋特定餐廳名稱或類型
- 可新增、修改、移除餐廳資訊

## 專案畫面

#### 登入

![首頁](https://github.com/OneZerocococo/restaurant_list/blob/main/public/image/login.PNG)

#### 首頁

![首頁](https://github.com/OneZerocococo/restaurant_list/blob/main/public/image/index.JPG)

#### 搜尋

![搜尋](https://github.com/OneZerocococo/restaurant_list/blob/main/public/image/search.JPG)

#### 詳細資料

![詳細資料](https://github.com/OneZerocococo/restaurant_list/blob/main/public/image/show.JPG)

#### 搜尋不到

![搜尋不到](https://github.com/OneZerocococo/restaurant_list/blob/main/public/image/notfound.JPG)

## 開始使用

1. 請先確認有安裝 node.js 與 npm
2. 將專案 clone 到本地
3. 在本地開啟之後，透過終端機進入資料夾，輸入：

   ```bash
   npm install
   ```
4. 環境變數設置：

   ```bash
   FACEBOOK_ID=SKIP
   FACEBOOK_SECRET=SKIP
   FACEBOOK_CALLBACK=http://localhost:3000/auth/facebook/callback
   SESSION_SECRET=ThisIsMySecret
   mongoose.connect(process.env.MONGODB_URI)
   ```
5. 寫入種子資料：

 ```bash
   npm run seed
   ```

6. 執行專案：

   ```bash
   nodemon app.js
   ```

7. 若看見此行訊息則代表順利運行，打開瀏覽器進入到以下網址

   ```bash
   Express is listening on localhost:3000
   ```

8. 可使用下列兩個種子帳號進行測試
   
   ```bash
   email: user1@example.com
   password: 12345678

   ------------------------------

   User2
   email: user2@example.com
   password: 12345678
   ```

9. 若欲暫停使用

   ```bash
   ctrl + c
   ```

## 開發工具

- Node.js 16.17.0
- Express 4.16.4
- Express-Handlebars 3.0.0
- Bootstrap 4.3.1
- Font-awesome 5.8.1
- mongoose 6.6.5
- bcryptjs: 2.4.3
- connect-flash: 0.1.1
- dotenv: 16.0.3
- express-session: 1.17.3
- method-override: 3.0.0

## 開發者
- [OneZero](https://github.com/OneZerocococo)
