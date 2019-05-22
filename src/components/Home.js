import React, { Component } from 'react';
import '../styles/Home.css';

class Home extends Component {
    render() {
        return (
            <div className="homeContainer">
                <img src={require('../img/7.jpg')} alt="Los Angeles" width="1100" height="400" />
                <hr></hr>
                <h5 className="closeStation">The closest station</h5>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41102.24525181623!2d23.96580183334494!3d49.82464885787876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x40aaf233f3deb031!2z0JHQoNCh0Jwg0J3QsNGE0YLQsA!5e0!3m2!1sru!2sua!4v1558457336388!5m2!1sru!2sua"
                    width="1100" height="200" frameborder="0" allowfullscreen>
                </iframe>
            </div>
    );
}
}
export default Home;
