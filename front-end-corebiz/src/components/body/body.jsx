import React, { Component }  from 'react'

import Card from '../card/card'
import News from '../newsletter/news'
import Footer from '../footer/footer'

import './body.css'

import Slide from '../../img/Slider.png'

export default class Body extends Component {
    render() {
      return (
        <>
            <div className="banner-mobile">
              <div className="banner-content-mobile">
                <h3>Olá, o que você está</h3> 
                <h3> buscando?</h3>
                <h2>Criar ou migrar seu </h2>
                <h2> e-commerce?</h2>
              </div>
              <img className="slider" src={Slide} width="48px" height="7px" /> 
            </div>

            <div className="banner-desktop">
              <div className="banner-content-desktop">
                <h3>Olá, o que você está buscando?</h3>
                <h2>Criar ou migrar seu </h2>
                <h2> e-commerce?</h2>
              </div>
              <img className="slider" src={Slide} width="48px" height="7px" />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="banner-wave">
                <path fill="#000000" fill-opacity="1" d="M0,64L60,74.7C120,85,240,107,360,144C480,181,600,235,720,256C840,277,960,267,1080,218.7C1200,171,1320,85,1380,42.7L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
              </svg>
            </div>

            <Card></Card>
            <News></News>
            <Footer></Footer>
        </>
      );
    }
}