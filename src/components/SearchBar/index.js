export function SearchBar(props) {
  return (
    <div style={{ width: "80%" }} className="mt-2 ms-1 me-1">
      <input
        className="form-control"
        type="text"
        placeholder="Homi Arana"
        onKeyUp={(event) => {
          props.filterState(event.target.value);
        }}
      />
    </div>
  );
}
