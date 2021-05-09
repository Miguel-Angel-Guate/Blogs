import { useHistory, useParams } from "react-router";
import useFetch from "../useFetch";

const BlogDetails = () => {
    const { id} = useParams()
    const {data : blog, error, isPending} = useFetch(`http://localhost:8000/blogs/${id}`)
    const history = useHistory()

    const handleClick= () => {
        fetch(`http://localhost:8000/blogs/${blog.id}`, {
            method: 'DELETE'
        }).then(() => {
            history.push('/home')
        })
    }
    return ( 
        <div>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <h3>Blog details {id}</h3>
            {blog && (
                <article>
                    <h3>{blog.title}</h3>
                    <p>written by {blog.author}</p>
                    <div>
                        {blog.body}
                        <button onClick={handleClick}>Delete</button>
                    </div>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails; 