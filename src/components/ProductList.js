import React from 'react'
import styles from './styles/ProductList.module.scss'

import SearchModule from './SearchModule/SearchModule'
import TopBar from './utils/TopBar'
import Filters from './Filters/Filters'
import Map from './utils/Map'
import Results from './Results/Results'

export const ProductList = () => {
    return (
        <div className={styles.productList}>
            <div className="topModule">
                <TopBar />
                <Filters />
            </div>
            <Map />
            <Results />
        </div>
    );
};

export default ProductList;