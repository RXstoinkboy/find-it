import React from 'react';
import styles from './styles/TopCategories.module.scss'

const TopCategories = props => {
    return (
        <div className={styles.topCats}>
            {props.children}
        </div>
    );
};

export default TopCategories;