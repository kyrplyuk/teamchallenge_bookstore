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
							<li key={item}>
								<button
									className={item === active ? styles.navCategoriesItemActive : styles.navCategoriesItem}
									onClick={() => setActive(item)}
								>
									{item}
								</button>
							</li>
						))}
					</ul>
				</nav>
			) : (
				<nav className={styles.navCategoriesMobile}>
					<ul className={styles.navCategoriesMobileList}>
						{categories.map(item => (
							<li key={item}>
								<button className={styles.navCategoriesMobileItem} onClick={() => setActive(item)}>
									{item}
									<div className={styles.navCategoriesMobileItemArrow}>
										<img src='./assets/img/arrowBlack.svg' alt='arrow' />
									</div>
								</button>
							</li>
						))}
					</ul>
				</nav>
			)}
		</>
	)
}

export default NavCategories
