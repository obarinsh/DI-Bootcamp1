
import { createSlice } from '@reduxjs/toolkit'
import { createSelector } from '@reduxjs/toolkit'


const initialState = [
    {
        id: '1',
        title: 'Dracula',
        author: 'Bram Stoker',
        genre: 'Horror'
    },
    {
        id: '2',
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        genre: 'Fantasy'
    },
    {
        id: '3',
        title: 'Dune',
        author: 'Frank Herbert',
        genre: 'Sci-Fi'
    },
    {
        id: '4',
        title: 'Frankenstein',
        author: 'Mary Shelley',
        genre: 'Horror'
    },
    {
        id: '5',
        title: 'Harry Potter and the Sorcerer\'s Stone',
        author: 'J.K. Rowling',
        genre: 'Fantasy'
    },
    {
        id: '6',
        title: 'Neuromancer',
        author: 'William Gibson',
        genre: 'Sci-Fi'
    }
]


const booksSlice = createSlice({
    name: 'booksList',
    initialState,
    reducers: {}
})

export const { selectBooks } = booksSlice.actions

export const selectAllBooks = (state) => state.booksList

export const selectHorrorBooks = createSelector(
    [selectAllBooks],
    (books) => books.filter(book => book.genre === 'Horror')
)
export const selectFantasyBooks = createSelector(
    [selectAllBooks],
    (books) => books.filter(book => book.genre === 'Fantasy')
)
export const selectScienceFictionBooks = createSelector(
    [selectAllBooks],
    (books) => books.filter(book => book.genre === 'Sci-Fi')
)
export default booksSlice.reducer