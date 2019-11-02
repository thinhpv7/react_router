import React, { Component } from 'react';
import {Route } from "react-router-dom";
import News from '../Componets/News'
import Home from '../Componets/Home';
import News_Detail from '../Componets/News_Detail';
import Contact from '../Componets/Contact';

class DieuHuongURL extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/tin" component={News} />
                <Route exact path="/tin-tuc/:slug.:id.html" component={News_Detail} />
                <Route exact path="/lien-he" component={Contact} />
                
            </div>
        );
    }
}

export default DieuHuongURL;