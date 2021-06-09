import React, { Component }  from 'react'

import './news.css'

export default class News extends Component {
    render() {
      return (
        <div className="news">
            <h2>Participe de nossas news com promoções e novidades!</h2>
            <form className="form-news">
                <input placeholder="Digite seu nome"></input>
                <input placeholder="Digite seu email"></input>
                <button>Eu quero!</button>
            </form>
        </div>
      );
    }
}