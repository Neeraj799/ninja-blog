import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'hello world...', author:'mario', id: 1 },
        { title: 'Welcome party', body: 'hello world...', author:'Kohli', id: 2 },
        { title: 'Web dev top tips', body: 'hello world...', author:'mario', id: 3 }
    ]);

    return ( 
        <div className="home">
           <BlogList blogs={blogs} title="All Blogs" />
           <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs" />
        </div>
     );
}
 
export default Home;