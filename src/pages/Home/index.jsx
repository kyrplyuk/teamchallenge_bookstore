import React from 'react'
import Sidebar from '../../components/Sidebar'
import styles from './home.module.css'
import { books } from '../../mockData/booksList'
import BooksList from '../../components/BooksList'
import IntroSlider from '../../components/IntroSlider'

const Home = () => {
	return (
		<>
			<div className={styles.mainPage}>
				<IntroSlider />
				<div>
					<div className='container'>
						<div className={styles.mainContent}>
							<Sidebar />
							<BooksList books={books} />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
