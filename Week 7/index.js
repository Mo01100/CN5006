import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import EmojeeCounter from './EmojeeCounters';
import reportWebVitals from './reportWebVitals';
import Hook_ControlledButtonState from './Counter';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hook_ControlledButtonState />
    <EmojeeCounter pic='Love' /> {/* Pass 'Love' as pic prop */}
    <EmojeeCounter pic='Sad' />  {/* Pass 'Sad' as pic prop */}
    <EmojeeCounter pic='Like' /> {/* Pass 'Like' as pic prop */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
