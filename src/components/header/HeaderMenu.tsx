import React, {useState} from "react";
import './HeaderMenu.scss';
import {Link, NavLink} from "react-router-dom";
import {
    isMobile
} from "react-device-detect";
import {BurgerMenu} from "./BurgerMenu";

export const HeaderMenu = () => {

    return (
        <>
            {
                !isMobile &&
                <nav>
                    <div className="main-menu">
                        <NavLink to="/home" className="nav-link title" activeClassName="active">Project 202</NavLink>
                        <div className="spacer"/>
                        <NavLink to="/about" className="nav-link" activeClassName="active">About</NavLink>
                        <NavLink to="/philosophy" className="nav-link" activeClassName="active">Philosophy</NavLink>
                        <NavLink to="/contact" className="nav-link" activeClassName="active">Contact</NavLink>
                    </div>
                </nav>
            }
            {
                isMobile &&
                <>
                    <BurgerMenu/>
                    <div className="mobile-wrapper">
                        <div className="title">
                            Project 202
                        </div>
                    </div>
                </>
            }
        </>
    );
}