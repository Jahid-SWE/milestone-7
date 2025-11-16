import React from 'react'
import Book from './Book'

const Library = ({books}) => {
  return (
    <div>
        <h1> My National Book libraery</h1>
        <h3>Book Collection : {books.length}</h3>
        {
            books.map(book=><Book key={book.id} book={book}></Book>)
        }
    </div>
  )
}

export default Library