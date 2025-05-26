import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Import testimonial images
import RachelImg from '../assets/img/person/person-f-7.webp';
import DanielImg from '../assets/img/person/person-m-7.webp';
import EmmaImg from '../assets/img/person/person-f-8.webp';
import ChristopherImg from '../assets/img/person/person-m-8.webp';
import OliviaImg from '../assets/img/person/person-f-9.webp';
import NathanImg from '../assets/img/person/person-m-13.webp';

const Testimonial = () => {
  const testimonials = [
    {
      delay: 0,
      text: "Implementing innovative strategies has revolutionized our approach to market challenges and competitive positioning.",
      img: RachelImg,
      name: "Rachel Bennett",
      position: "Strategy Director",
      highlight: false,
    },
    {
      delay: 100,
      text: "Exceptional service delivery and innovative solutions have transformed our business operations, leading to remarkable growth and enhanced customer satisfaction across all touchpoints.",
      img: DanielImg,
      name: "Daniel Morgan",
      position: "Chief Innovation Officer",
      highlight: true,
    },
    {
      delay: 200,
      text: "Strategic partnership has enabled seamless digital transformation and operational excellence.",
      img: EmmaImg,
      name: "Emma Thompson",
      position: "Digital Lead",
      highlight: false,
    },
    {
      delay: 300,
      text: "Professional expertise and dedication have significantly improved our project delivery timelines and quality metrics.",
      img: ChristopherImg,
      name: "Christopher Lee",
      position: "Technical Director",
      highlight: false,
    },
    {
      delay: 400,
      text: "Collaborative approach and industry expertise have revolutionized our product development cycle, resulting in faster time-to-market and increased customer engagement levels.",
      img: OliviaImg,
      name: "Olivia Carter",
      position: "Product Manager",
      highlight: true,
    },
    {
      delay: 500,
      text: "Innovative approach to user experience design has significantly enhanced our platform's engagement metrics and customer retention rates.",
      img: NathanImg,
      name: "Nathan Brooks",
      position: "UX Director",
      highlight: false,
    }
  ];

  return (
    <section id="testimonials" className="testimonials section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
        </p>
      </div>

      <div className="container">
        <div className="testimonial-masonry">
          {testimonials.map(({ delay, text, img, name, position, highlight }, index) => (
            <div
              key={index}
              className={`testimonial-item ${highlight ? "highlight" : ""}`}
              data-aos="fade-up"
              data-aos-delay={delay}
            >
              <div className="testimonial-content">
                <div className="quote-pattern">
                  <i className="bi bi-quote"></i>
                </div>
                <p>{text}</p>
                <div className="client-info">
                  <div className="client-image">
                    <img src={img} alt={name} />
                  </div>
                  <div className="client-details">
                    <h3>{name}</h3>
                    <span className="position">{position}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
