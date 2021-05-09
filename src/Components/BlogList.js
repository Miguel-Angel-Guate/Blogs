import { Link } from "react-router-dom";

const BlogList = ({blogs, title}) => {
    return ( 
        <>
                <h1>{title}</h1>
        {blogs.map((blog) => (
            <div key={blog.id} style={{textDecoration: 'none'}}>
                <Link to={`/blogs/${blog.id}`}>
                <h3>{blog.title}</h3>
                <p>written by {blog.author}</p>
                </Link>
            </div>
        ))}
        </>
      );
}
 
export default BlogList;