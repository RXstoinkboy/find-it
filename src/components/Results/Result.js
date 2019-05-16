import React from 'react'
import styles from './styles/Result.module.scss'

const Result = () => {
    return (
        <div className={styles.result}>
            <div className={styles.leftSide}></div>
            <div className={styles.rightSide}>
                <h3 className={styles.restaurantName}>1. Restaurant name</h3>
                <div className={styles.rate}>
                    <div className={styles.stars}>
                        <div className={styles.star}>*****</div>
                    </div>
                    <p className={styles.reviews}>100 reviews</p>
                </div>
                <div className={styles.infoRow}>
                    <p className={styles.price}>$$</p>
                    <div className={styles.categories}>
                        <a href="#" className={styles.category}>Italian</a>
                        <a href="#" className={styles.category}>Italian</a>
                        <a href="#" className={styles.category}>Italian</a>
                    </div>
                </div>
                <a href="tel:+12600500400">{"12 600 500 400"}</a>
                <p className={styles.address}></p>
            </div>
        </div>
    );
};

export default Result;