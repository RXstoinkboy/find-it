import React from 'react';
import styles from './styles/Filters.module.scss'

import SearchModule from '../SearchModule/SearchModule'
import FilterOptions from './FilterOptions.js'

const Filters = () => {
    return (
        <div className={styles.filters}>
            <SearchModule filters />
            <FilterOptions />
        </div>
    );
};

export default Filters;