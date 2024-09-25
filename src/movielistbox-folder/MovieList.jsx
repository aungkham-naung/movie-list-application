/* eslint-disable react/prop-types */

import Movie from "./Movie";

export default function MovieList({ movies, setSelectedId }) {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movie key={movie.imdbID} movie={movie} setSelectedId={setSelectedId} />
      ))}
    </ul>
  );
}
