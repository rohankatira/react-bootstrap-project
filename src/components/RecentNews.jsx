import React from 'react';
import { Link } from 'react-router-dom';

// Blog post images
import BlogPost1 from '../assets/img/blog/blog-post-1.webp';
import BlogPost2 from '../assets/img/blog/blog-post-2.webp';
import BlogPost3 from '../assets/img/blog/blog-post-3.webp';

// Author images
import Author1 from '../assets/img/person/person-f-12.webp';
import Author2 from '../assets/img/person/person-f-13.webp';
import Author3 from '../assets/img/person/person-m-10.webp';

const RecentNews = () => {
  return (
    <section id="recent-news" className="recent-news section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Recent News</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <article>
              <div className="post-img">
                <img src={BlogPost1} alt="Blog Post 1" className="img-fluid" />
              </div>

              <p className="post-category">Politics</p>

              <h2 className="title">
                <Link to="/blog-details" className="text-decoration-none">
                  Dolorum optio tempore voluptas dignissimos
                </Link>
              </h2>

              <div className="d-flex align-items-center">
                <img src={Author1} alt="Maria Doe" className="img-fluid post-author-img flex-shrink-0" />
                <div className="post-meta">
                  <p className="post-author">Maria Doe</p>
                  <p className="post-date">
                    <time dateTime="2022-01-01">Jan 1, 2022</time>
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <article>
              <div className="post-img">
                <img src={BlogPost2} alt="Blog Post 2" className="img-fluid" />
              </div>

              <p className="post-category">Sports</p>

              <h2 className="title">
                <Link to="/blog-details" className="text-decoration-none">
                  Nisi magni odit consequatur autem nulla dolorem
                </Link>
              </h2>

              <div className="d-flex align-items-center">
                <img src={Author2} alt="Allisa Mayer" className="img-fluid post-author-img flex-shrink-0" />
                <div className="post-meta">
                  <p className="post-author">Allisa Mayer</p>
                  <p className="post-date">
                    <time dateTime="2022-06-05">Jun 5, 2022</time>
                  </p>
                </div>
              </div>
            </article>
          </div>

          <div className="col-xl-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <article>
              <div className="post-img">
                <img src={BlogPost3} alt="Blog Post 3" className="img-fluid" />
              </div>

              <p className="post-category">Entertainment</p>

              <h2 className="title">
                <Link to="/blog-details" className="text-decoration-none">
                  Possimus soluta ut id suscipit ea ut in quo quia et soluta
                </Link>
              </h2>

              <div className="d-flex align-items-center">
                <img src={Author3} alt="Mark Dower" className="img-fluid post-author-img flex-shrink-0" />
                <div className="post-meta">
                  <p className="post-author">Mark Dower</p>
                  <p className="post-date">
                    <time dateTime="2022-06-22">Jun 22, 2022</time>
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentNews;
