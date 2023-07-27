import React from 'react'
import styles from './search.module.scss'

const onSearch = e => {
	e.preventDefault()
}
const SearchComponent = () => {
	return (
		<div className={styles.searchComponent}>
			<form onSubmit={onSearch}>
				<div className={styles.searchComponentInner}>
					<input type='text' className={styles.searchComponentText} placeholder='Search Product' />
					<button type='submit' onSubmit={onSearch}>
						<img className={styles.searchIcon} src='./assets/img/searchIcon.svg' alt='Search' />
					</button>
				</div>
			</form>
		</div>
	)
}

export default SearchComponent
