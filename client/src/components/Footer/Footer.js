import React from 'react';
import './Footer.css';
import FBLogo from '../images/icons/facebook.png';
import TwLogo from '../images/icons/twitter logo.png';
import InstaLogo from '../images/icons/instagram logo.jpg';

const Footer = () => {
    return(
        <footer className="footer">
            <div className="content">
                <p>Stay connected</p>
                <ul className="socialLinks">
                    <li className="link"><a alt="facebook" href=""><img src={FBLogo} height="32" width="32" /></a></li>
                    <li className="link"><a alt="twitter" href=""><img src={TwLogo} height="32" width="32" /></a></li>
                    <li className="link"><a alt="instagram" href=""><img src={InstaLogo} height="32" width="32" /></a></li>
                </ul>
                <p>&#169; Anti-Corruption Enforcement Agency</p>
            </div>
        </footer>
    );
}

export default Footer;