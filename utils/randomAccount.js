
// const stringRandom = require('string-random');

// (async () => {
//     for( let i = 0;i<10;i++){
//         console.log(stringRandom(6,{letters:false,numbers:true,specials:false,capitalization:})+"ccount") ;
//     }
// })();

var randomstring = require("randomstring");

randomstring.generate();
// >> "XwPp9xazJ0ku5CZnlmgAx2Dld8SHkAeT"

randomstring.generate(7);
// >> "xqm5wXX"

let random=async ()=>{
    let  test12=await randomstring.generate({
        length: 12,
        charset: 'alphabetic',
        readable:true,
        capitalization:"lowercase"

    });
    return test12;
}

// console.log(test12)

// >> "AqoTIzKurxJi"

// randomstring.generate({
//     charset: 'abc'
// });
// >> "accbaabbbbcccbccccaacacbbcbbcbbc"
// random().then(result=>{console.log(result)})

module.exports=random;