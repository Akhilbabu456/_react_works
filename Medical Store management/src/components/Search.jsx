


const Search = () => {
  return (
    <>
       <form action="/users/search" method="get" className="d-flex mb-4" role="search" id="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: "35%"}} name="search"/>
           
          </form>
    </>
  );
};

export default Search;
