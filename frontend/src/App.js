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
    defaultThemeColors["$main-color"] = "#5ea4ff"; //used to be orange #e67e2
    defaultThemeColors["$main-hover-color"] = "#ffd119";
    defaultThemeColors["$text-color"] = "#4a4a4a";
    defaultThemeColors["$header-color"] = "#5ea4ff"; //used to be orange #e67e2

    defaultThemeColors["$header-background-color"] = "#4a4a4a";
    defaultThemeColors["$body-container-background-color"] = "#f8f8f8";

Survey
    .StylesManager
    .applyTheme();

    var json = {
      "title": "Decisive Dining",
      "description": "Never have to decide where to dine again! Get a byte to eat without struggling to pick a restaurant!",
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
    }, /*{
      "type": "image",
      "name": "banner",
      "imageLink": "data:image/png;base64,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",
      "imageWidth": "500px",
      "imageHeight": "300px"
  } , */{
    "type": "image",
    "name": "banner",
    "imageLink": "https://bit.camp/assets/img/marshie_blue.png",
    "imageWidth": "500px",
    "imageHeight": "300px"
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
