import React, { Component } from 'react';
import loading from './loading.gif';

class LoadingSpinner extends Component {


    render() {
        return <div className='text-center'>
            <img src={loading} alt="Loading Spinner" />

        </div>
    }


}
export default LoadingSpinner