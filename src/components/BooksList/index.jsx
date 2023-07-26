import styles from './bookstList.module.css'
import BookCard from '../BookCard'
import React from 'react'

const BooksList = ({ books }) => {
	return (
		<div className={styles.books}>
			{books.map(book => (
				<BookCard key={book.id} book={book} />
			))}
		</div>
	)
}
export default BooksList
