import { useState } from "react";
import "./index.css";
import NavBar from "./navbar-folder/NavBar";
import Logo from "./utils-folder/Logo";
import SearchBar from "./utils-folder/SearchBar";
import FoundResultStats from "./utils-folder/FoundResultStats";
import Display from "./utils-folder/Display";
import MovieList from "./movielistbox-folder/MovieList";
import Box from "./utils-folder/Box";
import WatchedBoxSummary from "./watchedbox-folder/WatchedBoxSummary";
import WatchedMovieList from "./watchedbox-folder/WatchedMovieList";
import LoadingScreen from "./utils-folder/LoadingScreen";
import ErrorLoadingMessage from "./utils-folder/ErrorLoadingMessage";
import MovieInformation from "./movielistbox-folder/MovieInformation";
import useMovie from "./custom-hooks/useMovie";
import useLocalStorageState from "./custom-hooks/useLocalStorageState";

const KEY = "98688fa9";

export default function App() {
  const [query, setQuery] = useState("Inception");
  const [selectedId, setSelectedId] = useState(null);

  //setting up state with a callback function
  // const [watched, setWatched] = useState(function () {
  //   const storedValue = localStorage.getItem("watched"); //callback function gets data from locale stoage using a key
  //   return JSON.parse(storedValue); //return JSOn of the data
  // });

  const [watched, setWatched] = useLocalStorageState([], "watched");

  // const [watched, setWatched] = useState([]);

  const { movies, loader, error } = useMovie(query);

  const addWatchedMovie = (movie) => {
    setWatched((prevMovies) => [...prevMovies, movie]);
  };

  const deleteWatchedMovie = (idx) => {
    setWatched((prevMovies) => {
      return prevMovies.filter((movie) => movie.imdbID !== idx);
    });
  };

  //storing data to locale storage
  // useEffect(
  //   //also allows for sync between "wactched -state" and the localestorage
  //   //therefore we don't have to write a separate 'delete' code if we were to have to removed from locale storage
  //   function () {
  //     localStorage.setItem("watched", JSON.stringify(watched)); //needs a key, and storage data needs to be in string
  //   },
  //   [watched]
  // );

  return (
    <>
      <NavBar>
        <Logo />
        <SearchBar query={query} setQuery={setQuery} />
        <FoundResultStats movies={movies} />
      </NavBar>

      <Display>
        <Box>
          {!error && !loader && (
            <MovieList movies={movies} setSelectedId={setSelectedId} />
          )}{" "}
          {/* no errror and no loading state issue*/}
          {loader && <LoadingScreen />}
          {/* Loading issue -- no result found */}
          {error && <ErrorLoadingMessage error={error} />}
          {/* lost connection midway issues */}
        </Box>

        <Box>
          {selectedId ? (
            <MovieInformation
              apiKey={KEY}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              addWatchedMovie={addWatchedMovie}
              watched={watched}
            />
          ) : (
            <>
              <WatchedBoxSummary watched={watched} />
              <WatchedMovieList
                watched={watched}
                setWatched={setWatched}
                deleteWatchedMovie={deleteWatchedMovie}
              />
            </>
          )}
        </Box>

        {/* <Box>
          
        </Box> */}

        {/* <Box
          element={
            <>
              <WatchedBoxSummary watched={watched} />
              <WatchedMovieList watched={watched} />
            </> 
          }
          /> */}
      </Display>
    </>
  );
}
