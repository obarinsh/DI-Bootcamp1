

interface Book {
  title: string,
  author: string,
  isbn: string,
  publishedYear: number,
  genre?: string
}

class Library {
  private books: Book[] = []

  public addBook(newBook: Book): void {
    this.books.push(newBook)
  }
  public getBookDetails(isbn: string): string {
    const book = this.books.find(book => book.isbn === isbn)
    if (book) {
      return `${book.title} by ${book.author} (${book.publishedYear})`
    } else {
      return 'Book not found'
    }
  }
}


class DigitalLibrary extends Library {

  readonly website: string
  public listBooks(books: Book[] = []): string[] {
    const list: string[] = []
    for (const book of books) {
      list.push(book.title)
    }

    return list
  }
}

let newLibrary = new DigitalLibrary('https://shushsushushs.com')

newLibrary.addBook({
  title: "Hello shushu",
  author: "Pushkin",
  isbn: "2222222",
  publishedYear: 20000,
  genre: "Dairy"
})

console.log(newLibrary.listBooks())
console.log(newLibrary.getBookDetails("2222222"))