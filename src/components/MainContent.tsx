import React from "react";
import {HeaderMenu} from "./header/HeaderMenu";
import {Footer} from "./footer/Footer";
import {Route, Switch} from "react-router-dom";
import {Contact} from "../pages/contact/Contact";
import {About} from "../pages/about/About";
import {Philosophy} from "../pages/philosophy/Philosophy";
import {Home} from "../pages/home/Home";

export const MainContent = () => {
    return (
        <div>
            <HeaderMenu/>
            <main>
                <Switch>
                    <Route path="/contact">
                        <Contact/>
                    </Route>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/philosophy">
                        <Philosophy/>
                    </Route>
                    <Route path="/home">
                        <Home/>
                    </Route>
                </Switch>
            </main>
            <Footer/>
        </div>
    );
}