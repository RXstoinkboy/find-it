import React from 'react'
import styles from './styles/FilterOptions.module.scss'

import Filter from './Filter.js'

const FilterOptions = () => {
    return (
        <form className={styles.labelOptions}>
            filters
            <label id='filters' className={styles.options} />
                <Filter name='price'/>
                <Filter name='hours'/>
                <Filter name='rank'/>
        </form>
    );
};

export default FilterOptions;