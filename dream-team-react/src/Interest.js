import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Interest.css";
import NavBar from './NavBar';
export default class Interest extends React.Component {
    render() {
        return(
            <body>
    <div className="container">
        <h1 className="Heading">Your Interests</h1>
        <p className="Paragraph">Select a few of your interests. We'll use it to cater your feed and give updates on events that could interest you!</p>
        <div className='Buttons_Interest'>
            <button id="basketball">Basketball</button>
            <button id="volleyball">Volleyball</button>
            <button id="tennis">Tennis</button>
            <button id="soccer">Soccer</button>
            <button id="football">Football</button>
            <button id="swimming">Swimming</button>
            <button id="running">Running</button>
            <button id="baseball">Baseball</button>
            <button id="golf">Golf</button>
            <button id="hockey">Hockey</button>
            <button id="cycling">Cycling</button>
            <button id="boxing">Boxing</button>
        </div>
        <a href="/major">
            <button className="continue-button">
                Continue
            </button>
        </a>
    </div>
</body>
        )
    }
}