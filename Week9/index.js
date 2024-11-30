import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FacebookEmojiCounter from './facebookemoji';
import ToggleMode from './togglemodecomponent';
const root = ReactDOM.createRoot(document.getElementById('root'));

//--for facebookemoji.js remove ToggleMode and replace with the below line.
//<FacebookEmojiCounter type = 'happy' />  
root.render(
  <React.StrictMode>

    <FacebookEmojiCounter type = 'love' />
    <FacebookEmojiCounter type = 'like' />
    <ToggleMode />
  </React.StrictMode>
);


reportWebVitals();
