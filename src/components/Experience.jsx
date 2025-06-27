import Headsvg from '../assets/headingsvg.svg';
import '../styles/Experience.css';

const experiences = [
  {
    title: 'Lead Product Designer',
    company: 'Fortknox',
    date: 'Mar 2022 – Oct 2023',
  },
  {
    title: 'Intern Designer',
    company: 'OmniSafe',
    date: 'Mar 2022 – Oct 2023',
  },
  {
    title: 'UI Designer',
    company: 'Doradesign',
    date: 'Mar 2022 – Oct 2023',
  },
  {
    title: 'Frontend Developer',
    company: 'OpacityAuthor',
    date: 'Mar 2022 – Oct 2023',
  },
];

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="container">
        <h2 className="experience-title"><img src={Headsvg} alt ={Headsvg}/> Experience</h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div className="experience-item" key={index}>
              <div className="exp-left">
                <h3>{exp.title}</h3>
              </div>
              <div className="exp-right">
                <strong>{exp.company}</strong>
                <span>{exp.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
