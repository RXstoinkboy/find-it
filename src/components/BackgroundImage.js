import React from 'react'
import styles from './styles/BackgroundImage.module.scss'
import {connect} from 'react-redux'

const BackgroundImage = props => {
    let content;

    if(props.collectedData.length >= 0){
        content = props.collectedData.map(item => (
            <>
                <img className={styles.bgImage} src={item.image} alt={item.name} />
                <a className={styles.link} href={item.url}>{item.name}</a>
            </>
        ))
    }

    return (
        <div className={styles.wrapper}>
            {/* <img className={styles.bgImage} src={props.collectedData[0].image} alt={props.collectedData[0].name} />
            <a className={styles.link} href={props.collectedData[0].url}>{props.collectedData[0].name}</a> */}
            {content}
        </div>
    );
};

const mapStateToProps = state => {
    return{
        collectedData: state.bgImages.collectedData
    }
}

export default connect(mapStateToProps, null)(BackgroundImage);