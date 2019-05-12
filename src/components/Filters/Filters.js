import React from 'react';
import styles from './styles/Filters.module.scss'

import SearchModule from '../SearchModule/SearchModule'

const Filters = () => {
    return (
        <div className={styles.filters}>
            <SearchModule filters />
        </div>
    );
};

export default Filters;