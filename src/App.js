import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles.css';

const App = () => {
    return (
        <div className="app">
            <Header />
            <section id="home">
                <div className="genesis-section-content">
                    <h2>Genesis <span id='ai'>AI</span></h2>
                    <div class="typing-text">
                    <p id="typing"></p>
</div>

<div class="typing-text">
  <p id="typing"></p>
</div>
          </div>
            </section>
            <section id="about">
            <div className='aboutus'>
            <h3>Discover our creations!</h3>
            <h2>Creative, Dynamic and Customisable Website Designs</h2>
            </div>
  <div class="image-gallery">
  <div class="image-container">
    <img src="/images/s1.jpg" alt="1"/>
  </div>
  <div class="image-container">
    <img src="/images/s2.jpg" alt="2"/>
  </div>
  <div class="image-container">
    <img src="/images/s3.jpg" alt="2"/>
  </div>
  <div class="image-container">
    <img src="/images/s4.jpg" alt="2"/>
  </div>
  <div class="image-container">
    <img src="/images/s5.jpg" alt="2"/>
  </div>
  <div class="image-container">
    <img src="/images/s6.jpg" alt="2"/>
  </div>
  <div class="image-container">
    <img src="/images/s7.jpg" alt="2"/>
  </div>
</div>
            </section>
            <section id="services">
                <div className="section-content">
                    <h2 className='heading'>Why us!</h2>
                    <h3>We don't stop at website creation; we enhance your services with added value..</h3>
                </div>
                <div class="grid-container">
  <div class="image-container">
    <img src="/images/why.jpg" alt="why"/>
  </div>
  <div class="text-container">
    <h2>Responsive Web Design</h2>
    <p>All our sites are mobile-responsive, perfectly adjusting to screens on any mobile or tablet device.</p>
    <h2>Security Assurance</h2>
    <p>Our experts consistently update, back up, and maintain the sites</p>
    <h2>SEO Friendly</h2>
    <p>All our sites are search engine-friendly and globally recognized, helping you gain recognition quickly</p>
    <h2>Speedy Delivery (7 days)</h2>
    <p>Receive your initial draft in just 5 days! We work tirelessly to ensure such rapid delivery. (Terms & Conditions Apply)</p>
    <h2>User Friendly Backend</h2>
    <p>With user-friendly plugins and builder systems, editing becomes effortless.</p>
    <h2>Web Maintenance Tutorial</h2>
    <p>Never fret future updates on your site as we will show show you how</p>
  </div>
</div>

            </section>
            <Footer />
        </div>
    );
}

export default App;
