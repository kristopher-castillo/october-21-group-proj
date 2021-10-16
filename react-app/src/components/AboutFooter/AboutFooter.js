import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import "./AboutFooter.css"

const AboutFooter = () => {

    return (

        <div className="footer">
            <div className="follow">
                <p>Follow Us</p>
                <img src="../GitHub-Mark-32px.png" alt=""></img>
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
        </div>
        
    )
}
// .follow
// p Follow Us
// img.logo(src="../images/GitHub-Mark-Light-32px.png")
// .footer-members
//   p.footer-item
//       a(target="_blank" href="https://github.com/StevenBarnett1") Steven Barnett
//   p.footer-item
//       a.footer-item(target="_blank" href="https://github.com/boromeot") Kekoa Boromeo
//   p.footer-item
//       a.footer-item(target="_blank" href="https://github.com/Vazhac") Vazha Chiaberashvili
//   p.footer-item
//       a.footer-item(target="_blank" href="https://github.com/a-echeverri") Andres Echeverri
// .footer-year Snack Overflow - App Academy 2021

export default AboutFooter;