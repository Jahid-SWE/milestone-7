import React from 'react'

const Book = ({book}) => {
    const {id, name, price, writer}=book
    // console.log(book)
  return (
    <div>
        <li>Book Name : {name} price : {price}</li>
    </div>
  )
}

export default Book