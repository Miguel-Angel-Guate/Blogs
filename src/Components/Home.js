import useFetch from '../useFetch';
import BlogList from './BlogList'
const Home = () => {
    const {data : blogs, isPending, error} = useFetch('http://localhost:8000/blogs')
    return ( 
        <>
        {error && <div>{error}</div>}
        {isPending && <div>
            Loading...
        </div>}
        {blogs && <BlogList blogs={blogs} title="AllBlogs"/>}
        
        {/* <BlogList blogs={blogs.filter((blog) => blog.author === 'YOshy')} title="AllBlogs" /> */}

        </>
     );
}
 
export default Home;