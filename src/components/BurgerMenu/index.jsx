import React from 'react'
import styles from './burgerMenu.module.scss'

const BurgerMenu = () => {
	return (
		<button className={styles.burgerBtn} type='button'>
			<span className={styles.burgerLine} />
		</button>
	)
}

export default BurgerMenu
