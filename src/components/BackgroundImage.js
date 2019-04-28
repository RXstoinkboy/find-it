import React from 'react';
import {connect} from 'react-redux'

const BackgroundImage = props => {
    console.log(props.collectedImages);
    return (
        <div style={{width: '100vw', height: '100vh'}}>
            <img style={{width: '100%', height: '100%'}} src={props.source} alt=""/>
        </div>
    );
};

const mapStateToProps = state => {
    return{
        collectedImages: state.collectedImages
    }
}

export default connect(mapStateToProps, null)(BackgroundImage);