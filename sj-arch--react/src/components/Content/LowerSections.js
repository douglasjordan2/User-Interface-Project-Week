import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default 
class LowerSections extends Component {

  getOverlayStyle = (id) => {
    // cycles through ids to automatically alternate the position of the text on the image
    return ({
      backgroundColor: '#d8d8d8',
      border: '2px solid white',
      position: 'absolute',
      fontSize: '1.2rem',
      padding: '25px 20px',
      letterSpacing: '5px',
      left: (id + 2) % 2 === 0 ? '-1px' : null,
      right: (id + 2) % 2 === 0 ? null : '-1px',
      bottom: '-30px'
    })
}
  render() {
    const { image, overlay, info, id } = this.props.section
    return (
      <div style = { container }>
        <div style = { imgOverlay }>
          <img style = { img } src = { image } />
          <div style = { this.getOverlayStyle(id) }>{ overlay }</div>
        </div>
        <div style = { infoStyle }>{ info }</div>
      </div>
    )
  }
}

const container = {
  maxWidth: '100%',
}

const imgOverlay = {
  position: 'relative',
  marginBottom: '70px'
}

const img = {
  maxWidth: '100%'
}

const infoStyle = {
  width: '50%',
  margin: '0 auto',
  lineHeight: '2',
  marginBottom: '50px'
}

LowerSections.propTypes = {
  section: PropTypes.object.isRequired
}