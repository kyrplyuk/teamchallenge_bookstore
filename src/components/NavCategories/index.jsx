import React, { useState } from 'react'
import styles from './navCategories.module.scss'

const categories = ['All', 'Category', 'Fiction', 'Education', 'Nature', 'Myths', 'Activities', 'Comics']

const NavCategories = () => {
	const [active, setActive] = useState('All')
	return (
		<nav className={styles.navCategories}>
			<ul className={styles.navCategoriesList}>
				{categories.map(item => (
					<button
						key={item}
						className={item === active ? styles.navCategoriesItemActive : styles.navCategoriesItem}
						onClick={() => setActive(item)}
					>
						{item}
					</button>
				))}
			</ul>
		</nav>
	)
}

export default NavCategories
