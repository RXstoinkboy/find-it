import React from 'react';
import styles from './styles/SearchInput.module.scss'

const SearchKeyword = () => {
    return (
        <input type="search" placeholder='Search by name, category etc...' className={styles.searchInput} />
    );
};

export default SearchKeyword;