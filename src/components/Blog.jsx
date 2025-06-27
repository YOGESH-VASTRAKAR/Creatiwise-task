import Headsvg from '../assets/headingsvg.svg';
import '../styles/Blog.css';

import blog1 from '../assets/work1.png';
import blog2 from '../assets/work2.png';
import blog3 from '../assets/work3.png';

const blogPosts = [
  {
    image: blog1,
    date: 'Nov 9, 2023',
    title: 'How UX works in web',
    tags: ['UI', 'UX'],
  },
  {
    image: blog2,
    date: 'Aug 18, 2023',
    title: 'Case study - Analysis Application.',
    tags: ['DESIGN', 'PRINT'],
  },
  {
    image: blog3,
    date: 'Feb 16, 2023',
    title: '3 ways to develop your skill',
    tags: ['FIGMA', 'WEB'],
  },
];

const Blog = () => {
  return (
    <section className="blog-section">
      <div className="container">
        <div className="blog-header">
          <h2><img src={Headsvg} alt ={Headsvg}/> Blog</h2>
          <a href="#" className="view-all">view all</a>
        </div>

        <div className="blog-list">
          {blogPosts.map((post, index) => (
            <div className="blog-card" key={index}>
            <div className="blog-image">
                <img src={post.image} alt={post.title} />
            </div>
            <div className="blog-info">
                <p className="blog-date">{post.date}</p>
                <h3 className="blog-title">{post.title}</h3>
                <div className="tags">
                {post.tags.map((tag, i) => (
                    <span className="tag" key={i}>{tag}</span>
                ))}
                </div>
            </div>
            <div className="blog-action">
                <button className="read-btn">Read</button>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
