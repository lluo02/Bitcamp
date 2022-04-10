import React from "react";
import axios from "axios";
  
class App extends React.Component {
    state = {
       name:"",
       zipcode: "",
       phone: "",
       type_of_food: "",
       price_range: "",
       result:""
    };
  
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
  
    handleSubmit = (e) => {
        e.preventDefault();
        fetch("api/", {
          method: 'POST',
          body: JSON.stringify({name: this.state.name, 
          zipcode: parseInt(this.state.zipcode), 
          type_of_food: this.state.type_of_food,
          phone: parseInt(this.state.phone),
          price_range: parseInt(this.state.price_range)}),
          headers: new Headers({
            'Content-Type': 'aapplication/x-www-form-urlencoded',
          })
        }).then(res => res.json()).then(res => this.setState({result: res})).then(console.log(this.state.result))
    
    };
  
    render() {
        return (
            <div className="container jumbotron ">
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text"
                                  id="basic-addon1">
                                {" "}
                                Name{" "}
                            </span>
                        </div>
                        <input type="text" className="form-control" 
                               placeholder="Your name"
                               aria-label="Name"
                               aria-describedby="basic-addon1"
                               value={this.state.name} name="name"
                               onChange={this.handleInput} />
                    </div>
  
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                               Zip Code 
                            </span>
                        </div>
                        <textarea className="form-control " 
                                  aria-label="With textarea"
                                  placeholder="Your zip code" 
                                  value={this.state.zipcode} name="zipcode" 
                                  onChange={this.handleInput}>
                        </textarea>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                               Your preference 
                            </span>
                        </div>
                        <textarea className="form-control " 
                                  aria-label="With textarea"
                                  placeholder="What kind of food do you want?" 
                                  value={this.state.type_of_food} name="type_of_food" 
                                  onChange={this.handleInput}>
                        </textarea>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                               Your price range 
                            </span>
                        </div>
                        <textarea className="form-control " 
                                  aria-label="With textarea"
                                  placeholder="On a scale of 1-4, how expensive do you want?" 
                                  value={this.state.price_range} name="price_range" 
                                  onChange={this.handleInput}>
                        </textarea>
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                               Your phone number 
                            </span>
                        </div>
                        <textarea className="form-control " 
                                  aria-label="With textarea"
                                  placeholder="Your phone number" 
                                  value={this.state.phone} name="phone" 
                                  onChange={this.handleInput}>
                        </textarea>
                    </div>
  
                    <button type="submit" className="btn btn-primary mb-5">
                        Submit
                    </button>
                </form>
  
                <div className="input-group mb-3">
                        <p>
                        Result: {this.state.result}
                        </p>
                
                    </div>
                <hr
                    style={{
                        color: "#000000",
                        backgroundColor: "#000000",
                        height: 0.5,
                        borderColor: "#000000",
                    }}
                />
            </div>
        );
    }
}
export default App;
/*fetch("api/", {
  method: 'post',
  body: {name: 'fpo', 
  zipcode: json.zipcode, 
  type_of_food: json.type_of_food, 
  phone: json.phone},
  headers: new Headers({
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  })
}).then(res => res.json()).then(console.log())
*/