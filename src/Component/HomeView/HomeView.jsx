import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import './HomeView.scss';
import IntroText from './IntroText/IntroText';
import Connect from './Connect/Connect';
export default class HomeView extends Component {
  render() {
    return (
      <div className="hero">
        <IntroText />
        <Connect />
      </div>
    );
  }
}
