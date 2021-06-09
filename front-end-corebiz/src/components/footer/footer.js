import React, { Component }  from 'react'

import './footer.css'

import LogoMail from '../../img/logo-footer-email.svg'
import LogoPhone from '../../img/logo-footer-phone.svg'
import CorebizLogo from '../../img/footer-logo-corebiz.png'
import LogoVtex from '../../img/footer-logo-VTEX.svg'

export default class Footer extends Component {
    render() {
      return (
        <footer className="footer">
            <div>
                <h3>Localização</h3>
                <h2>_</h2>
                <p>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
                <p>Alphavile SP</p>
                <p>brasil@corebiz.ag</p>
                <p>+55 11 3090 1039</p>
            </div>
            <div className="texto-logo-buttons">
                <button><img src={LogoMail} width="17px" height="20px"  /> ENTRE EM CONTATO</button>
                <button className="phone-button"><img src={LogoPhone} width="17px" height="20px" /> FALE COM O NOSSO CONSULTOR ONLINE</button>
            </div>
            <div className="logo-footer">
                <div>
                    <p className="texto-logo-footer">Created by</p>
                    <img src={CorebizLogo} width="71px" height="18px" />
                </div>
                <div>
                    <p className="texto-logo-footer">Powered By</p>
                    <img src={LogoVtex} width="48px" height="18px" />    
                </div>
                
            </div>

        </footer>
      );
    }
}
