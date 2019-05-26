import React from 'react'
import styles from './styles/Result.module.scss'

const Result = () => {
    return (
        <div className={styles.result}>
            <div className={styles.leftSide}></div>
            <section className={styles.rightSide}>
                <h3 className={styles.restaurantName}>1. Restaurant name</h3>
                <section className={styles.rate}>
                    <div className={styles.stars}>
                        <div className={styles.star} />
                        <div className={styles.star} />
                        <div className={styles.star} />
                        <div className={styles.star} />
                        <div className={styles.star} />
                    </div>
                    <p className={styles.reviews}><span className={styles.reviewsNum}>100</span> reviews</p>
                </section>
                <section className={styles.infoRow}>
                    <p className={styles.price}>$$</p>
                    <div className={styles.categories}>
                        <a href="#" className={styles.category}>Italian</a>
                        <a href="#" className={styles.category}>Italian</a>
                        <a href="#" className={styles.category}>Italian</a>
                    </div>
                </section>
                <a href="tel:+12600500400">{"12 600 500 400"}</a>
                <section className={styles.address}>
                    <p>Asnyka 111</p>
                    <p>32-020 Wieliczka</p>
                </section>
            </section>
        </div>
    );
};

export default Result;