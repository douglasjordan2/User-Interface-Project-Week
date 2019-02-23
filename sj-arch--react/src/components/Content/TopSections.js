import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default 
class TopSections extends Component {
  
  sectionContainer = (id) => {
    // uses the id to alternate image position so new sections can be added easily
    return ({
      width: '100%',
      height: '100vh',
      display: 'flex',
      flexFlow: (id + 2) % 2 === 1 ? 'row' : 'row-reverse',
      justifyContent: 'space-between',
    })
  }

  render() {
    const { title, info, button, image, imgAlt, id } =  this.props.section
    return (
      <div style = { this.sectionContainer(id) }>
        <div style = { sectionContent }>
          <h1 style = { h1 }>{ title }</h1>
          <p>{ info }</p>
          <div style = { btn }>{ button }</div>
        </div>
        <div style = { imgContainer }>
          <img 
            style = { img }
            src = { image } 
            alt= { imgAlt }
          />  
        </div>        
      </div>
    )
  }
}

const sectionContent = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  width: '40%'
}

const h1 = {
  fontSize: '1.7rem'
}

const btn = {
  border: '1px solid black',
  padding: '10px 20px'
}

const imgContainer = {
  height: '100%',
  width: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const img = {
  width: '100%',
  height: 'auto'
}

TopSections.propTypes = {
  section: PropTypes.object.isRequired
}