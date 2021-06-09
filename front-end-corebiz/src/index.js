import React from 'react'
import ReactDom from 'react-dom'

import './index.css'

import Header from './components/header/header'
import Body from './components/body/body'

ReactDom.render(
    <div className="main">
        <Header></Header>
        <Body></Body>
    </div>,
    document.getElementById('root')
)