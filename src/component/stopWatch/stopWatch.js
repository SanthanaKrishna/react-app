import React, { Component } from 'react'

export default class StopWatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTimerOn: false,
            timeMilliSec: 0,
            timeSec: 0,
            timeMin: 0,
            timeHrs: 0,
            timeList: []
        }
    }

    onStartTimer = () => {
        this.setState({
            isTimerOn: true,
        })
        this.timerInterval = setInterval(() => {
            this.setState({
                timeMilliSec: this.state.timeMilliSec + 10
            })
            if (this.state.timeMilliSec > 999) {
                console.log('sec in mill', this.state.timeMilliSec)
                this.setState({
                    timeMilliSec: 0,
                    timeSec: this.state.timeSec + 1
                })
            }
            if (this.state.timeSec >= 60) {
                this.setState({
                    timeMin: this.state.timeMin + 1
                })
            }
            if (this.state.timeMin >= 60) {
                this.setState({
                    timeHrs: this.state.timeHrs + 1
                })
            }
        }, 1)
    }
    pauseTimer = () => {
        clearInterval(this.timerInterval);
        this.setState({
            isTimerOn: false
        })
    }
    resetTimer = () => {
        this.setState({
            timeMilliSec: 0,
            timeSec: 0,
            timeMin: 0,
            timeHrs: 0
        })
    }
    timeFormat = () => {
        const { timeMilliSec, timeSec, timeMin, timeHrs } = this.state;
        let milliSeconds = (`${timeMilliSec}`);
        let seconds = (`0${timeSec}`).slice(-2);
        let minutes = (`0${timeMin}`).slice(-2);
        let hours = (`0${timeHrs}`).slice(-2);
        // let seconds = (int)(milliseconds / 1000) % 60;
        // let minutes = (int)((milliseconds / (1000 * 60)) % 60);
        // let hours = (int)((milliseconds / (1000 * 60 * 60)) % 24);
        return `${hours} : ${minutes} : ${seconds} : ${milliSeconds}`
    }
    addLapTimer = () => {
        let time = this.timeFormat();
        this.setState({
            timeList: [...this.state.timeList, time]
        })
    }
    lapTimer = () => {
        const { timeList } = this.state;
        return (
            <div>
                <ol>
                    {
                        timeList.map((time, index) => (
                            <li key={index}>
                                {time}
                            </li>
                        ))
                    }
                </ol>
            </div>
        )
    }
    resetLapTimer = () => {
        this.setState({
            timeList: []
        })
    }
    render() {
        const { isTimerOn } = this.state;
        return (
            <div>
                <div>
                    <h3>{this.timeFormat()}</h3>
                </div><br />
                {!isTimerOn ? <button onClick={this.onStartTimer}>Start</button> : null}
                {isTimerOn ? <button onClick={this.pauseTimer}>Stop</button> : null} &nbsp;
                <button onClick={this.resetTimer} disabled={isTimerOn}>Reset</button> &nbsp;
                <button onClick={this.addLapTimer}>LapTime</button> &nbsp;
                <button onClick={this.resetLapTimer}>resetLap</button><br />
                <div>
                    {this.lapTimer()}
                </div>
            </div>
        )
    }
}
