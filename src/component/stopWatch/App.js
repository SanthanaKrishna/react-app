import React from 'react';
import StopWatch from './stopWatch';

class StopWatchApp extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="col-6">
                    <h1>Stop Watch</h1><br /><br />
                    <StopWatch />
                </div>
            </div>
        )
    }
}

export default StopWatchApp;