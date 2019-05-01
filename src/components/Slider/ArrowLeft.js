import React from 'react';
import styles from './styles/ArrowLeft.module.scss'
import PropTypes from 'prop-types'

export const ArrowLeft = props => {
    return (
        <button className={styles.arrowLeft} onClick={props.prevSlide} />
    );
};

export default ArrowLeft;

ArrowLeft.propTypes = {
    prevSlide: PropTypes.func.isRequired
}