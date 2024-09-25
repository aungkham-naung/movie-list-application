/* eslint-disable react/prop-types */

export default function Movie({ movie, setSelectedId }) {
  return (
    <li
      onClick={() =>
        setSelectedId((prevId) =>
          prevId === movie.imdbID ? null : movie.imdbID
        )
      }
      style={{ cursor: "pointer" }}
    >
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
