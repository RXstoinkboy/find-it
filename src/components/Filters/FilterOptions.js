import React from 'react'
import styles from './styles/FilterOptions.module.scss'

import Filter from './Filter.js'

const FilterOptions = ({title, end}) => {
    return (
        <form className={!end ? styles.labelOptions : [styles.labelOptions, styles.labelOptionsEnd].join(' ')}>
            {title}
            <label className={styles.options} />
                <Filter name='price'/>
                <Filter name='hours'/>
                <Filter name='rank'/>
        </form>
    );
};

export default FilterOptions;