import React from 'react';
import { Button, Input } from '@material-ui/core';
import STYLES from './App.scss';


const c = className => STYLES[className] || 'UNKNOWN';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mainInputValue: "",
    };
  }

  handlePost(data){
    alert(data["postOutput"]);
  }

  handleChange (e) {
    this.setState({mainInputValue: e.target.value});
  }

  handleSubmit () {
    fetch('http://localhost:5000/next', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "mainInputValue": this.state.mainInputValue,
        }),
    })
    .then(response => response.json())
    .then(data => this.handlePost(data));
  }

  render () {
    return (
      <div>
        <Input
          id="mainInput"
          type="text"
          className ={c('App')}
          name="mainInput"
          value={this.state.mainInputValue}
          onChange={(e) => {this.handleChange(e)}}
          placeholder="Type ANYTHING"
        />
        <Button variant="contained" color="primary" onClick={this.handleSubmit.bind(this)}>
          Submit
        </Button>
      </div>
    )
  }
}

export default Main;
