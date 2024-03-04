import React, { useState } from "react";
import PlaceDetails from "../PlaceDetails/PlaceDetails";

const List = ({ places }) => {
  console.log(places);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  return (
    <div className="px-5 sticky h-[85vh] overflow-y-auto">
      <h1 className="mt-3 mb-2 text-[18px] opacity-70">
        Choose specific options
      </h1>
      <div className="flex justify-between w-full gap-3">
        <select
          name=""
          value={type}
          id=""
          onChange={(e) => setType(e.target.value)}
          className="py-1 focus:border-none focus:outline-none w-full px-2 rounded-[4px]"
        >
          <option value={"restaurant"}>Restaurant</option>
          <option value={"hotels"}>Hotels</option>
          <option value={"attractions"}>Attractions</option>
        </select>
        <select
          name=""
          value={rating}
          id=""
          onChange={(e) => setRating(e.target.value)}
          className="py-1 focus:border-none focus:outline-none w-full px-2 rounded-[4px]"
        >
          <option value={0}>All</option>
          <option value={3}>Above 3.0</option>
          <option value={4}>Above 4.0</option>
          <option value={4.5}>Above 4.5</option>
        </select>
      </div>

      <div className="grid grid-cols-1 gap-y-5 pt-5">
        {places.length > 0 &&
          places.map((place, index) => {
            return (
              <div>
                <PlaceDetails place={place} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default List;
