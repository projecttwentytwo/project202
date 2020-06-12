import {NavLink} from "react-router-dom";
import {slide as Menu} from "react-burger-menu";
import React, {useState} from "react";

export const BurgerMenu = () => {
    const [open, setOpen] = useState(false)

    return (
        <Menu>
            <NavLink to="/home" className="nav-link" activeClassName="active">Project 202</NavLink>
            <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
            <NavLink to="/philosophy" className="nav-link"
                     activeClassName="active">Philosophy</NavLink>
            <NavLink to="/contact" className="nav-link"
                     activeClassName="active">Contact</NavLink>
        </Menu>
    );
}
