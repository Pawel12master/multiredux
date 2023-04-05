import React from "react";
import { CarForm, CarList, CarSearch, CarValue } from "./components";

const App = () => {
  return (
    <div className="container is-fluid">
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
};

export default App;
