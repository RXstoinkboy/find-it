import React from 'react';
import styles from './styles/SearchModule.module.scss'

const SearchModule = props => {
    return (
        <form className={styles.wrapper}>
            {props.children}
        </form>
    );
};

export default SearchModule;