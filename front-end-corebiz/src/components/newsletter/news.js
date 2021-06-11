import React, { Component }  from 'react'
import ReactDOM from 'react-dom'

import api from '../../services/api'

import './news.css'

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      isRegister: false 
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeName(event) {
    this.setState({name: event.target.value});
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  handleSubmit = event => {
    event.preventDefault();

    api.post('newsletter',{
      'email': this.state.email,
      'name': this.state.name
    })
    .then(res => {
      this.state.isRegister ? ReactDOM.render(
        <div className="news" id="section-news">
          <h2>Participe de nossas news com promoções e novidades!</h2>
          <form className="form-news" onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Digite seu nome" value={this.state.name} onChange={this.handleChangeName}></input>
            <input type="email" name="email" placeholder="Digite seu email" value={this.state.email} onChange={this.handleChangeEmail} ></input>
            <button type="submit">Eu quero!</button></form></div>,  document.getElementById('section-news')
      ) : ReactDOM.render(
        <div className="news" id="section-news">
          <p className="email-confirmation-text">Seu e-mail foi cadastrado com sucesso!</p>
          <p className="email-confirmation-sub-text">A partir de agora você receberá as novidades e ofertas exclusivas.</p>
          <form className="form-news" onSubmit={window.location.reload}>
            <button type="submit">Cadastrar novo e-mail</button>
          </form>
        </div>, document.getElementById('section-news')
      );
      
      this.state.isRegister = !this.state.isRegister
    })
  }

  render() {
    return (
      <div className="news" id="section-news">
            <h2>Participe de nossas news com promoções e novidades!</h2>
            <form className="form-news" onSubmit={this.handleSubmit}>
              <input type="text" placeholder="Digite seu nome" value={this.state.name} onChange={this.handleChangeName}></input>
              <input type="email" name="email" placeholder="Digite seu email" value={this.state.email} onChange={this.handleChangeEmail} ></input>
              <button type="submit">Eu quero!</button>
            </form>
        </div>
    );
  }
}

