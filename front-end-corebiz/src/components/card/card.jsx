import React  from 'react'

import './card.css'
import FotoSapato from '../../img/image-sapato.png'

export default props =>
    <div className="card-section">
        <h3 className="titulo-card">Mais Vendidos</h3>
        <p className="sublinha-cinza">_</p>

        <div className="cards">
            <div className="card">
                <img src={FotoSapato} width="150px" height="150px" />
                <h4 className="product-name">SAPATO PRETO</h4>
                <div>
                    <p>avaliação</p>
                </div>
                <p>de R$200,00</p>
                <h3>por R$180,00</h3>

                <button>COMPRAR</button>
            </div>

            <div className="card">
                <img src={FotoSapato} width="150px" height="150px" />
                <h4 className="product-name">SAPATO PRETO</h4>
                <div>
                    <p>avaliação</p>
                </div>
                <p>de R$200,00</p>
                <h3>por R$180,00</h3>

                <button>COMPRAR</button>
            </div>

            <div className="card">
                <img src={FotoSapato} width="150px" height="150px" />
                <h4 className="product-name">SAPATO PRETO</h4>
                <div>
                    <p>avaliação</p>
                </div>
                <p>de R$200,00</p>
                <h3>por R$180,00</h3>

                <button>COMPRAR</button>
            </div>

            <div className="card">
                <img src={FotoSapato} width="150px" height="150px" />
                <h4 className="product-name">SAPATO PRETO</h4>
                <div>
                    <p>avaliação</p>
                </div>
                <p>de R$200,00</p>
                <h3>por R$180,00</h3>

                <button>COMPRAR</button>
            </div>
        </div>
    </div>