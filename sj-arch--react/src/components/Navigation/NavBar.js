import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default
class NavBar extends Component {
  state = {
    openMenuImg: require('../../img/nav-hamburger.png'),
    closeMenuImg: require('../../img/nav-hamburger-close.png') 
  }

  getNavStyle = () => {
    return ({
      backgroundColor: '#98A4AF',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      height: '25px',
      width: '100vw',
      color: 'white',
      zIndex: '3',
      position: 'fixed'
    })
  }

  toggleVisible = () => {
    return ({
      opacity: this.props.menuOpen ? '0' : '1',
      transition: this.props.menuOpen ? 'opacity 1s ease-out' : 'opacity 1s ease-out 1s'
    })
  }

  getSrc = () => {
    return this.props.menuOpen ? this.state.closeMenuImg : this.state.openMenuImg;
  }

  getAlt = () => {
    return this.props.menuOpen ? "menu close" : "menu open";
  }

  render() {
    return (
      <div style = { this.getNavStyle() }>
        <div style = { h1 }>
          <span style = { this.toggleVisible() }>S&J</span>
        </div>
        <div 
          style = { imgContainer }
          onClick = { this.props.openMenu }
        >
          <img
            style = { img } 
            src = { this.getSrc() }
            alt = { this.getAlt() }
          />
        </div>
      </div>
    );
  }
}

// PropTypes
NavBar.propTypes = {
  menuOpen: PropTypes.bool.isRequired
}

const h1 = {
  width: '20%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'white',
  fontSize: '100%',
  height: '25px'
}

const imgContainer = {
  width: '20%',
  height: '25px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const img = {
  cursor: 'pointer',
  maxHeight: '15px',
  maxWidth: '20px',
  zIndex: '2'
}