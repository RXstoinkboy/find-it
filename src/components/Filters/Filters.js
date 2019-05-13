import React from 'react';
import styles from './styles/Filters.module.scss'

import SearchModule from '../SearchModule/SearchModule'
import FilterOptions from './FilterOptions.js'
import ResultsNumber from './ResultsNumber.js'

const Filters = () => {
    return (
        <section className={styles.filters}>
            <div className={styles.leftPart}>
                <SearchModule filters />
                <FilterOptions />
            </div>
            <ResultsNumber />
        </section>
    );
};

export default Filters;