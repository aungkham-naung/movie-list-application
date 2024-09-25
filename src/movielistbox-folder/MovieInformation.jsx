/* eslint-disable react/prop-types */
import "../index.css";
import { useEffect, useState } from "react";
import Button from "../utils-folder/Button";
import StarRating from "../utils-folder/star-component/StarRating";
import LoadingScreen from "../utils-folder/LoadingScreen";
import useKeyPress from "../custom-hooks/useKeyPress";

export default function MovieInformation({
  apiKey,
  selectedId,
  setSelectedId,
  addWatchedMovie,
  watched,
}) {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const handleAddMovie = (movie) => {
    const newMovie = {
      imdbID: selectedId,
      Poster: movie.Poster,
      Title: movie.Title,
      runtime: Number(movie.Runtime.split(" ").at(0)),
      userRating: userRating,
      imdbRating: Number(movie.imdbRating),
    };
    addWatchedMovie(newMovie);
    setSelectedId(null);
  };

  const existingMovie = watched
    .map((movie) => movie.imdbID)
    .includes(selectedId);

  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  useEffect(
    function () {
      setIsLoading(true);
      async function fetchMovieDetails() {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=${apiKey}&i=${selectedId}`
        );
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      }
      fetchMovieDetails();
    },
    [selectedId, apiKey]
  );

  useEffect(
    function () {
      if (!movie.Title) return;
      document.title = `Movie | ${movie.Title}`;

      return function () {
        document.title = "usePopcorn";
      };
    },
    [movie.Title]
  );

  useKeyPress("Escape", () => setSelectedId(null));

  // useEffect(
  //   function () {
  //     function callback(e) {
  //       if (e.code === "Escape") {
  //         setSelectedId(null);
  //       }
  //     }
  //     document.addEventListener("keydown", callback);

  //     return function () {
  //       document.removeEventListener("keydown", callback);
  //     };
  //   },
  //   [setSelectedId]
  // );

  return (
    <div className="details" key={movie.imdbRating}>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <header>
            <Button
              className={"btn-toggle"}
              onClick={() => setSelectedId(null)}
            >
              ←
            </Button>
            <img src={movie.Poster} alt="" />
            <div className="details-overview">
              <h2>{movie.Title}</h2>
              <p>
                {movie.Released} - {movie.Runtime}
              </p>
              <p>{movie.genre}</p>
              <p>
                <span>⭐️</span>
                {movie.imdbRating} IMDb rating
              </p>
            </div>
          </header>

          <section>
            <div className="rating">
              {!existingMovie ? (
                <>
                  <StarRating
                    maxRating={10}
                    size="24px"
                    textColor="yellow"
                    onSetRating={setUserRating}
                  />
                  <Button
                    className={"btn-add"}
                    onClick={() => handleAddMovie(movie)}
                  >
                    + Add to list
                  </Button>
                </>
              ) : (
                <p>
                  You already rated this movie {watchedUserRating}{" "}
                  <span>⭐️</span>
                </p>
              )}
            </div>

            <p>
              <em>{movie.Plot}</em>
            </p>
            <p>
              <em>Starring {movie.Actors}</em>
            </p>
            <p>
              <em>Directed by {movie.Director}</em>
            </p>
          </section>
        </>
      )}
    </div>
  );
}
