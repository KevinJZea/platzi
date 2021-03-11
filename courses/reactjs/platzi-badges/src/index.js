import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import './global.css';
import App from './components/App';

const container = document.getElementById('app');

ReactDOM.render(<App />, container);

// ReactDOM.render(<Badge 
//     firstName="Kevin J."
//     lastName="Zea"
//     avatarUrl="https://static.platzi.com/media/avatars/avatars/KevinJZea_d77444af-2422-414f-90c4-d371151b8f41.jpg"
//     jobTitle="Front-End Engineer"
//     twitter="kevinjzea"
//     />, container);

