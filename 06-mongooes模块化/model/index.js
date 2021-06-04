const mongoose = require('mongoose')

const Schema = mongoose.Schema

// 创建Schema对象
const schemaObj = new Schema({
        username: {
            type: String,
            required: true
        },

        age: {
            type: Number,
            required: true
        },

        gender: {
            type: String,
            required: true
        },

        info: {
            type: Schema.Types.Mixed,
            default: '暂无'
        },

        register_date: {
            type: Date,
            default: Date.now()
        }
    },
    // 如果写上new Schema的第二个参数 可以指定集合名叫什么 不会自动加s
    { collection: 'user' }
)

// 创建model对象
// 如果集合名没有s会自动加s
const modelObj = mongoose.model('stus', schemaObj)
module.exports = modelObj