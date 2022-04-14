export function MoviesList(props) {
  function handleFav(movie) {
    props.setFavMovies([...props.favMovies, movie]);
  }

  return (
    <div className="m-2">
      <h2>Filmes populares</h2>
      <ul className="list-group">
        {props.movies.map((currentMovie) => {
          return (
            <>
              <li className="list-group-item mt-2">
                {currentMovie.original_title}
              </li>
              <button
                className="btn btn-primary"
                onClick={() => {
                  handleFav(currentMovie);
                }}
              >
                s2
              </button>
            </>
          );
        })}
      </ul>
    </div>
  );
}
