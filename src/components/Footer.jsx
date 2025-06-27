import Headsvg from '../assets/headingsvg.svg';
import Tiltarrow from '../assets/tilt.svg';
import star from '../assets/star.svg'
import '../styles/Footer.css';
const roles=["WEBFLOW", "FIGMA", "DESIGNER", "DEVELOPER"]
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-marquee">
        <p>
            {roles.map((role)=>{
            return(
                <>
                    <img src={Headsvg} alt ={star}/> <span> {role}</span>
                </>
            )
            })}          
        </p>
      </div>

      <div className="footer-contact">
        <h2 className="footer-title">LET’S TALK!</h2>
        <a href="mailto:rehanurraihan@gmail.com" className="footer-email">
          rehanurraihan@gmail.com <img src={Tiltarrow} alt="email"/>
        </a>
      </div>

      <div className="container footer-bottom">
        <p className="footer-credit">© Rehan Raihan – 2023</p>
        <ul className="footer-socials">
          <li><a href="#">Dribbble</a></li>
          <li><a href="#">Behance</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
