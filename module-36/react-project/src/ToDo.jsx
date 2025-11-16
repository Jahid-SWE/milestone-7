import React from 'react'

// const ToDo = ({task, isDone}) => {
//    if(isDone === true){
//     return <>
//     <li>Done : {task}</li>
//     </>
//    }
//    return <>
   
//    <li>pending: {task}</li>
//    </>
// }



// ternary operation using condition 3 
// const ToDo = ({task, isDone}) => {
//   return (
//       isDone ? <li>Done :{task}</li> : <li>Pending : {task}</li> 
//   )
// }

// only true  dakate cai tahole && dilei hobe 
const ToDo =({task, isDone})=>{
  return isDone && <li>Done your job : {task}</li>
}



export default ToDo