import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';



class Navbar extends React.Component {
    constructor(props) {
        super()
    }
    render() {
        return (
            <div className="navbar">
                <div className="navbar-left">
                
                    <Link to="#" className="links">Home</Link>
                </div>
                <div className="navbar-right">
                    <Link to="/" className="links">Login</Link>
                    <Link to="/register" className="links">Register</Link>
                    <Link to='/game' className="links">Game</Link>
                </div>
            </div>
        )
    }
}
export default Navbar;