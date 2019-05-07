import React from 'react';
import styles from './styles/SearchInput.module.scss'
import PropTypes from 'prop-types'

export const SearchKeyword = props => {
        return (
            <input 
            type="search" 
            placeholder='Search by name, category etc...' 
            onChange={props.handleSearch}
            value={props.keywordToSearch}
            className={styles.searchInput} />
        );
};

export default SearchKeyword;

SearchKeyword.propTypes = {
    handleSearch: PropTypes.func.isRequired,
    keywordToSearch: PropTypes.string.isRequired
}