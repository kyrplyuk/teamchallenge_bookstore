import React, { useState, useEffect } from 'react'
import styles from './introslider.module.scss'
import SearchComponent from '../SearchComponent'

const IntroSlider = () => {
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
			{isDesktop ? <></> : <SearchComponent />}
			<section className={styles.introSlider}>
				<div className='container'>
					<div className={styles.introSliderInner}>
						<div className={styles.introSliderInnerText}>
							<h3 className={styles.introSliderTitle}>Books for family reading </h3>
							<p className={styles.introSliderSubTitle}>Plunge into the world of fantasy with your child</p>
						</div>
						<div className={styles.introSliderImg}>
							<img src='./assets/img/slider-01.jpg' alt='' />
						</div>
						<button type='button' className={styles.introSliderArrowPrev}>
							<img src='./assets/img/arrowPrev.svg' alt='arrow' />
						</button>
						<button type='button' className={styles.introSliderArrowNext}>
							<img src='./assets/img/arrowNext.svg' alt='arrow' />
						</button>
					</div>
				</div>
			</section>
		</>
	)
}

export default IntroSlider
