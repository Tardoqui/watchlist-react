import { useState } from "react";

import moviesData from "./data/movies";
import { MoviesList } from "./components/MoviesList";
import { WatchList } from "./components/WatchList";
import { SearchBar } from "./components/SearchBar";

function App() {
  const [movies, setMovies] = useState([...moviesData]);
  const [backUp, setBackUp] = useState([...moviesData]);
  const [favMovies, setFavMovies] = useState([]);

  function filterMovies(filterParams) {
    if (filterParams === "") {
      setMovies(backUp);
      return;
    }

    const filtred = movies.filter((currentMovie) => {
      return currentMovie.original_title
        .toLowerCase()
        .includes(filterParams.toLowerCase());
    });

    setMovies(filtred);
  }

  return (
    <>
      <SearchBar filterState={filterMovies} />
      <div className="d-flex">
        <MoviesList
          movies={movies}
          favMovies={favMovies}
          setFavMovies={setFavMovies}
        />
        <WatchList favMovies={favMovies} setFavMovies={setFavMovies} />
      </div>
    </>
  );
}

export default App;
