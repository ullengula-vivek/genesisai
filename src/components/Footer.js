import React from 'react';
import { FaWhatsapp} from 'react-icons/fa';
import "../styles.css"

const Footer = () => {
    return (
        <footer id='contact'>
            <h2>Ping us today...</h2>
            <div className="social-icons">
            <div class="footer">
  <a href="https://wa.me/8977035004" target="_blank" rel="noopener noreferrer" class="whatsapp-icon">
<FaWhatsapp className='whatsapp' />
            </a>
            </div>          
              </div>
            <p>&copy; 2024 Genesis AI Innovations</p>
        </footer>
    );
}

export default Footer;
