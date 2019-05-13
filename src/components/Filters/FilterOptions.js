import React from 'react'
import styles from './styles/FilterOptions.module.scss'

import Filter from './Filter.js'

const FilterOptions = () => {
    return (
        <label className={styles.labelOptions}>
            filters
            <form id='filters' className={styles.options}>
                <Filter name='price'/>
                <Filter name='hours'/>
                <Filter name='rank'/>
            </form>
        </label>
    );
};

export default FilterOptions;