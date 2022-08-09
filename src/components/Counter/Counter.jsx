// import React from 'react';
import { useState } from "react";
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { Notification } from 'components/Notification/Notification';


export default function Counter () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };
  


  function onLeaveFeedback(option) {
    switch (option) {
      case 'good':
        setGood(prevState => prevState + 1);
    break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
          default:
    return
    }
 
  };

 function countTotalFeedback ()  {
   const total = good + neutral + bad;
    return total;
 };
  
  function countPositiveFeedbackPercentage  ()  {
    const total = good + neutral + bad;
    let positive;
    if (total !== 0) {
      positive = ((good / total) * 100).toFixed(0);
    } else {
      positive = 0;
    }
    return positive;
  };

  return (
    <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            option={Object.keys(options)}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>

  )
}
