import React, { Component } from "react";
import { footer } from "../../data/data";

class Footer extends Component {
  constructor() {
    super();       
  }  

  render() {
    const { path, alt } = footer.graphic;
  
      return (
        <footer className="main-footer">       
          <div>
            <div className="container-fluid max-width">
              <img className="logo-footer" src={path} alt={alt} />
            </div>
          </div>
        </footer>
      );
  }
}

export default Footer;
