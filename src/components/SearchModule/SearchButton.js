import React from 'react';
import styles from './styles/SearchButton.module.scss'
import {ReactComponent as SearchIcon} from '../../assets/img/search.svg'

const SearchButton = props => {
    return (
        <button 
            // type='submit'
            className={styles.searchButton}
            onClick={props.handleGetBusinessesList}
        >
            <SearchIcon className={styles.searchIcon}/>
        </button>
    );
};

export default SearchButton;