
import Banner from './components/Banner';
import Blog from './components/Blog';
import Experience from './components/Experience';
import Expertise from './components/Expertise';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Testimonial from './components/Testimonial';
import Works from './components/Works';

const App = () => {
  return (
    <>
      <Navbar />
      <Banner/>
      <Expertise/>
      <Works/>
      <Experience/>
      <Blog/>
      <Testimonial/>
      <Faq/>
      <Footer/>
      {/* More content can go here */}
    </>
  );
};

export default App;
