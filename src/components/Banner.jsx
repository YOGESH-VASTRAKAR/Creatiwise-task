import '../styles/Banner.css';
import avatarImg from '../assets/o-image-1.svg';      
import screenImg from '../assets/o-image-2.svg';      
import logo1 from '../assets/logo1.svg';
import logo2 from '../assets/logo2.svg';
import logo3 from '../assets/logo3.svg';

const Banner = () => {
  return (
    <section className="hero">
        <div className='container'>
             <div className="hero-text">
        <h1>
          I AM A <span className="img-letter"><img src={avatarImg} alt="O" /></span> FREELANCE
        </h1>
        <h1>
          DESIGNER<span className="img-letter"><img src={screenImg} alt="O" /></span> FROM
        </h1>
        <h1>SAN FRANCISCO</h1>
      </div>

      <div className="hero-footer">
        <div className="hero-logos">
          <img src={logo1} alt="doradesign" />
          <img src={logo2} alt="wave" />
          <img src={logo3} alt="siolia" />
        </div>
        <div className="hero-description">
          <p>
            Welcome to my portfolio. Here, artistry meets functionality.<br />
            Dive into a curated showcase of distinctive branding and web<br />
            designs, each crafted to captivate and inspire.
          </p>
        </div>
      </div>
        </div>
     
    </section>
  );
};

export default Banner;
