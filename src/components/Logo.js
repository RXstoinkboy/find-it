import React from 'react'
import styles from './styles/Logo.module.scss'

export const Logo = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.logoText}>
                find it
                <div className={styles.logoMark}>!</div>
            </h1>
            <div className={styles.under}></div>
        </div>
    );
};

export default Logo;