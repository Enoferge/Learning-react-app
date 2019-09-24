import React from 'react';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false
        }
        this.logInOut = this.logInOut.bind(this)
    }

    logInOut() {
        this.setState(prev => {
            return {
                isLoggedIn: !prev.isLoggedIn
            }
        })
    }

    render() {
        let textBtn = this.state.isLoggedIn ?  "LOG OUT" : "LOG IN";
        let textDisplay = this.state.isLoggedIn ?  "Logged in" : "Logged out";
        return (
            <div className="container">
                <button className="customBtn" onClick={this.logInOut}>{textBtn}</button>
                <br/>
                <span>{textDisplay}</span>
            </div>
        )
    }
}

export default App;
