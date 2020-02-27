import React, { Component } from 'react'

class GoogleMaps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ''
        }
    }

    onInputChange = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }

    render() {
        return (
            <div className="container">
                <form>
                    <label>loaction</label>
                    <input id="place" type="text" name="place" value={this.state.inputValue} onChange={this.onInputChange}></input>
                </form>
            </div>
        )
    }
}

export default GoogleMaps;
