import React, { Component } from 'react';

export default 
class Logo extends Component {
  render() {
    return (
      <div style = { logo }>
        <img 
          style = { img }
          src = { require('../../img/home/home-jumbotron.png')} 
          alt = "logo"
        />
        <div style = { h1 }>
          Integrity, <br/>
          Excellence, <br/>
          Progress <br/>
        </div>
      </div>
    )
  }
}

const logo = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '100vw'
}

const img = {
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100vh'
}

const h1 = {
  position: 'absolute',
  bottom: '10%',
  left: '10%',
  fontSize: '250%',
  zIndex: '0',
  color: 'white'
}