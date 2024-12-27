import {useState, useEffect} from "react";

const useFetch = (url) => {

  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState( null)

  // Use effect is going to run everytime when something changes on the screen
  // To make or only run the use effect certain times, add dependency to it by
  // adding [] parameter after it.
  // An empty [] means to run only a single time.
  // If it should run after blogs change, add [blogs] to it.
  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() =>
    {
      fetch(url, {signal: abortCont.signal})
      .then(res => {
        if (!res.ok) {
          throw Error("Could not fetch data");
        }
        return res.json()
      })
      .then(data => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err => {
        if (err.name === "AbortError") {
          // console.log("fetch aborted");
        } else {
          setIsPending(false)
          setError(err.message)
        }
      });
    }, 1000);

    return () => abortCont.abort();
  }, [url])

  return {data, isPending, error}
}

export default useFetch;