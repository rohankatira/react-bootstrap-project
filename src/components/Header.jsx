import React from 'react';
import { Link } from 'react-router-dom'; 
import './style.css'; // Adjust the path as necessary
   
    

const Header = () => {
  return (
    <>
      <header id="header" className="header d-flex align-items-center fixed-top">
        <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
          <Link to="/" className="logo d-flex align-items-center">
            <i className="bi bi-buildings"></i>
            <h1 className="sitename">NiceSchool</h1>
          </Link>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li className="dropdown">
                <Link to="about.html"><span>About</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                <ul>
                  <li><Link to="about.html">About Us</Link></li>
                  <li><Link to="admissions.html">Admissions</Link></li>
                  <li><Link to="academics.html">Academics</Link></li>
                  <li><Link to="faculty-staff.html">Faculty &amp; Staff</Link></li>
                  <li><Link to="campus-facilities.html">Campus &amp; Facilities</Link></li>
                </ul>
              </li>
              <li><Link to="students-life.html">Students Life</Link></li>
              <li><Link to="news.html">News</Link></li>
              <li><Link to="events.html">Events</Link></li>
              <li><Link to="alumni.html">Alumni</Link></li>
              <li className="dropdown">
                <Link to="#"><span>More Pages</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                <ul>
                  <li><Link to="news-details.html">News Details</Link></li>
                  <li><Link to="event-details.html">Event Details</Link></li>
                  <li><Link to="privacy.html">Privacy</Link></li>
                  <li><Link to="terms-of-service.html">Terms of Service</Link></li>
                  <li><Link to="404.html" className="active">Error 404</Link></li>
                  <li><Link to="starter-page.html">Starter Page</Link></li>
                </ul>
              </li>
              <li className="dropdown">
                <Link to="#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                <ul>
                  <li><Link to="#">Dropdown 1</Link></li>
                  <li className="dropdown">
                    <Link to="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
                    <ul>
                      <li><Link to="#">Deep Dropdown 1</Link></li>
                      <li><Link to="#">Deep Dropdown 2</Link></li>
                      <li><Link to="#">Deep Dropdown 3</Link></li>
                      <li><Link to="#">Deep Dropdown 4</Link></li>
                      <li><Link to="#">Deep Dropdown 5</Link></li>
                    </ul>
                  </li>
                  <li><Link to="#">Dropdown 2</Link></li>
                  <li><Link to="#">Dropdown 3</Link></li>
                  <li><Link to="#">Dropdown 4</Link></li>
                </ul>
              </li>
              <li><Link to="contact.html">Contact</Link></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
