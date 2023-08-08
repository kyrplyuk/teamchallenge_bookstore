import React from 'react'
import styles from '../Sidebar/aside.module.scss'
import Aside from '../Aside'

const Sidebar = () => {
	return (
		<aside className={styles.sideBarBody}>
			<Aside/>
		</aside>
	)
}

export default Sidebar
