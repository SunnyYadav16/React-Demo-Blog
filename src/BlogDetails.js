import {useParams} from "react-router-dom";
import useFetch from "./useFetch";
import {useNavigate} from "react-router-dom";

const BlogDetails = () => {

  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch("http://localhost:8000/blogs/" + id);
  const navigate = useNavigate()

  const handleDelete = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: 'DELETE'
    }).then(() => {
      console.log('Blog deleted')
      navigate('/')
    })
  }

  return (
    <div className="blog-details">
      <h2>Blog Details</h2>
      { isPending && <div>Loading...</div> }
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );

}

export default BlogDetails;