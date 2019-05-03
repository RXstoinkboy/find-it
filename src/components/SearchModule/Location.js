import React from 'react';
import styles from './styles/Location.module.scss'

const Location = () => {
    return (
        <input type="search" placeholder='Where are you?' className={styles.location} />
    );
};

export default Location;