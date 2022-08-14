import React from 'react';
import {Feedback} from '../Feedback/Feedback';
import {Statistics} from '../Statistics/Statistics';


class ExpressoCafeFeedbac extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad:0,
    };

    handleNeutral =() =>{
        this.setState({
            neutral: this.state.neutral + 1,
        });
    };

    handleBad =() =>{
        this.setState({
            bad: this.state.bad + 1,
        });
    };

    handleGood =() =>{
        this.setState({
            good: this.state.good + 1,
        });
    };

    totalFeedback =() => {
        const {good, neutral, bad} = this.state;
        return good + neutral + bad;
    };

    positivePercentage = () => {
        return parseInt((this.state.good / this.totalFeedback()) * 100);
    };

    render () {
        return (
            <div>
                <Feedback
                handleGood = {this.handleGood}
                handleNeutral = {this.handleNeutral}
                handleBad = {this.handleBad}
                /> 
            
                {this.totalFeedback() ? (
                    <Statistics
                    good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad}
                    total={this.totalFeedback()}
                    pisitivePercentage={this.positivePercentage()}
                    />
                ) : (<p className='no__feedback'>There is no feedback</p>)}
            </div>
        )
    }

}

export default ExpressoCafeFeedbac;