// Code DigitalClicker Component Here
import React, { Component } from "react";


export default class DigitalClicker extends Component {

    state = {
        timesClicked: 0
    }

    handleClick = () => {
        this.setState(prevState => (
            {
                timesClicked: prevState.timesClicked + 1
            }
        ))
    }

    render() {
        return(
            <div>
                <button onClick={this.handleClick}>{this.state.timesClicked}</button>
            </div>
        )
    }


}