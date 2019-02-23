import React from 'react';

export default
function Footer() {
  return (
    <div style = { footer }>
      <div style = { contact }>
        <span>Interested in startiing a project?<br/>Let's talk:</span>
        <input
          style = { email }
          type = "email"
          placeholder = "Enter email"
        />
        <span style = { under }>We'll never share your email with anyone else.</span>
      </div>
      <div style = { location }>
        <span style = { locationName }>New York</span>
        <p style = { address }>
          123 Lane<br/>
          Suite 100<br/>
          Albany, NY 12345<br/>
          202 555 0144
        </p>
      </div>
      <div style = { location }>
        <span style = { locationName }>Florida</span>
        <p style = { address }>
          Ocean Drive<br/>
          Suite 201<br/>
          Orlando, FL 22345<br/>
          502 555 0144
        </p>
      </div>
      <div style = { location }>
        <span style = { locationName }>California</span>
        <p style = { address }>
          Mountain Street<br/>
          Suite 105<br/>
          San Diego, CA 22345<br/>
          702 555 0144
        </p>
      </div>
      <div style = { copyright }>
        <span>Copyright © 2018 Smith and Jones</span>
      </div>
    </div>
  )
}

const footer = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  maxWidth: '80vw',
  margin: '0 auto',
  backgroundColor: '#828282',
  color: 'white',
  padding: '50px 50px 0 50px'
}

const contact = {
  padding: '0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  fontSize: '1.2rem',
  lineHeight: '1.3'
}

const email = {
  fontSize: '1rem',
  opacity: '0.8',
  width: '100%',
  padding: '5px 2px',
  border: '0',
  borderRadius: '2px',
  margin: '6% 0 3% 0'
}

const under = {
  fontSize: '0.7rem',
}

const location = {
  
}

const locationName = {
  fontSize: '1.1rem',
}

const address = {
  fontSize: '0.8rem',
  lineHeight: '1.7'
}

const copyright = {
  width: '100%',
  textAlign: 'center',
  fontSize: '0.7rem',
  paddingTop: '30px'
}