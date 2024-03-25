


const Search = () => {
  return (
    <>
       <form action="/users/search" method="get" className="d-flex" role="search" id="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: "35%"}} name="search"/>
            <button className="btn btn-primary me-3" type="submit">Search</button>
          </form>
    </>
  );
};

export default Search;
