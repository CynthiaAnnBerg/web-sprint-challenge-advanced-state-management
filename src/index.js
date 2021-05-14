import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

import { createStore } from 'redux';

import { Provider } from 'react-redux';

import Header from './components/Header';
import SmurfList from './components/SmurfList';


import { rootReducer } from './reducers';

const store = createStore(rootReducer);


const { worker } = require('./mocks/browser');
worker.start();


console.log(store.getState());

function App() {
  return (
    <div className="App">
      <Title />
      <SmurfList />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);




const rootElement = document.getElementById("root");

ReactDOM.render(
    <App />, 
    rootElement
);

//Task List:
//1. Add in all necessary components and libary methods.
//2. Create a store that includes thunk and logger middleware support.
//3. Wrap the App component in a react-redux Provider element.



