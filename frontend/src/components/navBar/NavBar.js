import React from "react";
import logo from '../../images/logo.png';


const NavBar = () => {
    return (     
       <header className="header-section" style={{background: "#ffffff"}}>
            <nav className="">
                <div>
                    <div className="col d-flex justify-content-center">
                        <a className="navbar-brand" href="#">
                            <img src={logo} alt="Logo" width="45" height="45" className="d-inline-block align-text-top" />
                        </a> 
                    </div>
                    <div className="col d-flex justify-content-center">
                        <div>
                                <h3>Employee Portal</h3>
                        </div>
                    </div>
                </div>   
            </nav>
            {/* <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Add Users</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Upload File</a>
                </li>
            </ul>   */}
        </header>
     );
}
 
export default NavBar;