import React from 'react';
import styles from './styles/ArrowRight.module.scss'

const ArrowRight = props => {
    return (
        <button className={styles.arrowRight} onClick={props.nextSlide} />
    );
};

export default ArrowRight;