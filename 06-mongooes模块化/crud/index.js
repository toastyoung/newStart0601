(async function() {
    // 需要等数据库连接成功 再执行后面代码
    const db = require('../db')
    await db
    // 引入model
    // 文件名叫index 可省略
    const modelObj = require('../model')

    modelObj.create({
        username: 'sun',
        age: 66,
        gender: '女'
    })
})()