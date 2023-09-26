// import { Axios } from "axios";

// export const axios = Axios.create({
//     baseURL: "https://api.apilayer.com/fixer"
// })
// var re = /\w+\s/g;
// var str = 'fee fi fo fum';
// const [ one, two, three ] = str.match(re)
// console.log(one)
// console.log(two)
// console.log(three)

const rando = "monkey";
const obj = {
  [rando]: 23,
};

const { [rando]: myKey } = obj;

console.log(myKey);

const listicle = {
    "rates": {
        "AED":3.672962,
        "AFN":79.269848,
        "ALL":99.989607,
        "AMD":387.949565
    },
    "date": "2023",
    "timestamp": 1241
}   
console.log(typeof (listicle))