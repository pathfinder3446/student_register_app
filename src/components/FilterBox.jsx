import React, { useState } from "react";

function FilterBox({ infos, setInfos }) {
    const [filter, setFilter] = useState('')

    const handleSubmit = (e) =>{
        e.preventDefault();
        setInfos(infos.filter((item) => filter === item.name))
    }

  return (
    <div className="filter-box">
      <form onSubmit={handleSubmit} className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Öğrenci ismine göre arama"
          aria-label="Search"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          Filtrele
        </button>
      </form>
    </div>
  );
}

export default FilterBox;
