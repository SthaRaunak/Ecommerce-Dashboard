import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom'
const Nav = () => {
    const auth = localStorage.getItem('user')
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/signup')
    }
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/')
        }
    })
    return (
        <div>
            <img alt='logo' className="logo" src='https://seeklogo.com/images/E/ecom-logo-DF4A3FF5B3-seeklogo.com.png'/>
            {auth ? <ul className="navItems">
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Products</Link></li>
                <li><Link to="/update">Update Products</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name})</Link></li>
            </ul>
                :
                <ul className="navItems nav-right">
                    <li><Link to="/signup">Sign Up</Link></li>
                    <li><Link to="/login">Log In</Link></li>
                </ul>
            }
        </div>
    )
}
export default Nav;