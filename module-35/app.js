// variable
// let, var ,const

let name=  ' jahid'
const countryName= 'hassan'
// console.log(name)

// const number=10
// if(number>20 && number<=30){
//     console.log('yes');
    
// }
// else{
//     console.log('No');
    
// }


//array
const friends= ['jahid', 'kamal', 'hasan', 'karim', 'abdullah']
// friends.push('AbHakim')
// friends.pop()
// friends.unshift('hansnat')
// friends.shift()


//console.log(friends.slice(2,4)) // slice korle last er ta bade dai 
//console.log(friends.splice(2,4)) // splice korle last inted unosare dai


// for loop
for(let index=0; index<friends.length; index++){
    const element= friends[index];
    // console.log(element)
}



// function
function sum(a,b){
    const result=a+b
    // console.log(result)
    return result
}
const numbers= sum(20,10)
// console.log(numbers);


// Object
emplyees= ['tusar', 'kalid','arab',' mimi','latlu']
const person={
    name: 'jahid',
    age:10,
    emplyees:emplyees
}
person.name='rohim'
console.log(person)
