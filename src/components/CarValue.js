import React from "react";
import { useSelector } from "react-redux";

const CarValue = () => {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    const filteredCars = data.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    let i = 0;
    for (let car of filteredCars) {
      i += car.cost;
    }
    return i;
  });
  return <div className="car-value">Total cost: ${totalCost}</div>;
};

export default CarValue;
