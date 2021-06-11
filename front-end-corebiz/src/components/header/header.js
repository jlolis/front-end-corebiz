import React, { Component }  from 'react'
import ReactDOM from 'react-dom';
import Cookies from 'universal-cookie';

import './header.css'

import MenuIcon from '../../img/menu-Icon.svg'
import MainLogo from '../../img/main-logo.png'
import MainLogoDesktop from '../../img/main-logo-desktop.png'
import ShopIcon from '../../img/shop-icon.png'
import SearchIcon from '../../img/search-icon.png'
import LogoUser from '../../img/logo-user.png'

const cookies = new Cookies();

let cookie = cookies.get('cartProduct') ? cookies.get('cartProduct') : '0' ;

export default class Header extends Component {
    render() {
        return (
            <header>
                <div className="header-mobile">
                    <div className="header-line-1">
                        <img src={MenuIcon} width="22px" height="15px" />
                        <img src={MainLogo} width="100px" height="25px" />
                        <div className="user-section">
                            <img src={ShopIcon} width="18px" height="18px" />
                            <p className="num-cart">{cookie}</p>
                        </div>
                    </div>

                    <form className="header-line-2">
                        <input placeholder="O que está procurando?"></input>
                        <img src={SearchIcon} width="18px" height="18px" />
                    </form>
                </div>

                <div className="header-desktop">
                
                    <img src={MainLogoDesktop} width="170px" height="41px" />

                    <form className="search-bar">
                        <input placeholder="O que está procurando?"></input>
                        <img src={SearchIcon} width="18px" height="18px" />
                    </form>

                    <div className="user-section">
                        <img className="header-user-logo" src={LogoUser} width="18px" height="18px" />
                        <a>Minha conta</a>
                        <img src={ShopIcon} width="18px" height="18px" />
                        <div id="cart-itens"><p className="num-cart">{cookie}</p></div>
                    </div>

                </div>

            </header>
        );
    }
}
