import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './component/Navbar';
import Main from './component/Main';

function App() {

    return (
        <div>
          <Navbar />
          <Main />
        </div>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
)

reportWebVitals();
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

