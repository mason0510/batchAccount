let ecc=require("eosjs-ecc")
const randomAccount=require("../utils/randomAccount");
const res=require("../db")
const EosAccount=require("../model/eosAccount");
var randomstring = require("randomstring");
//随机生成key
//生成1000个私和私钥
//eosaccount
const eosaccount=async ()=> {
    //生成一千个保存数据库 一个一个激活
    for (let i = 0; i < 1000; i++) {

        let randomaccont1 = await randomstring.generate({
            length: 12,
            charset: 'alphabetic',
            readable: true,
            capitalization: "lowercase"
        });

        let privateKey = await ecc.randomKey();
        let newaccount_pubkey = await ecc.privateToPublic(privateKey);

            let newAccount = new EosAccount({
                accountname: randomaccont1,
                privatekey: privateKey,
                publickey: newaccount_pubkey,
                isActived:false
            });
            await EosAccount.create(newAccount).then(result=>{
                 console.log(result);
             }).catch(error_msg=>{console.log(error_msg);});
            console.log(newAccount);
        }
    
    
}

eosaccount().catch(error_msg=>console.log(error_msg))