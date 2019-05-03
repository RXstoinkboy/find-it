import React from 'react';
import styles from './styles/SearchButton.module.scss'
import {ReactComponent as SearchIcon} from '../../assets/img/search.svg'

const SearchButton = () => {
    return (
        <button 
            // type='submit'
            className={styles.searchButton}
        >
            <SearchIcon className={styles.searchIcon}/>
        </button>
    );
};

export default SearchButton;