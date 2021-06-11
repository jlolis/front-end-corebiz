import React, { Component }  from 'react'
import Cookies from 'universal-cookie';

import api from '../../services/api'

import './card.css'

import OneStar from '../../img/rate-1-star.png'
import TwoStar from '../../img/rate-2-star.png'
import ThreeStar from '../../img/rate-3-star.png'
import FourStar from '../../img/rate-4-star.png'
import FiveStar from '../../img/rate-5-star.png'

const cookies = new Cookies();

class Card extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
        this.clickBuy = this.clickBuy.bind(this);
    }
    
    async componentDidMount() {
        const response = await api.get('products');
        this.setState({ products: response.data });
    }

    clickBuy(){
        let cookie = cookies.get('cartProduct') ? cookies.get('cartProduct') : '0' ;
        cookie = parseInt(cookie) + 1;
        cookies.set('cartProduct', cookie , { path: '/' });
        window.location.reload();
    }

    render() {

        const { products } = this.state;

        return (
            <>
            <div className="card-section">
                <h3 className="titulo-card">Mais Vendidos</h3>
                <p className="sublinha-cinza">_</p>

                <div className="cards">
                    {products.map(product => (
                        
                            <div className="card">
                                <img src={product.imageUrl} width="132px" height="122px" />
                                <h4 className="product-name">{product.productName}</h4>
                                <div className="rating-section">
                                    {product.stars == 1 && <img src={OneStar} width="63px" height="10px" /> }
                                    {product.stars == 2 && <img src={TwoStar} width="63px" height="10px" /> }
                                    {product.stars == 3 && <img src={ThreeStar} width="63px" height="10px" /> }
                                    {product.stars == 4 && <img src={FourStar} width="63px" height="10px" /> }
                                    {product.stars == 5 && <img src={FiveStar} width="63px" height="10px" /> }
                                </div>

                                {
                                    product.listPrice != null && 
                                    <>
                                        <p className="preco-old">de R$ {String(parseFloat(product.listPrice / 100).toFixed(2))} </p>
                                        <div className="ofert-flag"><p>OFF</p></div>
                                    </>
                                }
                                {
                                    product.listPrice == null && <p className="mascara-preco-old"> 0 </p>
                                }
                                
                                <h3 className="final-price">por R$ {String(parseFloat(product.price / 100).toFixed(2))}</h3>

                                <button onClick={this.clickBuy}>COMPRAR</button>
                            </div>
                    ))}
                </div>
            </div> 
            </>
        );
    };
};

export default Card;


