import {useState} from "react";
import {useNavigate} from "react-router-dom";

const CreateBlog = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('Mario');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()

    const blog = {title, content, author}

    setIsPending(true)

    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('New blog added')
      setIsPending(false)
      navigate('/')
    })
  }

  return (
    <div className="create">
      <h2>Create a New Blog</h2>

      <form action="" onSubmit={handleSubmit}>
        <label htmlFor=""> Blog Title: </label>
        <input type="text" required value={title}
               onChange={(e) => setTitle(e.target.value)}></input>

        <label htmlFor=""> Blog Content: </label>
        <textarea required value={content}
                  onChange={(e) => setContent(e.target.value)}></textarea>

        <label htmlFor=""> Author: </label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Mario">Mario</option>
          <option value="Yoshi">Yoshi</option>
        </select>

        {!isPending && <button>Add Blog</button>}
        {isPending && <button disabled>Submitting Blog...</button>}

      </form>

    </div>
  );

}

export default CreateBlog;