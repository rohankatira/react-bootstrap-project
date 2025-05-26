import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import PureCounter from "@srexi/purecounterjs";

// Import achievement images
import EducationImg1 from '../assets/img/education/education-1.webp';
import EducationImg2 from '../assets/img/education/education-2.webp';
import EducationImg3 from '../assets/img/education/education-3.webp';

const StatsSection = () => {
  const statsData = [
    {
      icon: 'bi-people-fill',
      end: 94,
      suffix: '%',
      label: 'Graduation Rate',
      delay: 300
    },
    {
      icon: 'bi-person-workspace',
      end: 15,
      suffix: ':1',
      label: 'Student-Faculty Ratio',
      delay: 400
    },
    {
      icon: 'bi-award',
      end: 125,
      suffix: '+',
      label: 'Academic Programs',
      delay: 500
    },
    {
      icon: 'bi-cash-stack',
      prefix: '$',
      end: 42,
      suffix: 'M',
      label: 'Research Funding',
      delay: 600
    }
  ];

  const achievements = [
    {
      img: EducationImg1,
      title: 'Top-Ranked Programs',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ultricies magna.'
    },
    {
      img: EducationImg2,
      title: 'State-of-the-Art Facilities',
      desc: 'Maecenas finibus convallis turpis, non facilisis justo egestas in. Nulla facilisi.'
    },
    {
      img: EducationImg3,
      title: 'Global Alumni Network',
      desc: 'Fusce consectetur, enim eget aliquet volutpat, lacus nulla semper velit, et luctus.'
    }
  ];

  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row">
          <div className="col-lg-6">
            <div className="stats-overview" data-aos="fade-right" data-aos-delay="200">
              <h2 className="stats-title">Excellence in Education for Over 50 Years</h2>
              <p className="stats-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel ultricies magna.
                Maecenas finibus convallis turpis, non facilisis justo egestas in. Nulla facilisi.
                Fusce consectetur, enim eget aliquet volutpat, lacus nulla semper velit.
              </p>
              <div className="stats-cta">
                <a href="#" className="btn btn-primary">Learn More</a>
                <a href="#" className="btn btn-outline">Virtual Tour</a>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="row g-4">
              {statsData.map((stat, index) => (
                <div key={index} className="col-md-6">
                  <div className="stats-card" data-aos="zoom-in" data-aos-delay={stat.delay}>
                    <div className="stats-icon">
                      <i className={`bi ${stat.icon}`}></i>
                    </div>
                    <div className="stats-number">
                      {stat.prefix || ''}
                      <span
                        data-purecounter-start="0"
                        data-purecounter-end={stat.end}
                        data-purecounter-duration="1"
                        className="purecounter"
                      ></span>
                      {stat.suffix || ''}
                    </div>
                    <div className="stats-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-12">
            <div className="achievements-gallery" data-aos="fade-up" data-aos-delay="700">
              <div className="row g-4">
                {achievements.map((item, index) => (
                  <div key={index} className="col-md-4">
                    <div className="achievement-item">
                      <img src={item.img} alt={item.title} className="img-fluid" />
                      <div className="achievement-content">
                        <h4>{item.title}</h4>
                        <p>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
