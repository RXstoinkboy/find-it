import React from 'react';
import styles from './styles/ResultsMod.module.scss'

export const CitiesMod = props => {
    return (
        // display the box only if input is focused
        <div className={props.focus && props.city.length > 0 ? [styles.wrapper, styles.wrapperActive].join(' ') : styles.wrapper} >
            <section className={styles.section} >
            {/* list over cites */}
                <ul className={styles.contentList}>
                    {props.cities.map(city => (
                        <li className={styles.contentItem} key={city}>{city.name}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default CitiesMod;