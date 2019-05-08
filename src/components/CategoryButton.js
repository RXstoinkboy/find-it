import React from 'react'
import styles from './styles/CategoryButton.module.scss'

const CategoryButton = props => {
    return (
        <button className={styles.category}>
            {props.title}
        </button>
    );
};

export default CategoryButton;