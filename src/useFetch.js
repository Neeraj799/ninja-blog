const useFetch = () => {
    useEffect(() => {
        setTimeout(() => {
        fetch('http://localhost:8000/blogs')
          .then(res => {
            if(!res.ok) {
              throw Error('could not fetch the data for that resource');
            }
            return res.json();
          })
          .then(data => {
            setBlogs(data)
            setIsPending(false);
            setError(null)
          })
          .catch(err => {
            setIsPending(false);
            setError(err.message);
          })
        },1000);
      }, []);
}