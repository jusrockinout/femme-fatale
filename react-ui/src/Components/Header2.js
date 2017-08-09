import React, { Component } from 'react';

class Header extends Component {
  render() {
    if(this.props.data){
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      });
    }
    return (
      <div className="container" id="header3">
      <header id="home">
        <div className="row">
          <div className="col-md-12">
            <nav id="nav-wrap">
              <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                  <li><a className="smoothscroll" href="#about">About</a></li>
                <li><a className="smoothscroll" href="#resume">Resume</a></li>
                  <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                  <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li>
                  <li><a className="smoothscroll" href="#contact">Contact</a></li>
              </ul>

            </nav>
          </div>
        </div>

      {/*<div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">Im {name}.</h1>
            <h3>Im a {city} based <span>{occupation}</span> {description}</h3>
            <hr />
            <ul className="social">
              {networks}
            </ul>
         </div>
      </div>*/}
      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
   </div>
    );
  }
}

export default Header;
