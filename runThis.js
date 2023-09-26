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

const rando = 'monkey'
const obj = {
    [rando]: 23
}

const { [rando]: myKey } = obj;

console.log(myKey)