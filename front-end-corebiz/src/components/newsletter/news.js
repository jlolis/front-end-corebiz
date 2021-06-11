import React, { Component }  from 'react'

import api from '../../services/api'
import './news.css'

export default class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      data: '',
      isLoading: false,
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
      alert('Email ' + this.state.email + ' cadastrado com sucesso!')
    })
  }

  render() {
    return (
      <div className="news">
            <h2>Participe de nossas news com promoções e novidades!</h2>
            <form className="form-news" onSubmit={this.handleSubmit}>
              <input type="text" placeholder="Digite seu nome" value={this.state.name} onChange={this.handleChangeName}></input>
              <input type="text" placeholder="Digite seu email" value={this.state.email} onChange={this.handleChangeEmail} ></input>
              <button type="submit">Eu quero!</button>
            </form>
        </div>
    );
  }
}