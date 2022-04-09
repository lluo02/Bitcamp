import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';
import 'survey-react/survey.css';
import * as Survey from 'survey-react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
    this.onCompleteComponent = this.onCompleteComponent.bind(this)
  }
  onCompleteComponent = () => {
    this.setState({
      isCompleted: true
    })
  }

  render() {

    var json = {
      "elements": [
          {
              "name": "name",
              "type": "text",
              "title": "Please enter your name:",
              "placeHolder": "first name",
              "isRequired": true,
              "autoComplete": "name"
          }, {
            "name": "phoneNumber",
              "type": "text",
              "title": "Please enter your phone number:",
              "placeHolder": "9999999999",
              "isRequired": true,
              
        }, {
          "name": "zipcode",
          "type": "text",
          "title": "Please enter your zipcode:",
          "placeHolder": "12345",
          "isRequired": true,
          "autoComplete": "name"
      }
      ]
  };

  
  var surveyRender = !this.state.isCompleted ? (
    <Survey.Survey 
      json={json}
      showCompletedPage={false}
      onComplete={this.onCompleteComponent}
    />
  ) : null

  var onSurveyCompletion = this.state.isCompleted ? (
    <div>You have successfully signed up for DecisiveDining! You will be recieving a text shorlty :) </div>
  ) : null;


  return (
    <div className="App">
     <div>
       {surveyRender}
       {onSurveyCompletion}
     </div>
    </div>
  );
}
}
export default App;
