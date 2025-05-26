import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Testimonial = () => {
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

          {[
            {
              delay: 0,
              text: "Implementing innovative strategies has revolutionized our approach to market challenges and competitive positioning.",
              img: "src/assets/img/person/person-f-7.webp",
              name: "Rachel Bennett",
              position: "Strategy Director",
              highlight: false,
            },
            {
              delay: 100,
              text: "Exceptional service delivery and innovative solutions have transformed our business operations, leading to remarkable growth and enhanced customer satisfaction across all touchpoints.",
              img: "src/assets/img/person/person-m-7.webp",
              name: "Daniel Morgan",
              position: "Chief Innovation Officer",
              highlight: true,
            },
            {
              delay: 200,
              text: "Strategic partnership has enabled seamless digital transformation and operational excellence.",
              img: "src/assets/img/person/person-f-8.webp",
              name: "Emma Thompson",
              position: "Digital Lead",
              highlight: false,
            },
            {
              delay: 300,
              text: "Professional expertise and dedication have significantly improved our project delivery timelines and quality metrics.",
              img: "src/assets/img/person/person-m-8.webp",
              name: "Christopher Lee",
              position: "Technical Director",
              highlight: false,
            },
            {
              delay: 400,
              text: "Collaborative approach and industry expertise have revolutionized our product development cycle, resulting in faster time-to-market and increased customer engagement levels.",
              img: "src/assets/img/person/person-f-9.webp",
              name: "Olivia Carter",
              position: "Product Manager",
              highlight: true,
            },
            {
              delay: 500,
              text: "Innovative approach to user experience design has significantly enhanced our platform's engagement metrics and customer retention rates.",
              img: "src/assets/img/person/person-m-13.webp",
              name: "Nathan Brooks",
              position: "UX Director",
              highlight: false,
            }
          ].map(({ delay, text, img, name, position, highlight }, index) => (
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
                    <img src={img} alt="Client" />
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
