import {useState } from 'react'
import {useHistory} from 'react-router-dom'
const Create = () => { 
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Mario')
    const [isPending, setIsPending] = useState(false)

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        const blog = {title, body, author};
        setIsPending(true)
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog')
            setIsPending(false)
        })
        // history.go(-1)
        history.push('/')
    }

    return ( 
        <>
        <div>
            <h3>New Blog</h3>
            <form style={{display: 'flex', flexDirection: 'column'}} onSubmit={handleSubmit}>
                <label>Blog title</label>
                <input 
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <labe>Blog body</labe>
                <textarea 
                required
                value={body}
                onChange={(e)=> setBody(e.target.value)}
                >
                </textarea>
                <label>Blog Author</label>
                <select
                value={author}
                onChange={(e)=> setAuthor(e.target.value)}
                >
                    <option value="Achel">Achel</option>
                    <option value="Anchely">Anchely</option>
                </select>
                {!isPending && <button type="submit">create new</button>}
                {isPending && <button type="submit" disabled>Adding blog....</button>}

            </form>
        </div>
        </>
     );
}
 
export default Create;