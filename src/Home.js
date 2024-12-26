import {useState, useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {

  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState( null)

  // Use effect is going to run everytime when something changes on the screen
  // To make or only run the use effect certain times, add dependency to it by
  // adding [] parameter after it.
  // An empty [] means to run only a single time.
  // If it should run after blogs change, add [blogs] to it.
  useEffect(() => {
    setTimeout(() =>
    {
      fetch("http://localhost:8000/blogs")
      .then(res => {
        if (!res.ok) {
          throw Error("Could not fetch data");
        }
        return res.json()
      })
      .then(data => {
        setBlogs(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err => {
        setIsPending(false)
        setError(err.message)
      });
    }, 1000);
  }, [])

  return (

      <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList blogsProp={blogs}></BlogList>}
      </div>
  );

}

export default Home;