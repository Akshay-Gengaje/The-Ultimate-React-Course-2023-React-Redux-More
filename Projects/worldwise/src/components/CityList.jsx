import React from "react";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";

const CityList = ({ cities, isLoading }) => {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );
  return (
    <ul className="">
      {cities.map((city, index) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
};

export default CityList;