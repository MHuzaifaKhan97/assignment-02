import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Quiz from './component/Quiz';
import Option from './component/Option';

class App extends Component {

  state = {
    html: ['Q1: HTML stands for?', 'Q2: HTML is a markup language???', 'Q3: HTML is Used for Hacking?', 'Q4: HTML is works on Tags??'],
    javascript: ['Q1: Javascript is which type of language?', 'Q2: Inside which HTML element do we put the JavaScript?', 'Q3: Where is the correct place to insert a JavaScript?', 'Q4 : What is the correct syntax for referring to an external script called "xxx.js"?', 'Q5: How do you write "Hello World" in an alert box?', 'Q6 :How do you create a function in JavaScript?'],
    react: ['Q1 : React merges the object you provide into the current state using ', 'Q2 :JSX is typesafe.', 'Q3 : Lifecycle methods are mainly used for?', 'Q4 : Which of the following needs to be updated to achieve dynamic UI ', 'Q5 : We can go for keys when there is possibility that our user could change the data.?'],
    redux: ['Q1: What are the Benefits of Redux?', 'Q2 : How Distinct from MVC and Flux?', 'Q3 : Redux change of state?'],
    name: ['HTML5', 'JAVASCRIPT', 'REACT', 'REDUX'],
  }
  render() {
    return (
      <Router>
        <div className='text-center'>
          <h1 className='bg-primary p-3 text-white'>React Quiz App</h1>
          {/* <Route exact path='/' render={() => <Welcome />} /> */}
          {/* <Route path='/quiz' render={() => <Quiz course={this.state.javascript} length={this.state.html.length} />} /> */}

          <Route path='/html' render={() => <Quiz name={this.state.name[0]} course={this.state.html} length={this.state.html.length} />} />
          <Route path='/javascript' render={() => <Quiz name={this.state.name[1]} course={this.state.javascript} length={this.state.javascript.length} />} />
          <Route path='/react' render={() => <Quiz name={this.state.name[2]} course={this.state.react} length={this.state.react.length} />} />
          <Route path='/redux' render={() => <Quiz name={this.state.name[3]} course={this.state.redux} length={this.state.redux.length} />} />

          <Route exact path='/' render={() => <Option getLink='/html' getName={this.state.name[0]} />} />
          <Route exact path='/' render={() => <Option getLink='/javascript' getName={this.state.name[1]} />} />
          <Route exact path='/' render={() => <Option getLink='/react' getName={this.state.name[2]} />} />
          <Route exact path='/' render={() => <Option getLink='/redux' getName={this.state.name[3]} />} />


        </div>
      </Router>
    );
  }
}

export default App;
