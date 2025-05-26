import React from 'react';
import { Link } from 'react-router-dom';

const Events = () => {
  return (
    <section id="events" className="events section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Events</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="event-filters mb-4">
          <div className="row justify-content-center g-3">
            <div className="col-md-4">
              <select className="form-select">
                <option defaultValue>All Months</option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
              </select>
            </div>
            <div className="col-md-4">
              <select className="form-select">
                <option defaultValue>All Categories</option>
                <option>Academic</option>
                <option>Arts</option>
                <option>Sports</option>
                <option>Community</option>
              </select>
            </div>
          </div>
        </div>

        <div className="row g-4">
          {/* Event 1 */}
          <div className="col-lg-6">
            <div className="event-card">
              <div className="event-date">
                <span className="month">FEB</span>
                <span className="day">15</span>
                <span className="year">2025</span>
              </div>
              <div className="event-content">
                <div className="event-tag academic">Academic</div>
                <h3>Science Fair Exhibition</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="event-meta">
                  <div className="meta-item">
                    <i className="bi bi-clock"></i>
                    <span>09:00 AM - 03:00 PM</span>
                  </div>
                  <div className="meta-item">
                    <i className="bi bi-geo-alt"></i>
                    <span>Main Auditorium</span>
                  </div>
                </div>
                <div className="event-actions">
                  <Link to="#" className="btn-learn-more text-decoration-none">Learn More</Link>
                  <Link to="#" className="btn-calendar text-decoration-none">
                    <i className="bi bi-calendar-plus"></i> Add to Calendar
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Event 2 */}
          <div className="col-lg-6">
            <div className="event-card">
              <div className="event-date">
                <span className="month">MAR</span>
                <span className="day">10</span>
                <span className="year">2025</span>
              </div>
              <div className="event-content">
                <div className="event-tag sports">Sports</div>
                <h3>Annual Sports Day</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>
                <div className="event-meta">
                  <div className="meta-item">
                    <i className="bi bi-clock"></i>
                    <span>08:30 AM - 05:00 PM</span>
                  </div>
                  <div className="meta-item">
                    <i className="bi bi-geo-alt"></i>
                    <span>School Playground</span>
                  </div>
                </div>
                <div className="event-actions">
                  <Link to="#" className="btn-learn-more text-decoration-none">Learn More</Link>
                  <Link to="#" className="btn-calendar text-decoration-none">
                    <i className="bi bi-calendar-plus"></i> Add to Calendar
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Event 3 */}
          <div className="col-lg-6">
            <div className="event-card">
              <div className="event-date">
                <span className="month">APR</span>
                <span className="day">22</span>
                <span className="year">2025</span>
              </div>
              <div className="event-content">
                <div className="event-tag arts">Arts</div>
                <h3>Spring Music Concert</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
                <div className="event-meta">
                  <div className="meta-item">
                    <i className="bi bi-clock"></i>
                    <span>06:30 PM - 08:30 PM</span>
                  </div>
                  <div className="meta-item">
                    <i className="bi bi-geo-alt"></i>
                    <span>Performing Arts Center</span>
                  </div>
                </div>
                <div className="event-actions">
                  <Link to="#" className="btn-learn-more text-decoration-none">Learn More</Link>
                  <Link to="#" className="btn-calendar text-decoration-none">
                    <i className="bi bi-calendar-plus"></i> Add to Calendar
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Event 4 */}
          <div className="col-lg-6">
            <div className="event-card">
              <div className="event-date">
                <span className="month">MAY</span>
                <span className="day">8</span>
                <span className="year">2025</span>
              </div>
              <div className="event-content">
                <div className="event-tag community">Community</div>
                <h3>Parent-Teacher Conference</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.</p>
                <div className="event-meta">
                  <div className="meta-item">
                    <i className="bi bi-clock"></i>
                    <span>01:00 PM - 07:00 PM</span>
                  </div>
                  <div className="meta-item">
                    <i className="bi bi-geo-alt"></i>
                    <span>Various Classrooms</span>
                  </div>
                </div>
                <div className="event-actions">
                  <Link to="#" className="btn-learn-more text-decoration-none">Learn More</Link>
                  <Link to="#" className="btn-calendar text-decoration-none">
                    <i className="bi bi-calendar-plus"></i> Add to Calendar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5">
          <Link to="#" className="btn-view-all text-decoration-none">View All Events</Link>
        </div>
      </div>
    </section>
  );
};

export default Events;
