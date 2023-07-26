import React from 'react'

import styles from './header.module.css'
import SearchComponent from '../SearchComponent'
import NavCategories from '../NavCategories'

const Header = () => {
	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.headerInner}>
					<div className={styles.headerTop}>
						<a href='./' className={styles.headerLogo}>
							<div className={styles.headerLogoImg}>
								<img src='./assets/img/logo.svg' alt='logo' />
							</div>
							<div className={styles.headerLogoText}>
								Magic of Wor<span>l</span>ds
							</div>
						</a>

						<div className={styles.headerItems}>
							<SearchComponent />
							<button type='button' className={styles.headerShoppingCartBtn}>
								<img src='./assets/img/shoppingCart.svg' alt='cart' />
							</button>
						</div>
					</div>
					<div className={styles.headerBottom}>
						<NavCategories />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
