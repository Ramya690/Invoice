import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
    return (
        <div>
             <nav className="navbar navbar-expand navbar-light bg-light">
                    <ul className="nav navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/catalog">Catalog</Link>
                        </li>
                    </ul>
                </nav>
            
        </div>
    );
}

export default Navbar;