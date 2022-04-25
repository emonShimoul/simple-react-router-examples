import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink
            style={({ isActive }) => {
                return {
                  margin: "1rem 0",
                  color: isActive ? "red" : "",
                };
              }}
            to="/friends">Friends</NavLink>
        </div>
    );
};

export default Header;