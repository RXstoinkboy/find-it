import React from 'react'
import styles from './styles/ResultList.module.scss'

export const ResultList = ({children}) => {
    return (
        <ul className={styles.resultList}>
            {children}
        </ul>
    );
};

export default ResultList;