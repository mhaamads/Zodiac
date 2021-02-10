import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import './Card.css';
import 'tachyons';
import App from './App';
import { BrowserRouter,Route,Switch } from "react-router-dom";
import ZodiacInfo from './ZodiacInfo';
import Notfound from './Notfound';
ReactDOM.render(
  <React.StrictMode>
    <div>
      <BrowserRouter>
      <Switch>
      <Route exact path="/" component={App}/>
      <Route exact path="/Zodiac" component={App}/>
      <Route path ="/Info" component={ZodiacInfo}/>
      <Route component={Notfound}/>
      </Switch>
      </BrowserRouter>
    </div>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
