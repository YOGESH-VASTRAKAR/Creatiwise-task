import '../styles/Testimonial.css';
import avatar from '../assets/avatar.png';
import quote from '../assets/avatar.svg';

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="container testimonial-container">

        <div className="testimonial-user">
          <img src={avatar} alt="Floyd Miles" className="testimonial-avatar" />
          <div className="testimonial-user-info">
            <h3 className="user-name">Floyd Miles</h3>
            <p className="user-role">eBay</p>
          </div>
        </div>

        <div className="testimonial-content">
          <p className="quote-text">
            <span className="quote-mark"><img src={quote}/></span>
            Synergy’s resume builder is fantastic. It helped me create a professional resume that stood out to employers.
            Synergy’s resume builder is fantastic. It helped me create a professional resume that stood out to employers.
          </p>

          <div className="testimonial-nav">
            <button className="nav-btn">←</button>
            <button className="nav-btn">→</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
