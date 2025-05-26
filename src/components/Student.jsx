import React from 'react';
import { Link } from 'react-router-dom';

const StudentsLifeBlock = () => {
  return (
    <section id="students-life-block" className="students-life-block section">

      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Students Life</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row align-items-center gy-4">
          
          {/* Image Block */}
          <div className="col-lg-6" data-aos="fade-right" data-aos-delay="200">
            <div className="students-life-img position-relative">
              <img
                src="src/assets/img/education/education-square-11.webp"
                className="img-fluid rounded-4 shadow-sm"
                alt="Students Life"
              />
              <div className="img-overlay">
                <h3>Discover Campus Life</h3>
                <Link to="/students-life" className="explore-btn text-decoration-none">
                  Explore More <i className="bi bi-arrow-right "></i>
                </Link>
              </div>
            </div>
          </div>

          {/* Content Block */}
          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
            <div className="students-life-content">
              <div className="row g-4 mb-4">
                
                <div className="col-md-6" data-aos="zoom-in" data-aos-delay="200">
                  <div className="student-activity-item">
                    <div className="icon-box">
                      <i className="bi bi-people"></i>
                    </div>
                    <h4>Student Clubs</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam purus.</p>
                  </div>
                </div>

                <div className="col-md-6" data-aos="zoom-in" data-aos-delay="300">
                  <div className="student-activity-item">
                    <div className="icon-box">
                      <i className="bi bi-trophy"></i>
                    </div>
                    <h4>Sports Events</h4>
                    <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                  </div>
                </div>

                <div className="col-md-6" data-aos="zoom-in" data-aos-delay="400">
                  <div className="student-activity-item">
                    <div className="icon-box">
                      <i className="bi bi-music-note-beamed"></i>
                    </div>
                    <h4>Arts & Culture</h4>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                  </div>
                </div>

                <div className="col-md-6" data-aos="zoom-in" data-aos-delay="500">
                  <div className="student-activity-item">
                    <div className="icon-box">
                      <i className="bi bi-globe-americas"></i>
                    </div>
                    <h4>Global Experiences</h4>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.</p>
                  </div>
                </div>

              </div>

              <div className="students-life-cta" data-aos="fade-up" data-aos-delay="600">
                <Link to="/students-life" className="btn btn-primary">
                  View All Student Activities
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default StudentsLifeBlock;
