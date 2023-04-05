import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

const CarSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.cars.searchTerm;
  });
  const handlechangeSearchTerm = (event) => {
    dispatch(changeSearchTerm(event.target.value));
  };
  return (
    <div className="list-header">
      <h3 className="title is-3">Cars</h3>
      <div className="search field is-horizontal">
        <label className="label">Search</label>
        <input
          className="input"
          value={searchTerm}
          onChange={handlechangeSearchTerm}
        />
      </div>
    </div>
  );
};

export default CarSearch;