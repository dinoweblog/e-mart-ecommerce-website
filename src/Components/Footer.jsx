import "./Styles/Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="about_section">
        <div>
          <div className="about">
            <h3>WHO ARE WE</h3>
            <ul>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="help">
            <h3>HELP</h3>
            <ul>
              <li>
                <a href="">Shipping & Return Policy</a>
              </li>
              <li>
                <a href="">Help Center Terms & Conditions</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="sitemap">
            <h3>QUICKLINKS</h3>
            <ul>
              <li>
                <a href="">Sitemap</a>
              </li>
            </ul>
          </div>
          <div className="follow">
            <h3>FOLLOW US</h3>
            <div className="social_icon">
              <a href="">
                <i class="bx bxl-instagram-alt"></i>
              </a>
              <a href="">
                <i class="bx bxl-twitter"></i>
              </a>
              <a href="">
                <i class="bx bxl-facebook-circle"></i>
              </a>
            </div>
          </div>
          <div className="apps_link">
            <h3>DOWNLOAD OUR APP</h3>
            <ul>
              <li>
                <a href="">
                  <img
                    src="https://adn-static1.nykaa.com/nykdesignstudio-images/tr:h-66,/pub/media/wysiwyg/homepagemiddle/googlePlay.png"
                    alt=""
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <img
                    src="https://adn-static1.nykaa.com/nykdesignstudio-images/tr:h-66,/pub/media/wysiwyg/homepagemiddle/appleStore.png"
                    alt=""
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="catagory_section">
        <div>
          <div>
            <h3>WOMEN</h3>
            <ul>
              <li>
                <a href="">Indianwear</a>
              </li>
              <li>
                <a href="">Westernwear</a>
              </li>
              <li>
                <a href="">Bags</a>
              </li>
              <li>
                <a href="">Footwear</a>
              </li>
              <li>
                <a href="">Lingerie</a>
              </li>
              <li>
                <a href="">Sportswear</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>MEN</h3>
            <ul>
              <li>
                <a href="">Indianwear</a>
              </li>
              <li>
                <a href="">Westernwear</a>
              </li>
              <li>
                <a href="">Bags</a>
              </li>
              <li>
                <a href="">Footwear</a>
              </li>
              <li>
                <a href="">Lingerie</a>
              </li>
              <li>
                <a href="">Sportswear</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>KIDS</h3>
            <ul>
              <li>
                <a href="">Indianwear</a>
              </li>
              <li>
                <a href="">Westernwear</a>
              </li>
              <li>
                <a href="">Bags</a>
              </li>
              <li>
                <a href="">Footwear</a>
              </li>
              <li>
                <a href="">Lingerie</a>
              </li>
              <li>
                <a href="">Sportswear</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>TOP BRANDS</h3>
            <ul>
              <li>
                <a href="">Aachho</a>
              </li>
              <li>
                <a href="">Forever</a>
              </li>
              <li>
                <a href="">New</a>
              </li>
              <li>
                <a href="">Reebok</a>
              </li>
              <li>
                <a href="">Adidas</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright_section">
        <p>© 2021 - 2022 e-Mart Pvt. Ltd. All Rights Reserved</p>
      </div>
    </div>
  );
};
