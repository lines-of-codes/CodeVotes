import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Submit from './Submit';
import Login from './Login';
// import reportWebVitals from './reportWebVitals';

const AppRouter = () => (
  <BrowserRouter>
    <Route exact path="/" component={App} />
    <Route path="/submit" component={Submit} />
    <Route path="/login" component={Login} />
  </BrowserRouter>
)

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
