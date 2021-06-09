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
                <h3>Olá, o que você está buscando?</h3>
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
            </div>

            <Card></Card>
            <News></News>
            <Footer></Footer>
        </>
      );
    }
}