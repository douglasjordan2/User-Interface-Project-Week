import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default 
class NavLink extends Component {

  getNavLinkStyle(id) {
    return ({
      fontSize: '2rem',
      color: 'white',
      marginTop: this.props.menuOpen ? '0' : '20px',
      opacity: this.props.menuOpen ? '1' : '0',
      transition: this.props.menuOpen ? `margin-top 1s ease ${(id + 1) / 5}s, opacity 1.5s ease ${id / 5}s` : 'all 0s 1s'
    })
  }

  render() {
    const { id, title } = this.props.link
    return (
      <span 
        style = { this.getNavLinkStyle(id) }
      >
        { title }
      </span>
    )
  }
}

NavLink.propTypes = {
  link: PropTypes.object.isRequired
}