import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Make sure this contains your CSS styles

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="header"
      className={`header d-flex align-items-center fixed-top ${scrolled ? 'scrolled' : ''}`}
    >
      <div className="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center text-decoration-none">
          <i className="bi bi-buildings"></i>
          <h1 className="sitename text-light">NiceSchool</h1>
        </Link>

        <nav id="navmenu" className="navmenu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li className="dropdown">
              <Link to="/about"><span>About</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
              <ul>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/admissions">Admissions</Link></li>
                <li><Link to="/academics">Academics</Link></li>
                <li><Link to="/faculty-staff">Faculty &amp; Staff</Link></li>
                <li><Link to="/campus-facilities">Campus &amp; Facilities</Link></li>
              </ul>
            </li>
            <li><Link to="/students-life">Students Life</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/alumni">Alumni</Link></li>
            <li className="dropdown">
              <Link to="#"><span>More Pages</span> <i className="bi bi-chevron-down toggle-dropdown"></i></Link>
              <ul>
                <li><Link to="/news-details">News Details</Link></li>
                <li><Link to="/event-details">Event Details</Link></li>
                <li><Link to="/privacy">Privacy</Link></li>
                <li><Link to="/terms-of-service">Terms of Service</Link></li>
                <li><Link to="/404">Error 404</Link></li>
                <li><Link to="/starter-page">Starter Page</Link></li>
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
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
    </header>
  );
};

export default Header;
