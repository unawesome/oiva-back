import * as React from "react";



export default class SingleQuestion extends React.Component {
  state = {};

  componentDidMount() {
    fetch(
      `http://168.63.52.92:3000/api/question/${this.props.match.params.questionId}/set,subset`,
      {}
    )
      .then(res => {
        return res.json();
      })
      .then(data => {
        const questionsData = data;
        console.log(questionsData);
        this.setState({ questionsData });

        console.log(this.state);
      });
  }

  printQuestion() {
    if (this.state.hasOwnProperty("questionsData")) {
      return (
        <div>
          <h4>{this.state.questionsData.api.set.set_letter.toUpperCase()}) {this.state.questionsData.api.set.set_content}</h4>
          <h3>{this.state.questionsData.api.subset.subset_number}. {this.state.questionsData.api.subset.subset_content}</h3>
          <h2>{this.state.questionsData.api.question.question_letter}. {this.state.questionsData.api.question.question_content}</h2>
        </div>
      );
    } else {
      return <div>Ladataan...</div>;
    }
  }

  render() {
    return ( this.printQuestion(); );
  }
}
