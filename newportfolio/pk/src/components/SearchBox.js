import React from 'react'

const SearchBox = (props) => {
  return (
    <div className="col col-sm-4">
      <input
      
        className="form-control"

    /* searching the value from the app pages searchbox */
        value={props.value}

    /* on the change pass in props and in an event for the searchvalue */
        onChange={(event) => props.setSearchValue(event.target.value)}

        placeholder="SEARCH...."
      >   
      </input>
    </div>
  );
}

export default SearchBox