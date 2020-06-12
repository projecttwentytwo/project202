import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {MainVideo} from "./pages/mainvideo/MainVideo";
import {MainContent} from "./components/MainContent";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <MainVideo/>
                </Route>
                <MainContent/>
            </Switch>
        </Router>
    );
}

export default App;
