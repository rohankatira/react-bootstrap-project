import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import PureCounter from "@srexi/purecounterjs";
import signature from "../assets/img/misc/signature-1.webp"
import campus from "../assets/img/education/campus-4.webp"
import student from "../assets/img/education/students-2.webp"

const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    new PureCounter(); // initialize PureCounter
  }, []);

  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row mb-5">
          <div className="col-lg-6 pe-lg-5" data-aos="fade-right" data-aos-delay="200">
            <h2 className="display-6 fw-bold mb-4">
              Empowering Minds, <span>Shaping Futures</span>
            </h2>
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <div className="d-flex flex-wrap gap-4 mb-4">
              <div className="stat-box">
                <span className="stat-number">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="25"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  +
                </span>
                <span className="stat-label">Years</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="2500"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  +
                </span>
                <span className="stat-label">Students</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end="125"
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  +
                </span>
                <span className="stat-label">Faculty</span>
              </div>
            </div>
            <div className="d-flex align-items-center mt-4 signature-block">
              <img
                src={signature}
                alt="Principal's Signature"
                width="120"
              />
              <div className="ms-3">
                <p className="mb-0 fw-bold">Dr. Elizabeth Morgan</p>
                <p className="mb-0 text-muted">Principal</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-left" data-aos-delay="300">
            <div className="image-stack">
              <div
                className="image-stack-item image-stack-item-top"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                <img
                  src={campus}
                  alt="Campus Life"
                  className="img-fluid rounded-4 shadow-lg"
                />
              </div>
              <div
                className="image-stack-item image-stack-item-bottom"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <img
                  src={student}
                  alt="Students"
                  className="img-fluid rounded-4 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row mission-vision-row g-4">
          <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
            <div className="value-card h-100">
              <div className="card-icon">
                <i className="bi bi-rocket-takeoff"></i>
              </div>
              <h3>Our Mission</h3>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.
              </p>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
            <div className="value-card h-100">
              <div className="card-icon">
                <i className="bi bi-eye"></i>
              </div>
              <h3>Our Vision</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim.
              </p>
            </div>
          </div>

          <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
            <div className="value-card h-100">
              <div className="card-icon">
                <i className="bi bi-star"></i>
              </div>
              <h3>Our Values</h3>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
