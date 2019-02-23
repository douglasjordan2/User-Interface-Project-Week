import React, { Component } from 'react';
import NavLink from './NavLink';
import NavBar from './NavBar';
import PropTypes from 'prop-types'

export default
class Nav extends Component {
  links = [
    {
      id: 1,
      title: 'Home'
    },
    {
      id: 2,
      title: 'About'
    },
    {
      id: 3,
      title: 'Services'
    },
    {
      id: 4,
      title: 'Projects'
    },
    {
      id: 5,
      title: 'Contact'
    }
  ]

  getMenuStyles = () => {
    return ({
      height: '100vh',
      width: '100vw',
      backgroundColor: '#98A4AF',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'fixed',
      bottom: this.props.menuOpen ? '0' : '100vh',
      transition: 'bottom 1.5s ease',
      zIndex: '1'
    })
  }

  renderLinks = () => {
    const bool = this.props.menuOpen;
    console.log('hello')
    return (this.links.map(link => (
      <NavLink 
        key = { this.id } 
        link = { link }
        id = { this.id }
        title = { this.title }
        menuOpen = { bool }
      />
    )))
  }

  render() {
    return (
      <React.Fragment>
        <NavBar
          menuOpen = { this.props.menuOpen }
          openMenu = { this.props.openMenu }
        />
        <div style = { this.getMenuStyles() }>
          { this.renderLinks() }
        </div>
      </React.Fragment>
    )
  }
}

Nav.propTypes = {
  menuOpen: PropTypes.bool.isRequired
}