import React, {useState} from "react";
import styles from './uiPage.module.scss'
import {books} from "../../mockData/booksList";

const ArrowDownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
    <path d="M18.9417 9.37928L11.7542 16.5668C11.7208 16.6002 11.6812 16.6267 11.6376 16.6448C11.5939 16.6629 11.5472 16.6722 11.5 16.6722C11.4527 16.6722 11.406 16.6629 11.3623 16.6448C11.3187 16.6267 11.2791 16.6002 11.2457 16.5668L4.0582 9.37928C4.02481 9.34589 3.99832 9.30625 3.98025 9.26262C3.96218 9.21899 3.95288 9.17224 3.95288 9.12502C3.95288 9.0778 3.96218 9.03104 3.98025 8.98741C3.99832 8.94379 4.02481 8.90415 4.0582 8.87076C4.12563 8.80333 4.21709 8.76544 4.31246 8.76544C4.35968 8.76544 4.40643 8.77474 4.45006 8.79281C4.49368 8.81088 4.53332 8.83737 4.56671 8.87076L11.5 15.804L18.4332 8.87076C18.4666 8.83737 18.5062 8.81088 18.5499 8.79281C18.5935 8.77474 18.6402 8.76544 18.6875 8.76544C18.7347 8.76544 18.7814 8.77474 18.8251 8.79281C18.8687 8.81088 18.9083 8.83737 18.9417 8.87076C18.9751 8.90415 19.0016 8.94379 19.0197 8.98741C19.0377 9.03104 19.047 9.0778 19.047 9.12502C19.047 9.17224 19.0377 9.21899 19.0197 9.26262C19.0016 9.30625 18.9751 9.34589 18.9417 9.37928Z" fill="#202020"/>
  </svg>
);
const slidesToShow = 3;
const UiPage = ({ book }) => {
  const[currentSlide , setCurrentSlide] = useState(0)

  const nextSlide = () => {
    if(currentSlide + slidesToShow < books.length){
      setCurrentSlide((prev) => prev + 1)
    }
  }
  const prevSlide = () => {
    if(currentSlide > 0){
      setCurrentSlide((prev) => prev - 1)
    }
  }
  return (
    <div className={styles.cardMainUnit}>
      <img src={book.image} alt={book.title} className={styles.cardImgTop} width='100%'/>
      <div className={styles.cardUnitContainer}>
        <h5 className={styles.cardTitle}>{book.title}</h5>
        <p className={styles.cardAuthor}>by Amy Sparkes</p>
        <p className={styles.cardPrice}>${book.price}</p>
        <div className={styles.cardUnitBuy}>
          <img src='/assets/img/Review.svg' alt='Review' className={styles.cardUnitBuyButStar}/>
          <div className={styles.cardUnitBuyBut}>
            <span className={styles.cardUnitBuyText}>ADD TO CART</span>
            <img src='/assets/img/Vectorbas.svg' alt='Review' className={styles.cardUnitBuyButBasket}/>
          </div>
        </div>
        <h2 className={styles.cardUnitDescHead}>Description</h2>
        <p className={styles.cardUnitDescText}>Nine is an orphan pickpocket determined to escape her life in the Nest of a Thousand Treasures. When she steals a house-shaped ornament from a mysterious woman's purse, she knocks on its tiny door and watches it grow into a huge, higgledy-piggeldy house. Inside she finds a host of magical and brilliantly funny characters, including Flabberghast – a young wizard </p>
        <div className={styles.cardUnitMore}>
            <span className={styles.cardUnitMoreText}>Read more</span>
            <ArrowDownIcon/>
        </div>
        <h2 className={styles.cardUnitDetHead}>Details</h2>
        <div className={styles.cardUnitDetBlock}>
          <div className={styles.cardUnitDetails}>
            <p className={styles.cardUnitDetСategories}>Title:</p>
            <p className={styles.cardUnitDet}>{book.title}</p>
          </div>
          <div className={styles.cardUnitDetails}>
            <p className={styles.cardUnitDetСategories}>Author:</p>
            <p className={styles.cardUnitDet}>{book.author}</p>
          </div>
          <div className={styles.cardUnitDetails}>
            <p className={styles.cardUnitDetСategories}>Number of pages:</p>
            <p className={styles.cardUnitDet}>240</p>
          </div>
          <div className={styles.cardUnitDetails}>
            <p className={styles.cardUnitDetСategories}>Reading Age:</p>
            <p className={styles.cardUnitDet}>Family reading</p>
          </div>
        </div>
        <h2 className={styles.cardUnitRecommendHead}>You might also like</h2>
            <div className={styles.cardUnitRecommendCarousel}>
              <div className={styles.cardUnitRecommendSlider}>
                {books.slice(currentSlide, currentSlide + slidesToShow).map((book) => (
                  <div key={book.id} className={styles.cardUnitRecommendBookSlide}>
                    <img className={styles.cardUnitRecommendSlideImg} src={book.image} alt={book.title} width='100%' />
                    <h3 className={styles.cardUnitRecommendSlideTitle}>{book.title}</h3>
                    <p className={styles.cardUnitRecommendSlideAuthor}>{book.author}</p>
                    <div className={styles.cardUnitRecommendSlideRating}>
                      <img src='/assets/img/Star.svg' alt='star' className={styles.cardUnitRecommendSlideReview} />
                      <span className={styles.cardUnitRecommendSlideComponent}>{book.rating}</span>
                    </div>
                    <p className={styles.cardUnitRecommendSlidePrice}>{book.price}</p>
                  </div>
                ))}
              </div>
              <div className="controls">
                <button type='button' className={styles.cardUnitRecommendSlideArrowPrev} onClick={prevSlide}>
                  <img src='/assets/img/CaretLeft.svg' alt='arrow' />
                </button>
                <button type='button' className={styles.cardUnitRecommendSlideArrowNext} onClick={nextSlide}>
                  <img src='/assets/img/CaretNext.svg' alt='arrow' />
                </button>
              </div>
            </div>
      </div>
    </div>
  )
}

export default UiPage