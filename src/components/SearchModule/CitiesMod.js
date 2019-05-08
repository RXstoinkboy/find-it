import React from 'react';
import styles from './styles/ResultsMod.module.scss'
import PropTypes from 'prop-types'

export const CitiesMod = props => {
    return (
        // display the box only if input is focused
        <div className={props.focus && props.city.length > 0 ? [styles.wrapper, styles.wrapperActive].join(' ') : styles.wrapper} >
            <section className={styles.section} >
            {/* list over cites */}
                <ul className={styles.contentList}>
                    {props.cities.map((city, idx) => (
                        <li 
                            onMouseDown={props.handlePickCity}
                            className={styles.contentItem} 
                            key={idx}>{city.name}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default CitiesMod;

CitiesMod.propTypes = {
    city: PropTypes.string.isRequired,
    focus: PropTypes.bool.isRequired,
    handlePickCity: PropTypes.func
}