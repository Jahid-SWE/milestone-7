// array distructuring
const friendOfFriends = ['hero alom', 'jahan','kancon']

const [element1,element2, element3]= friendOfFriends
// console.log(element3)


// object distructuring
const person= {
    nema: 'kamal',
    age: 28,
    friends: ['bd','test'],
    country:'bangladesh'
}


const {name, age,country, friends}=person
console.log(friends)