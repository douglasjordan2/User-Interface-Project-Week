import React, { Component } from 'react';
import TopSections from './TopSections';
import LowerSections from './LowerSections';

export default 
class All extends Component {
  topSections = [
    {
      title: 'Smith & Jones Architects',
      info: 'Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem',
      button: 'Learn More',
      id: 1, /* image on right */
      image: require('../../img/home/home-img-1.png'),
      imgAlt: 'Smith and Jones Architecture image'
    },
    {
      title: 'Futuristic Designs',
      info: 'Et sed autem causae appareat, tempor abhorreant te mei, facer facilisis sit ea. Eu timeam vidisse consectetuer sed. Duo etiam laboramus dissentiet in, nec no errem',
      button: 'View Designs',
      id: 2, /* 'image on left' */
      image: require('../../img/home/home-img-2.png'),
      imgAlt: 'futuristic designs image'
    }
  ]

  lowerSections = [
    {
      image: require('../../img/home/home-villas-img.png'),
      overlay: 'THE VILLAS',
      info: <p>The Villas bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.<br/><br/>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>,
      id: 1
    },
    {
      image: require('../../img/home/home-outskirts-img.png'),
      overlay: 'OUTSKIRTS',
      info: <p>The Outskirts are amazing to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.<br/><br/>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>,
      id: 2
    },
    {
      image: require('../../img/home/home-the-blocks-img.png'),
      overlay: 'THE BLOCKS',
      info: <p>The Blocks are amazing to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.<br/><br/>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line.</p>,
      id: 3
    }
  ]

  renderTop = () => {
    return (this.topSections.map(section => (
      <TopSections
          key = { this.id }
          section = { section }
        />
    )))
  }

  renderLower = () => {
    return (this.lowerSections.map(section => (
      <LowerSections 
        key = { this.key }
        section = { section }
      />
    )))
  }

  render() {
    return (
      <div style = { container }>
        { this.renderTop() }
        <h1 style = { h1 }>Recent Projects</h1>
        { this.renderLower() }
      </div>
    )
  }
}

const container = {
  maxWidth: '100vw',
  padding: '0 5vw',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '80px'
}

const h1 = {
  fontSize: '1.5rem',
  width: '100%',
  margin: '40px 0'
}