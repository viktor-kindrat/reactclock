import React from "react";
import "./Timer.css"

class Timer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            date: new Date(),
            tick: true
        }
        this.toggleTimer = this.toggleTimer.bind(this)
    }

    componentDidMount (){
        this.timerID = setInterval(()=>{
            this.tick()
        }, 1000)
    }

    componentWillUnmount (){
        clearInterval(this.timerID)
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    toggleTimer(){
        if (this.state.tick){
            clearInterval(this.timerID)
        } else {
            this.timerID = setInterval(()=>{
                this.tick()
            }, 1000)
        }
        this.setState(state => ({
            tick: !state.tick
        }));
    }
    render(){
        return (
            <div className="Timer">
                <h1 className="Timer-headline">Time</h1>
                <span className="Timer-timer">
                    {this.state.date.toLocaleTimeString()}
                </span>
                <button onClick={this.toggleTimer} className="Timer-btn">{this.state.tick ? "Stop" : "Start"}</button>
            </div>
        )
    }
}

export default Timer