import { useState, useEffect } from "react";
const KEY = "98688fa9";

export default function useMovie(query) {
  const [movies, setMovies] = useState([]);
  const [loader, setLoader] = useState(false); //state for loading issue
  const [error, setError] = useState(""); //state for error message

  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setLoader(true);
          setError("");
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );

          if (!res.ok) throw new Error("Something went wrong"); //res is not getting any data/connection

          const data = await res.json();
          if (data.Response === "False") throw new Error("Movie not found!"); //query search returns false
          setMovies(data.Search);
          setError("");
        } catch (err) {
          //catching error
          if (err.name !== "AbortError") {
            setError(err.message);
          }
        } finally {
          //this statement is always execute in the end of try and catch
          setLoader(false); //loader is set to false not to render the Loading Page once we found the results we want
        }
      }

      if (query.length < 3) {
        //we are doing this not to render MovieNotFound in the initial load or the query length less than 3
        setMovies([]);
        setError(""); //setError needs to be set to "" not to display the error message of "MovieNotFound"
        return;
      }

      fetchMovies();
      return function () {
        controller.abort();
      };
    },
    [query]
  );
  return { movies, loader, error };
}
