// const person={
//     name:'kamal',
//     age:20,
//     friends:['polash', 'karim','tusher'],
//     family:{
//         father:'Kajol',
//         mother:'kajoly'
//     }
// }

// const jsonData=JSON.stringify(person) // data guloke json e convert korea jonny JSON.stringify 
// const planData = JSON.parse(jsonData)  // data ke json taike abar Object a convert korte aita use kora hoi


// fetch

// fetch('urls', (req, res))
//     .then(res=>res.json())
//     .then(date=>console.log(data))


// const person={
//     name:'kamal',
//     age:20,
//     friends:['polash', 'karim','tusher'],
//     family:{
//         father:'Kajol',
//         mother:'kajoly'
//     }
// }

// const keys= Object.keys(person)
// const values= Object.values(person)
// console.log(keys)
// console.log(values)



const products = [
    { id:1, name:'redmi', brand:'xiaomi', price:2500, color:'black'},
    { id:2, name:'sam', brand:'samsung', price:4000, color:'white'},
    { id:3, name:'apple1', brand:'apple', price:5000, color:'gfold'},
    { id:4, name:'apple2', brand:'apple', price:50000, color:'gold'},
    { id:5, name:'apple2', brand:'x-12', price:50000, color:'gold'},
    { id:6, name:'redmi2', brand:'xiaom ', price:50000, color:'black'}
]

const newData = { id:7, name: 'walton', brand:'walton', price: 3000, color:'gray'
}
const newArray=[...products, newData]
// console.log(newArray);

const reminingProduts= products.filter(product=>product.brand !=='xiaomi')
const newProducts= [...reminingProduts, newData]
console.log(newProducts)