import React from 'react';
import './MyBlog.css';

const blogs = [
  {
    id: 0,
    title: 'Science and Tech',
    content: `Science and technology are the driving forces behind the progress of human civilization. These two domains have shaped the world in ways unimaginable just a few decades ago. Let's dive into the fascinating world of science and technology.`,
    fullContent: `Science and technology are the driving forces behind the progress of human civilization. These two domains have shaped the world in ways unimaginable just a few decades ago. 
    Science and technology are the dynamic duo that has been shaping the world as we know it. These two fields have had a profound impact on society, revolutionizing the way we live, work, and communicate. 
    In this blog post, we'll explore the intricate relationship between science and technology and how they continue to drive progress and innovation.`,
  },
  {
    id: 1,
    title: 'Good Morning IT Industry',
    content: `Good Morning, IT Industry! It's a new day in the world of technology and innovation. With the sun rising on the horizon, we are reminded of the endless possibilities that lie ahead in the IT sector.`,
    fullContent: `Good Morning, IT Industry! It's a new day in the world of technology and innovation. With the sun rising on the horizon, we are reminded of the endless possibilities that lie ahead in the IT sector. 
    The IT industry plays a vital role in our modern lives. From the software that powers our smartphones to the infrastructure that enables the internet, IT is the backbone of our digital world. 
    As we sip our morning coffee and log in to our workstations, we become a part of this dynamic and ever-evolving industry. The IT professionals around the globe work tirelessly to keep the wheels of technology turning. 
    From coding the latest applications to securing our online data, the contributions of IT experts are immeasurable. The world of IT is not just about computers and code; it's about creativity, problem-solving, and pushing the boundaries of what's possible. 
    It's a world where innovation never sleeps, and every day brings new challenges and opportunities. So, as we start our day in the IT industry, let's embrace the excitement of the unknown and the satisfaction of solving complex problems. 
    Let's continue to drive progress and shape the future. Good morning, IT industry. The world is counting on you!`,
  },
  {
    id: 2,
    title: 'Blog Post 2',
    content: 'This is the content of Blog Post 2.',
    fullContent: 'This is the full content of Blog Post 2. It provides in-depth information about the topic discussed in the blog post.',
  },
  {
    id: 3,
    title: 'Blog Post 3',
    content: 'This is the content of Blog Post 3. It talks about another interesting subject. Click on Read More to see more details.',
    fullContent: 'This is the full content of Blog Post 3. It delves deeper into the subject and provides comprehensive information.',
  },
  {
    id: 4,
    title: 'Blog Post 4',
    content: 'This is the content of Blog Post 4. It discusses yet another topic. Read More to explore the full content of this blog post.',
    fullContent: 'This is the full content of Blog Post 4. It contains extensive information about the topic covered in the blog post.',
  },
];

const Blog = ({ title, content, fullContent }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="blog">
      <h2>{title}</h2>
      {isExpanded ? <p>{fullContent}</p> : <p>{content}</p>}
      <button onClick={toggleExpand}>{isExpanded ? 'Show Less' : 'Read More'}</button>
    </div>
  );
};

const MyBlog = () => (
  <div className="blogs">
    <h1>My Blog - My Opinion</h1> {/* Updated heading */}
    {blogs.map((blog) => (
      <Blog key={blog.id} title={blog.title} content={blog.content} fullContent={blog.fullContent} />
    ))}
  </div>
);

export default MyBlog;
