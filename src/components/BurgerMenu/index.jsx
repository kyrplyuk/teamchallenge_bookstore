import React, { useEffect, useState } from 'react'
import styles from './burgerMenu.module.scss'
import NavCategories from '../NavCategories'

const BurgerMenu = ({ active, setActive }) => {
	const [isDesktop, setIsDesktop] = useState(true)

	useEffect(() => {
		if (window.innerWidth < 767) {
			setIsDesktop(true)
		} else {
			setIsDesktop(false)
		}
		const updateMedia = () => {
			if (window.innerWidth < 767) {
				setIsDesktop(true)
			} else {
				setIsDesktop(false)
			}
		}

		window.addEventListener('resize', updateMedia)
		return () => window.removeEventListener('resize', updateMedia)
	}, [])
	const rootRemoveOverflow = () => {
		const root = document.getElementById('root')
		root.classList.remove('root-overflow')
	}
	return (
		<>
			<div className={active ? styles.burgerMenuActive : styles.burgerMenu}>
				<div
					className={styles.burgerMenuBackdrop}
					onClick={() => {
						setActive(false)
						rootRemoveOverflow()
					}}
				/>
				<div className={styles.burgerMenuInner}>
					<div className={styles.burgerMenuHeader}>
						<div className={styles.burgerMenuHeaderLogo}>
							<div className={styles.burgerMenuHeaderLogoImg}>
								<img src='./assets/img/logo.svg' alt='logo' />
							</div>
							<div className={styles.burgerMenuHeaderLogoText}>
								Magic of Wor<span>l</span>ds
							</div>
						</div>
						<button
							type='button'
							className={styles.burgerMenuHeaderClose}
							onClick={() => {
								setActive(false)
								rootRemoveOverflow()
							}}
						>
							Close
						</button>
					</div>

					<div className={styles.burgerMenuContent}>
						<div className={styles.burgerMenuContentCategories}>
							<div className={styles.burgerMenuContentCategoriesImg}>
								<img src='./assets/img/CategoriesIcon.svg' alt='' />
							</div>
							<h4 className={styles.burgerMenuContentCategoriesTitle}>Categories</h4>
						</div>
						{isDesktop ? (
							<>
								<NavCategories />
								<NavCategories />
							</>
						) : (
							<></>
						)}
					</div>
				</div>
			</div>
		</>
	)
}

export default BurgerMenu
