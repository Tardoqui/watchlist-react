export function WatchList(props) {
  function handleRemove(movie) {
    const newState = [...props.favMovies].filter(
      (currentMovie) => currentMovie !== movie
    );

    props.setFavMovies(newState);
  }

  return (
    <div className="m-2 m-4">
      <h2>Minha lista</h2>
      <ul className="list-group">
        {props.favMovies.map((currentMovie) => {
          return (
            <>
              <li className="list-group-item mt-2">
                {currentMovie.original_title}
              </li>
              <button
                className=" btn
                btn-danger"
                onClick={() => {
                  handleRemove(currentMovie);
                }}
              >
                Remover da lista
              </button>
            </>
          );
        })}
      </ul>
    </div>
  );
}
