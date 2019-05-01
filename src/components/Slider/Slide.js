import React from 'react'
import styles from './styles/Slide.module.scss'
import PropTypes from 'prop-types'

export const Slide = props => {
    const inlineStyle = {
        backgroundImage: `url(${props.image.image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <>
            <div className={styles.slide} style={inlineStyle}>
                <a href={props.image.url} className={styles.link}>{props.image.name}</a>
            </div>
        </>
    );
};

export default Slide;

Slide.propTypes = {
    image: PropTypes.object.isRequired
}