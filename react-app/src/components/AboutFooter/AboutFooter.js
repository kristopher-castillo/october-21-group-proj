import React from 'react';
import "./AboutFooter.css"

const AboutFooter = () => {

    return (

        <div className="footer">
            <div className="follow">
            <p>Follow Us</p>
            {/* <img src="../GitHub-Mark-32px.png" alt="" className="github-logo"></img> */}
            </div>
            <div className="footer-members">
                <div className="footer-item">
                    <a href="https://github.com/kristopher-castillo">Kris Castillo</a>
                </div>
                <div className="footer-item">
                    <a href="https://github.com/a-echeverri">Andres Echeverri</a>
                </div>
                <div className="footer-item">
                    <a href="https://github.com/equan1090">Eric Quan</a>
                </div>
                <div className="footer-item">
                    <a href="https://github.com/blwishom">Blair Wishom</a>
                </div>
            </div>
        </div>

    )
}

export default AboutFooter;
