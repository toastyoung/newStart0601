  // 1.引入mongoose
  const mongoose = require('mongoose')

  // 2.连接mongoose数据库软件
  module.exports = mongoose.connect('mongodb://127.0.0.1:27017/day0603mgs', {
      useNewUrlParser: true,
      useUnifiedTopology: true
  })