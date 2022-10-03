import React, { Component } from 'react'
import Question from './Question';
import {questions as data} from "./data";

import "./App.css";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      questions: data
    }
  }

  render() {
    return (
      <main>
        <div className="container">
          <h3>Questions and answers about login</h3>
          <section className="info">
            {
              this.state.questions.map((question) => {
                return <Question key={question.key} {...question}></Question>
              })
            }
          </section>
        </div>
      </main>
    )
  }
}
