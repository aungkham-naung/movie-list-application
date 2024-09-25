/* eslint-disable react/prop-types */
import Button from "../utils-folder/Button";

export default function WatchedMovie({ movie, deleteWatchedMovie }) {
  return (
    <li>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
      </div>
      <Button
        onClick={() => deleteWatchedMovie(movie.imdbID)}
        className={"btn-delete"}
      >
        -
      </Button>
    </li>
  );
}
