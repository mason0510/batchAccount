
//define table and 绑定数据
const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    accountname: {
        type: String,
        required: [true, "用户名不能缺少"]
    },
    privatekey: {
        type: String,
        required: [true, "私钥不能缺少"]
    },
    publickey: {
        type: String,
        required: [true, "公钥不能缺少"]
    },
    isActived:Boolean,
    created:{
        type: Date,
        default: Date.now()
    }
});


module.exports = mongoose.model('eosusers', schema);