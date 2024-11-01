import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GreetingElement from './Greeting';
import GreetingElementwithProp from './Greeting_prop';
import reportWebVitals from './reportWebVitals';
import AppColor from './AppbackgroundColor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
<AppColor heading="This is second element" lbl="Name :"color="blue"/>

    <GreetingElement/>
    <GreetingElementwithProp msg='Monday'/>
    <GreetingElementwithProp msg='Tuesday'/>
    <GreetingElementwithProp msg='wednesday'/>
    <GreetingElementwithProp msg='Thursdau'/>
    <GreetingElementwithProp msg='Friday'/>
    <GreetingElementwithProp msg='Saturday'/>
    <GreetingElementwithProp msg='Sunday'/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
