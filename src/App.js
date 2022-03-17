import React, { useState } from "react";
import Statistics from "./components/Feedback/Statistics";
import FeedbackOptions from "./components/Feedback/FeedbackOptions";
import Section from "./components/Feedback/Section";
import Notification from "./components/Feedback/Notification";
import "../src/components/Feedback/Counter.css";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ["good", "neutral", "bad"];

  const handleBtnClick = (e) => {
    const option = e.target.textContent;

    if (option === "good") {
      setGood((prevState) => prevState + 1);
    } else if (option === "neutral") {
      setNeutral((prevState) => prevState + 1);
    } else {
      setBad((prevState) => prevState + 1);
    }
  };
  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage = Math.round(
    (good * 100) / countTotalFeedback
  );

  // const handleBtnClickGood = () => {
  //   setGood((prevState) => prevState + 1);
  // };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} clickHandler={handleBtnClick} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
}
// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleBtnClick = ({ target }) => {
//     const feedbackType = target.dataset.action;
//     this.setState((prevState) => ({
//       [feedbackType]: prevState[feedbackType] + 1,
//     }));
//   };

//   render() {
//     const options = ["good", "neutral", "bad"];
//     const { good, neutral, bad } = this.state;
//     const countTotalFeedback = good + neutral + bad;
//     const countPositiveFeedbackPercentage = Math.round(
//       (good * 100) / countTotalFeedback
//     );

//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={options}
//             clickHandler={this.handleBtnClick}
//           />
//         </Section>
//         <Section title="Statistics">
//           {countTotalFeedback ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={countTotalFeedback}
//               positivePercentage={countPositiveFeedbackPercentage}
//             />
//           ) : (
//             <Notification message="No feedback given" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

// export default App;

//----------------------------------------------------
// import React, { Component } from "react";
// import Statistics from "./components/Feedback/Statistics";
// import FeedbackOptions from "./components/Feedback/FeedbackOptions";
// import Section from "./components/Feedback/Section";
// import Notification from "./components/Feedback/Notification";
// import "../src/components/Feedback/Counter.css";

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   handleBtnClick = ({ target }) => {
//     const feedbackType = target.dataset.action;
//     this.setState((prevState) => ({
//       [feedbackType]: prevState[feedbackType] + 1,
//     }));
//   };

//   render() {
//     const options = ["good", "neutral", "bad"];
//     const { good, neutral, bad } = this.state;
//     const countTotalFeedback = good + neutral + bad;
//     const countPositiveFeedbackPercentage = Math.round(
//       (good * 100) / countTotalFeedback
//     );

//     return (
//       <div>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={options}
//             clickHandler={this.handleBtnClick}
//           />
//         </Section>
//         <Section title="Statistics">
//           {countTotalFeedback ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={countTotalFeedback}
//               positivePercentage={countPositiveFeedbackPercentage}
//             />
//           ) : (
//             <Notification message="No feedback given" />
//           )}
//         </Section>
//       </div>
//     );
//   }
// }

// export default App;
