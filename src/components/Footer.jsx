import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer position-relative bg-black text-light">
        <div className="container footer-top">
          <div className="row gy-4">

            <div className="col-lg-4 col-md-6 footer-about">
              <Link to="/" className="logo d-flex align-items-center text-decoration-none">
                <span className="sitename text-light">NiceSchool</span>
              </Link>
              <div className="footer-contact pt-3">
                <p>A108 Adam Street</p>
                <p>New York, NY 535022</p>
                <p className="mt-3"><strong>Phone:</strong> <span>+1 5589 55488 55</span></p>
                <p><strong>Email:</strong> <span>info@example.com</span></p>
              </div>
              <div className="social-links d-flex mt-4">
                <Link to="#" className="text-decoration-none text-light"><i className="bi bi-twitter-x"></i></Link>
                <Link to="#" className="text-decoration-none text-light"><i className="bi bi-facebook"></i></Link>
                <Link to="#" className="text-decoration-none text-light"><i className="bi bi-instagram"></i></Link>
                <Link to="#" className="text-decoration-none text-light"><i className="bi bi-linkedin"></i></Link>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4 className='text-light'>Useful Links</h4>
              <ul>
                <li><Link to="#" className="text-decoration-none text-light">Home</Link></li>
                <li><Link to="#" className="text-decoration-none text-light">About us</Link></li>
                <li><Link to="#" className="text-decoration-none text-light">Services</Link></li>
                <li><Link to="#" className="text-decoration-none text-light">Terms of service</Link></li>
                <li><Link to="#" className="text-decoration-none text-light">Privacy policy</Link></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li><Link to="#" className="text-decoration-none text-light">Web Design</Link></li>
                <li><Link to="#" className="text-decoration-none text-light">Web Development</Link></li>
                <li><Link to="#" className="text-decoration-none text-light">Product Management</Link></li>
                <li><Link to="#" className="text-decoration-none text-light">Marketing</Link></li>
                <li><Link to="#" className="text-decoration-none text-light">Graphic Design</Link></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Hic solutasetp</h4>
              <ul>
                <li><Link to="#" className="text-decoration-none text-light">Molestiae accusamus iure</Link></li>
                <li><Link to="#" className="text-decoration-none text-light">Excepturi dignissimos</Link></li>
                <li><Link to="#" className="text-decoration-none text-light">Suscipit distinctio</Link></li>
                <li><Link to="#" className="text-decoration-none text-light">Dilecta</Link></li>
                <li><Link to="#" className="text-decoration-none text-light">Sit quas consectetur</Link></li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Nobis illum</h4>
              <ul>
                <li><Link to="#" className="text-decoration-none text-light">Ipsam</Link></li>
                <li><Link to="#" className="text-decoration-none text-light">Laudantium dolorum</Link></li>
                <li><Link to="#" className="text-decoration-none text-light">Dinera</Link></li>
                <li><Link to="#" className="text-decoration-none text-light">Trodelas</Link></li>
                <li><Link to="#" className="text-decoration-none text-light">Flexo</Link></li>
              </ul>
            </div>

          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>© <span>Copyright</span> <strong className="px-1 sitename">MyWebsite</strong> <span>All Rights Reserved</span></p>
          <div className="credits">
            Designed by <a href="https://bootstrapmade.com/" className="text-decoration-none" target="_blank" rel="noopener noreferrer">BootstrapMade</a>
          </div>
        </div>
      </footer>

      {/* Scroll Top */}
      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
        <i className="bi bi-arrow-up-short"></i>
      </a>
    </>
  );
};

export default Footer;
