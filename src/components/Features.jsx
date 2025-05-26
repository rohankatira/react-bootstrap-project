import React from 'react';
import { Link } from 'react-router-dom';

import Computer from "../assets/img/education/education-1.webp";
import Bachelor from "../assets/img/education/education-3.webp";
import Medical from "../assets/img/education/education-5.webp";
import Environmental from "../assets/img/education/education-7.webp";
import Mechanical from "../assets/img/education/education-9.webp";
import Data from "../assets/img/education/education-2.webp";

const FeaturedPrograms = () => {
  const programs = [
    {
      filter: 'filter-bachelor',
      degree: "Bachelor's Degree",
      image: Computer,
      title: 'Computer Science',
      duration: '4 Years',
      credits: '120 Credits',
      session: 'Fall & Spring',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
      delay: '100'
    },
    {
      filter: 'filter-bachelor',
      degree: "Bachelor's Degree",
      image: Bachelor,
      title: 'Business Administration',
      duration: '3 Years',
      credits: '90 Credits',
      session: 'Fall Only',
      description:
        'Nullam sed augue a turpis bibendum cursus. Suspendisse potenti. Praesent mi diam, feugiat a tincidunt at.',
      delay: '200'
    },
    {
      filter: 'filter-bachelor',
      degree: "Bachelor's Degree",
      image: Medical,
      title: 'Medical Sciences',
      duration: '5 Years',
      credits: '150 Credits',
      session: 'Fall Only',
      description:
        'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
      delay: '300'
    },
    {
      filter: 'filter-master',
      degree: "Master's Degree",
      image: Environmental,
      title: 'Environmental Studies',
      duration: '2 Years',
      credits: '60 Credits',
      session: 'Spring Only',
      description:
        'Aenean imperdiet, erat vel consequat mollis, nunc risus aliquam nunc, eget condimentum urna dui et metus.',
      delay: '100'
    },
    {
      filter: 'filter-master',
      degree: "Master's Degree",
      image: Mechanical,
      title: 'Mechanical Engineering',
      duration: '2 Years',
      credits: '64 Credits',
      session: 'Fall & Spring',
      description:
        'Praesent tincidunt, massa et porttitor imperdiet, lorem ex ultricies ipsum, a tempus metus eros non tortor.',
      delay: '200'
    },
    {
      filter: 'filter-certificate',
      degree: 'Certificate',
      image: Data,
      title: 'Data Science',
      duration: '6 Months',
      credits: '24 Credits',
      session: 'Year-round',
      description:
        'Mauris sed erat in mi vestibulum commodo. Donec a purus at justo facilisis imperdiet tnteger pell',
      delay: '100'
    }
  ];

  return (
    <section id="featured-programs" className="featured-programs section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Featured Programs</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <ul className="program-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" className="filter-active">All Programs</li>
            <li data-filter=".filter-bachelor">Bachelor's</li>
            <li data-filter=".filter-master">Master's</li>
            <li data-filter=".filter-certificate">Certificates</li>
          </ul>

          <div className="row g-4 isotope-container">
            {programs.map((program, index) => (
              <div
                className={`col-lg-6 isotope-item ${program.filter}`}
                data-aos="zoom-in"
                data-aos-delay={program.delay}
                key={index}
              >
                <div className="program-item">
                  <div className="program-badge">{program.degree}</div>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <div className="program-image-wrapper">
                        <img src={program.image} className="img-fluid" alt="Program" />
                      </div>
                    </div>
                    <div className="col-md-8">
                      <div className="program-content">
                        <h3>{program.title}</h3>
                        <div className="program-highlights">
                          <span><i className="bi bi-clock"></i> {program.duration}</span>
                          <span><i className="bi bi-people-fill"></i> {program.credits}</span>
                          <span><i className="bi bi-calendar3"></i> {program.session}</span>
                        </div>
                        <p>{program.description}</p>
                        <Link to="#" className="program-btn text-decoration-none">
                          <span>Learn More</span> <i className="bi bi-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPrograms;
