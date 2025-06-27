import Headsvg from '../assets/headingsvg.svg';
import '../styles/Works.css';
import work1 from '../assets/work1.png';
import work2 from '../assets/work2.png';
import work3 from '../assets/work3.png';

const worksData = [
  {
    image: work1,
    title: 'Analysis Application',
    desc: 'With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.',
    tags: ['FIGMA', 'UX'],
  },
  {
    image: work2,
    title: 'Fortknox Application',
    desc: 'With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.',
    tags: ['MOBILE', 'WEB'],
  },
  {
    image: work3,
    title: 'Zenocide Application',
    desc: 'With user-centered approach, the goals was to create an intuitive interface for enhanced financial intelligence.',
    tags: ['APP', 'WEB'],
  },
];

const WorkCard = ({ item }) => (
  <div className="work-card">
    <div className="work-image">
      <img src={item.image} alt={item.title} />
    </div>
    <div className="work-content">
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
      <div className="tags">
        {item.tags.map((tag, idx) => (
          <span className="tag" key={idx}>{tag}</span>
        ))}
      </div>
      <button className="case-study-btn">View Case Study</button>
    </div>
  </div>
);

const Works = () => (
  <section className="works-section">
    <div className="container">
      <div className="works-header">
        <h2><img src={Headsvg} alt ={Headsvg}/> Works</h2>
        <a href="#" className="view-all">view all</a>
      </div>

      <div className="works-grid">
        {worksData.map((item, index) => (
          <WorkCard item={item} key={index} />
        ))}
      </div>
    </div>
  </section>
);

export default Works;
