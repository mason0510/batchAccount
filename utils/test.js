let random=require("./randomAccount");

for (let i = 0; i <1000 ; i++) {
    random().then(result=>{
        console.log(result)
    })
}

