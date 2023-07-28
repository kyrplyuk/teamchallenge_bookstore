import React from 'react'
import styles from './introslider.module.scss'

const IntroSlider = () => {
	return (
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
	)
}

export default IntroSlider
