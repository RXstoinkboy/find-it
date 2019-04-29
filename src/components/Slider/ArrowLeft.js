import React from 'react';
import styles from './styles/ArrowLeft.module.scss'

const ArrowLeft = props => {
    return (
        <button className={styles.arrowLeft} onClick={props.prevSlide} />
    );
};

export default ArrowLeft;