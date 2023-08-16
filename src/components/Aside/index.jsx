import React from "react";
import styles from "../Aside/Aside.module.scss"

const Aside = () =>{
    return (
        <><h3 className={styles.sideBarFilters}>Selected filters:</h3><div className={styles.sideBarFilterContainer}>
            <img src='/assets/img/Close%20Icon.svg' alt='close icon' className={styles.sideBarFiltersImg} />
            <span className={styles.sideBarFiltersText}>Price: 15-20</span>
        </div><div className={styles.sideBarFilterSecondContainer}>
                <img src='/assets/img/Close%20Icon.svg' alt='close icon' className={styles.sideBarFiltersImg} />
                <span className={styles.sideBarFiltersText}>Family reading</span>
            </div><div>
                <h3 className={styles.sideBarFilterAge}>Age Range:</h3>
                <div className={styles.sideBarFilterAges}>
                    <input type='checkbox' className={styles.sideBarCheckbox} />
                    <span className={styles.sideBarAgeText}>Baby to 2</span>
                </div>
                <div className={styles.sideBarFilterAges}>
                    <input type='checkbox' className={styles.sideBarCheckbox} />
                    <span className={styles.sideBarAgeText}>Ages 3-5</span>
                </div>
                <div className={styles.sideBarFilterAges}>
                    <input type='checkbox' className={styles.sideBarCheckbox} />
                    <span className={styles.sideBarAgeText}>Ages 6-8</span>
                </div>
                <div className={styles.sideBarFilterAges}>
                    <input type='checkbox' className={styles.sideBarCheckbox} />
                    <span className={styles.sideBarAgeText}>Family reading</span>
                </div>
            </div><div>
                <h3 className={styles.sideBarPriceText}>Price:</h3>
                <div className={styles.sideBarPrice}>
                    <input type='text' placeholder='Min' className={styles.sideBarPriceMin} />
                    <input type='text' placeholder='Max' className={styles.sideBarPriceMax} />
                    <div className={styles.sideBarPriceBut}>
                        <span className={styles.sideBarPriceButText}>Go</span>
                        <img src='/assets/img/Arow.svg' alt='arow' className={styles.sideBarPriceButImg} />
                    </div>
                </div>
            </div></>
    )
}

export default Aside