import React from 'react'
import styles from './styles/ResultsNumber.module.scss'

const ResultsNumber = () => {
    return (
        <div className={styles.resultsNumber}>
            results
            <p className={styles.number}>1 - 30</p>
            <p style={{marginLeft: '15px', textTransform: 'lowercase'}}>of</p>
            <p className={styles.number}>3598</p>
        </div>
    );
};

export default ResultsNumber;