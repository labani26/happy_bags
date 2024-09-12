import footer1 from "../images/both.png";
// import footer2 from "../images/socialmedia.png";
import logo from "../images/whatsapp.jpeg";
import "./index.css";

const Footer = () => (
  <div className="footer">
    <div className="row">
      {/* Column 1 - App Download */}
      <div className="footer-col-1">
        <h3>Download Our App</h3>
        <p>Download the app for Android and iOS mobile phones.</p>
        <div className="app-logo">
          <img src={footer1} alt="Download on App Store and Google Play" className="footer-image" />
        </div>
      </div>

      {/* Column 2 - Contact Information */}
      <div className="footer-col-2">
        <h3>Contact Us:</h3>
        <p>
          More ways to shop: Find a retailer near you, or contact us via phone or WhatsApp at 123456777, or via email at
          <a href="mailto:happybags12345@gmail.com"> happybags12345@gmail.com</a>.
        </p>
        <img src={logo} alt="WhatsApp contact" className="logo-image" />
      </div>

      {/* Column 3 - Useful Links */}
      <div className="footer-col-3">
        <h3>Useful Links:</h3>
        <ul>
          <li>Coupons</li>
          <li>Blog Posts</li>
          <li>Return Policy</li>
          <li>Join Affiliate Program</li>
        </ul>
      </div>

      {/* Column 4 - Social Media Links */}
      <div className="footer-col-4">
        <h3>Follow Us On:</h3>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>Instagram</li>
          <li>YouTube</li>
        </ul>
        {/* Uncomment if you want to use an image for social media logos */}
        {/* <img src={footer2} alt="Social media icons" className="social-media-logo" /> */}
      </div>
    </div>

    <hr />

    {/* Footer Copyright */}
    <p className="copyright">
      &copy; 2024 Happybags Inc. All rights reserved.
    </p>
  </div>
);

export default Footer;
