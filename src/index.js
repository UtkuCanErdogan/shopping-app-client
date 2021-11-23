import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

localStorage.setItem("Auth", false);

ReactDom.render(
    <React.StrictMode>
        <div><App /></div>
    </React.StrictMode>,
    document.getElementById('root')
);