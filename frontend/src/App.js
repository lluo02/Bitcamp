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

    var defaultThemeColors = Survey
    .StylesManager
    .ThemeColors["default"];
    defaultThemeColors["$main-color"] = "#e67e29";
    defaultThemeColors["$main-hover-color"] = "#ffd119";
    defaultThemeColors["$text-color"] = "#4a4a4a";
    defaultThemeColors["$header-color"] = "#e67e29";

    defaultThemeColors["$header-background-color"] = "#4a4a4a";
    defaultThemeColors["$body-container-background-color"] = "#f8f8f8";

Survey
    .StylesManager
    .applyTheme();

    var json = {
      "title": "Decisive Dining",
      "description": "Never have to decide where to dine again!",
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
        }, {
          "type": "dropdown",
          "name": "cuisine",
          "title": "What type of food do you want?",
          "isRequired": true,
          "colCount": 0,
          "hasNone": true,
          "choices": [
              "Chinese",
              "Fast food",
              "Italian",
              "Korean",
              "Mexican",
              "Vegan",
              "Vietnamese"
          ]
      }, {
        "type": "radiogroup",
        "name": "price",
        "title": "What is your budget?",
        "isRequired": true,
        "colCount": 4,
        "choices": [
            "$",
            "$$",
            "$$$",
            "$$$$"
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

  var onSurveyCompletion = this.state.isCompleted ? (
    <div>You have successfully signed up for Decisive Dining! You will recieve a recommendation shorlty :) </div>
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
