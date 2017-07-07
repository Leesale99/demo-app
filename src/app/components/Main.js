import React from 'react';

const Main = () => {


  return (
    <div>
      <div className="listings">
        <header>
          <form className="form-inline">
            <label htmlFor="exampleInputEmail1">Search</label>
            <input type="search" className="form-control" id="exampleInputEmail1" placeholder="Search" />
            <button type="submit" className="btn btn-default">Submit</button>
          </form>
        </header>
        <div className="list-view">

        </div>
      </div>
    </div>
  );
}

export default Main;
