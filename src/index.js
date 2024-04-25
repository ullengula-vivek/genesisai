import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SmoothScroll from 'smooth-scroll';

ReactDOM.render(<App />, document.getElementById('root'));

// Initialize smooth-scroll
new SmoothScroll('a[href*="#"]', {
    speed: 800,
    speedAsDuration: true,
});
