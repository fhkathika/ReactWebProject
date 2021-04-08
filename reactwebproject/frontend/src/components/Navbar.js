import React, { Component } from 'react';
import logo from '../images/Jenni-Kayne-Logo.svg'
import {FaAlignRight} from 'react-icons/fa'
import {Link} from 'react-router-dom'



class Navbar extends Component {
state={
    isOpen:false
}
handleToggle = () =>{
    this.setState({isOpen:!this.state.isOpen})
}
    render() {
        return (
            <nav className="navbar">
             <div className="nav-center">
             <div className="nav-header">

<Link to ="/">
<img src={logo} alt="Jenni Kayne"/>
</Link>

<button type="button" className="nav-btn"
onClick={this.handleToggle}>
<FaAlignRight className="nav-icon"/>
</button>
             </div>
             <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
<li>
 <Link to="/">Home</Link>
  </li>
<li>
 <Link to="/Account">Account</Link>
</li>


             </ul>
            </div> 
            </nav>
        );
    }
}

export default Navbar;