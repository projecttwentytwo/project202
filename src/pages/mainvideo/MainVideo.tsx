import skating_video from "../../assets/video.mp4";
import Logo from "../../assets/images/Logo.png";
import React from "react";
import {Link} from "react-router-dom";
import './MainVideo.scss'

export const MainVideo = () => {
    return (
        <div>
            <div className="container">
                <video id="background-video" loop autoPlay muted>
                    <source src={skating_video} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <div className="overlay">
                    <div className="logo"><img src={Logo} alt="Logo"/></div>
                    <div>
                        <Link to="/home">
                            <div className="enter-now">{">>>"} Enter now {"<<<"}</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}