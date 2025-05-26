import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
const Hero = () => {
  return (
    <section id="hero" className="hero section dark-background">
      <div className="hero-container">
        <video autoPlay muted loop playsInline className="video-background">
          <source src="src/assets/img/education/video-2.mp4" type="video/mp4" />
        </video>
        <div className="overlay"></div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7" data-aos="zoom-out" data-aos-delay="100">
              <div className="hero-content">
                <h1>Empowering Futures Through Education</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam ornare, imperdiet est eget, pretium augue. Nullam auctor felis in nibh gravida, eu viverra risus egestas.</p>
                <div className="cta-buttons">
                  <Link to="#" className="btn-primary">Start Your Journey</Link>
                  <Link to="#" className="btn btn-dark">Discover Programs</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5" data-aos="zoom-out" data-aos-delay="200">
              <div className="stats-card">
                <div className="stats-header">
                  <h3>Why Choose Us</h3>
                  <div className="decoration-line"></div>
                </div>
                <div className="stats-grid">
                  <div className="stat-item">
                    <div className="stat-icon">
                      <i className="bi bi-trophy-fill"></i>
                    </div>
                    <div className="stat-content">
                      <h4>98%</h4>
                      <p>Graduate Employment</p>
                    </div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-icon">
                      <i className="bi bi-globe"></i>
                    </div>
                    <div className="stat-content">
                      <h4>45+</h4>
                      <p>International Partners</p>
                    </div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-icon">
                      <i className="bi bi-mortarboard"></i>
                    </div>
                    <div className="stat-content">
                      <h4>15:1</h4>
                      <p>Student-Faculty Ratio</p>
                    </div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-icon">
                      <i className="bi bi-building"></i>
                    </div>
                    <div className="stat-content">
                      <h4>120+</h4>
                      <p>Degree Programs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="event-ticker">
        <div className="container">
          <div className="row gy-4">
            <div className="col-md-6 col-xl-4 col-12 ticker-item">
              <span className="date">NOV 15</span>
              <span className="title">Open House Day</span>
              <Link to="#" className="btn-register text-decoration-none">Register</Link>
            </div>
            <div className="col-md-6 col-12 col-xl-4 ticker-item">
              <span className="date">DEC 5</span>
              <span className="title">Application Workshop</span>
              <Link to="#" className="btn-register text-decoration-none">Register</Link>
            </div>
            <div className="col-md-6 col-12 col-xl-4 ticker-item">
              <span className="date">JAN 10</span>
              <span className="title">International Student Orientation</span>
              <Link to="#" className="btn-register text-decoration-none">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
