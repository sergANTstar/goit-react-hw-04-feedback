import React from 'react';
import { useState } from 'react';
import {Feedback} from '../Feedback/Feedback';
import {Statistics} from '../Statistics/Statistics';


export function ExpressoCafeFeedbac() {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];
  
    const totalFeedback =() => {
        return good + neutral + bad;
    };

    const positivePercentage = () => {
        return good ? Math.round((good / totalFeedback()) * 100) : 0;
  };

    const handleFeedback = e => {
        switch (e.currentTarget.name) {
          case 'good':
            setGood(good + 1);
            break;
          case 'neutral':
            setNeutral(neutral + 1);
            break;
          case 'bad':
            setBad(bad + 1);
            break;
          default:
            return;
        }
      };


        return (
            <div>
                <Feedback
                    options={options}
                    onLeaveFeedback={handleFeedback}
                /> 
            
                {totalFeedback() > 0 ? (
                    <Statistics
                    good={good}
                    neutral={neutral}
                    bad={bad}
                    total={totalFeedback()}
                    pisitivePercentage={positivePercentage()}
                    />
                ) : (<p>There is no feedback</p>)}
            </div>
        )
}

