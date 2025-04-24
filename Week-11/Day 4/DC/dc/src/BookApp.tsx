
import './App.css'
import List from './components/List'
import { useState } from "react"
import { nanoid } from "nanoid"

type Book = {
  id: string
  title: string
  author: string
}
function BookApp() {
  const [books, setBooks] = useState<Book[]>([])

  const addBook = () => {
    const newBook: Book = {
      id: nanoid(),
      title: 'Cather in the Rye',
      author: 'R.Bradberry'
    }
    setBooks(prev => [...prev, newBook])
  }
  return (
    <div>
      <h1>Book List</h1>
      <button onClick={addBook}>Add Book</button>

      <List
        items={books}
        renderItem={(book) => (
          <div>
            <strong>{book.title}</strong> by {book.author}
          </div>
        )}
      />
    </div>
  )
}

export default BookApp
