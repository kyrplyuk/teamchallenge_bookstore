import React, { useState, useEffect } from 'react'
import styles from './header.module.scss'
import SearchComponent from '../SearchComponent'
import NavCategories from '../NavCategories'
import BurgerMenu from '../BurgerMenu'

const Header = () => {
	const [isDesktop, setIsDesktop] = useState(true)
	const [menuActive, setMenuActive] = useState(false)

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
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.headerInner}>
					<div className={styles.headerTop}>
						<div className={styles.headerItemFirst}>
							<button className={styles.headerItemBurger} type='button' onClick={() => setMenuActive(!menuActive)}>
								<span className={styles.headerItemBurgerLine} />
							</button>
							<BurgerMenu active={menuActive} setActive={setMenuActive} />
							<a href='./' className={styles.headerLogo}>
								<div className={styles.headerLogoImg}>
									<img src='./assets/img/logo.svg' alt='logo' />
								</div>
								<div className={styles.headerLogoText}>
									Magic of Wor<span>l</span>ds
								</div>
							</a>
						</div>

						<div className={styles.headerItemSecond}>
							<SearchComponent />
							<button type='button' className={styles.headerShoppingCartBtn}>
								<img src='./assets/img/shoppingCart.svg' alt='cart' />
							</button>
						</div>
					</div>
					{isDesktop ? (
						<div className={styles.headerBottom}>
							<NavCategories />
						</div>
					) : (
						<></>
					)}
				</div>
			</div>
		</header>
	)
}

export default Header
