import React from 'react';
import styles from './styles/SearchButton.module.scss'
import {ReactComponent as SearchIcon} from '../../assets/img/search.svg'
import PropTypes from 'prop-types'

export const SearchButton = props => {
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

SearchButton.propTypes = {
    handleGetBusinessesList: PropTypes.func.isRequired
}