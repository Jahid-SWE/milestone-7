const products = [
    { id:1, name:'redmi', brand:'xiaomi', price:2500, color:'black'},
    { id:2, name:'sam', brand:'samsung', price:4000, color:'white'},
    { id:3, name:'apple1', brand:'apple', price:5000, color:'gfold'},
    { id:4, name:'apple2', brand:'apple', price:50000, color:'gold'},
    { id:5, name:'apple2', brand:'x-12', price:50000, color:'gold'},
    { id:6, name:'redmi2', brand:'xiaomi', price:50000, color:'black'},
]

// map return kore object ata akta akta kore data return kore 
const result = products.map(product=>product.price)
//  console.log(result)


// filter return kore object condition er upor base kore
const filterResult = products.filter(product=> product.price>=50000 && product.brand=== 'apple')
console.log(filterResult)

// find return kore akta objetc jekhane 
const findResult= products.find(product=> product.color==='gold')
console.log(findResult)