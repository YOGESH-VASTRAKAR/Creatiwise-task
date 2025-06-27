import { useState } from 'react';
import Headsvg from '../assets/headingsvg.svg';
import '../styles/Faq.css';

const faqs = [
  {
    question: "What is your design process?",
    answer:
      "My design process typically involves four key phases: research, design, prototype, and test. In the research phase, I gather insights about the user and their needs. In the design phase, I create wireframes and visual designs that meet those needs. In the prototype phase, I create interactive models of the design for testing. In the test phase, I collect feedback from users to refine the design.",
  },
  {
    question: "What tools and software do you use for UX design?",
    answer:
      "I use Figma, Adobe XD, Sketch, InVision, and Miro for design, collaboration, and prototyping. I also use usability testing tools like Maze and Hotjar.",
  },
  {
    question: "How do you measure the success of your UX designs?",
    answer:
      "I use usability metrics such as task success rate, time on task, error rate, and user satisfaction through surveys and feedback.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="faq-title"><img src={Headsvg} alt ={Headsvg}/> Frequently asked questions</h2>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <div className="faq-item" key={index}>
              <div className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{item.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </div>
              {openIndex === index && (
                <p className="faq-answer">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Faq;
