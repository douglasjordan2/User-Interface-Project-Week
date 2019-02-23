import React, { Component } from 'react';
import Nav from './components/Navigation/Nav';
import Logo from './components/layout/Logo';
import All from './components/Content/All';
import Footer from './components/layout/Footer'

export default
class HomePage extends Component {
  state = {
    menuOpen: false
  }

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    return (
      <div className = "HomePage">
        <div className = "Navigation">
          <Nav 
            menuOpen = { this.state.menuOpen }
            openMenu = { this.toggleMenu }
          />
        </div>

        <div className = "Logo">
          <Logo
            menuOpen = { this.state.menuOpen } 
          />
        </div>

        <div className="Content">
          <All />
        </div>

        <div className="Footer">
          <Footer />
        </div>
      </div>
    );
  }
}