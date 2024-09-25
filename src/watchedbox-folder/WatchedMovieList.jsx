/* eslint-disable react/prop-types */

import WatchedMovie from "./WatchedMovie";

export default function WatchedMovieList({ watched, deleteWatchedMovie }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          key={movie.imdbID}
          movie={movie}
          deleteWatchedMovie={deleteWatchedMovie}
        />
      ))}
    </ul>
  );
}
