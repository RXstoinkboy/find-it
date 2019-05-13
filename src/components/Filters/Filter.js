import React from 'react'
import styles from './styles/Filter.module.scss'

const Filter = ({name}) => {
    return (
        <button className={styles.filterButton}>
            {name}
        </button>
    );
};

export default Filter;