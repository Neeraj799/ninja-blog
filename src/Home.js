import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'hello world...', author:'mario', id: 1 },
        { title: 'Welcome party', body: 'hello world...', author:'Kohli', id: 2 },
        { title: 'Web dev top tips', body: 'hello world...', author:'mario', id: 3 }
    ]);

    const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !==id) ;
      setBlogs(newBlogs); 
    }

    return ( 
        <div className="home">
           <BlogList blogs={blogs} title="All Blogs"  handleDelete={handleDelete}/>
           
        </div>
     );
}
 
export default Home;