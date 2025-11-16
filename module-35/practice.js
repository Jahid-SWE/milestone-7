//Given an array of numbers, return a new array where each number is doubled
const numbers = [20, 30, 50, 2, 8, 5]
const doubleNumber = numbers.map(number => number * 2)
// console.log(doubleNumber)

//Convert an array of lowercase strings into uppercase strings.
const friends = ['jahid', 'hassan', 'polash', 'babu']
const uppercaseString = friends.map(friend => friend.toUpperCase())
// console.log(uppercaseString)

//From an array of names, return a new array containing the length of each name
const names = ['kamal', 'hasnat', 'kalachan', 'fokirchanmia']
const nameLength = names.map(name => name.length)
// console.log(nameLength);


//Add 5 to every number in the array.

const nums = [1, 7, 8, 6, 9]
const addNums = nums.map(number => number + 5)
// console.log(addNums);


const friensnames = ['jahid', 'hassan', 'polash', 'masud', 'Abdul Hakim']
const friendname = friensnames.map(name => { console.log(`Hello ${name}`)})


//Given an array of numbers, return a new array where negative numbers become 0 and others stay the same.
const numbs=[-5,5,8,7,-3]
const newArray= [];
const result= numbs.map(num=>num<0? 0 :num)
// console.log(result)

// convert an array of names into objects like: {name: "Jahid", length: 5} 
const nams=['jahid','hassan']
const res=nams.map(nam=>{
    return{
        name:nam,
        length: nam.length
    }
})
console.log(res)