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
              "placeHolder": "Jon Snow",
              "isRequired": true,
              "autoComplete": "name"
          }, {
            "name": "phoneNumber",
            "type": "number",
            "inputType": "number",
            "title": "Your phone number:",
            "placeHolder": "1234567890",
            "isRequired": true,
            "autoComplete": "number",
            "validators": [
                {
                    "type": "number"
                }
            ]
        }, {
          "name": "zipcode",
          "type": "number",
          "inputType": "number",
          "title": "Your zipcode:",
          "placeHolder": "12345",
          "isRequired": true,
          "autoComplete": "zipcode",
          "validators": [
              {
                  "type": "number"
              }
          ]
      },{
              "name": "email",
              "type": "text",
              "inputType": "email",
              "title": "Your e-mail:",
              "placeHolder": "jon.snow@nightwatch.org",
              "isRequired": true,
              "autoComplete": "email",
              "validators": [
                  {
                      "type": "email"
                  }
              ]
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

  var onCSurveyCompletion = this.state.isCompleted ? (
    <div>You have successfully signed up for DecisiveDining!</div>
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
