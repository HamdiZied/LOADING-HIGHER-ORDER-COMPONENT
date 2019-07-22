import React, { Component } from 'react';
import SpinnerComponent from './SpinnerComponent';

const LoadingHOC = WrappedComponent => {
    return class LoadingHOC extends Component {
        render(){
            return( this.props.isLoading ? <SpinnerComponent/> : <WrappedComponent {...this.props}/> )
        }
    }
}    

export default LoadingHOC;