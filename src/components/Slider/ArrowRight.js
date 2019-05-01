import React from 'react';
import styles from './styles/ArrowRight.module.scss'
import PropTypes from 'prop-types'

export const ArrowRight = props => {
    return (
        <button className={styles.arrowRight} onClick={props.nextSlide} />
    );
};

export default ArrowRight;

ArrowRight.propTypes = {
    nextSlide: PropTypes.func.isRequired
}