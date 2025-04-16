import { useSelector } from 'react-redux'
import { useState } from 'react'
import { selectAllBooks, selectHorrorBooks, selectFantasyBooks, selectScienceFictionBooks } from '../features/slice'


function BookList() {
    const [genre, setGenre] = useState('all')
    const allBooks = useSelector(selectAllBooks)
    const horrorBooks = useSelector(selectHorrorBooks)
    const fantasyBooks = useSelector(selectFantasyBooks)
    const sciFiBooks = useSelector(selectScienceFictionBooks)

    let data = allBooks
    if (genre === 'horror') data = horrorBooks
    if (genre === 'fantasy') data = fantasyBooks
    if (genre === 'sci-fi') data = sciFiBooks

    return (
        <div>
            <h1>Books Inventory:</h1>

            <button onClick={() => setGenre('all')}>Show all books</button>
            <button onClick={() => setGenre('horror')}>Horror</button>
            <button onClick={() => setGenre('sci-fi')}>Sci-Fi</button>
            <button onClick={() => setGenre('fantasy')}>Fantasy</button>

            <div style={{ marginTop: '1rem' }}>
                {data.map((book) => (
                    <div key={book.id}>
                        <p><strong>Title:</strong> {book.title}</p>
                        <p><strong>Author:</strong> {book.author}</p>
                        <p><strong>Genre:</strong> {book.genre}</p>
                        <hr />
                    </div>
                ))}
            </div>
        </div>)
}


export default BookList