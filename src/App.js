import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './js/util/serviceWorker';

// How you import a CSS file.
import './css/default.css';

//  This is how you import a js Component from another js file in the project.
//  React wants you to create class elements with camel casing. 
import NavBar from './js/comp/NavBar/NavBar';

class App extends Component {
  componentDidMount(){
      //  Just to combat some typography stuff we won't be using anyways.
      //  Ignore this basically.
      window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
  }
  render(){
    return(
      <div>
        {/* VV Here we are adding our component we imported above. Like our own html element basically. */}
        <NavBar /> 
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

//  Mainly for cache usage/reasons 
serviceWorker.unregister();