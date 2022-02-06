import React, { Component } from 'react';
import Section from './components/section/Section';
import FeedbackOptions from './components/feedbackOptions/FeedbackOptions';
import Statistics from './components/statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = e => {
    const value = e.target.name;
    console.log(value);

    this.setState(prevState => ({
      [value]: prevState[value] + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const totalCount = bad + neutral + good;
    return totalCount;
  };
  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    return ((good / this.countTotalFeedback()) * 100).toFixed(0);
  }

  render() {
    const { good, bad, neutral } = this.state;
    const options = Object.keys(this.state);
    return (
      <Section titel="Please leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.handleFeedback}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </Section>
    );
  }
}
