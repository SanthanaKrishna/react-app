import React from 'react';
import './App.css';
import { Buttons } from './button';
import { Results } from './outputScreen';

class Calculate extends React.Component {
  state = {
    result: ""
  }
  onClick = (button) => {

    if (button === "=") {
      this.calculate();
    }
    else if (button === "C") {
      this.reset();
    }
    else if (button === "CE") {
      this.backspace();
    }
    else {
      this.setState({
        result: this.state.result + button
      })
    }

  }
  calculate = () => {
    var checkResult = ""
    if (this.state.result && this.state.result.includes('--')) {
      checkResult = this.state.result.replace('--', '+')
    }
    else {
      checkResult = this.state.result
    }
    try {
      this.setState({
        // eslint-disable-next-line
        result: eval(checkResult) || ''
      })
    } catch (e) {
      this.setState({
        result: "error"
      })
    }
  }

  reset = () => {
    this.setState({
      result: ''
    })
  }

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  }

  render() {
    console.log("state", this.state.result);
    return (
      <div className="calculator-body">
        <Results result={this.state.result} />
        <Buttons operations={this.onClick} />
      </div>
    );
  }

}

export default Calculate;
