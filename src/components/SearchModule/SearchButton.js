import React from 'react';
import styles from './styles/SearchButton.module.scss'
import {ReactComponent as SearchIcon} from '../../assets/img/search.svg'
import PropTypes from 'prop-types'

export const SearchButton = props => {
    return (
        // <Link to='hihichrad'>
        <button 
            onClick={props.handleGetBusinessesList}
            type='submit'
            className={styles.searchButton}
            // {...props}
        >
            <SearchIcon className={styles.searchIcon}/>
        </button>
        // </Link>
        
    );
};

export default SearchButton;

SearchButton.propTypes = {
    handleGetBusinessesList: PropTypes.func.isRequired
}