import React, { useState, useEffect } from 'react'
import styles from './navCategories.module.scss'

const categories = ['All', 'Picture Books', 'Fiction', 'Education', 'Nature', 'Myths', 'Activities', 'Comics']

const NavCategories = () => {
	const [active, setActive] = useState('All')
	const [isDesktop, setIsDesktop] = useState(true)

	useEffect(() => {
		if (window.innerWidth > 767) {
			setIsDesktop(true)
		} else {
			setIsDesktop(false)
		}

		const updateMedia = () => {
			if (window.innerWidth > 767) {
				setIsDesktop(true)
			} else {
				setIsDesktop(false)
			}
		}

		window.addEventListener('resize', updateMedia)
		return () => window.removeEventListener('resize', updateMedia)
	}, [])
	return (
		<>
			{isDesktop ? (
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
			) : (
				<nav className={styles.navCategoriesMobile}>
					<ul className={styles.navCategoriesMobileList}>
						{categories.map(item => (
							<button key={item} className={styles.navCategoriesMobileItem}>
								{item}
							</button>
						))}
					</ul>
				</nav>
			)}
		</>
	)
}

export default NavCategories
