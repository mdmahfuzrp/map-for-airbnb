import React from "react";

const MapCard = ({ place }) => {
  return (
    <div className="rounded-[4px] shadow-md p-2 border border-opacity-50">
      <img
        className="h-[180px] rounded-t-[8px] w-full object-cover"
        src={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
      />
      <div>
        <h1 className="mt-2 mb-1">{place.name}</h1>
        <div className="flex items-center justify-between text-red-500">
          <p>Price</p>
          <p>
            <span>{place.price}</span>
          </p>
        </div>
        <div className="flex opacity-50 items-center justify-between text-[14px]">
          <p>Ranking</p>
          <span>{place.ranking}</span>
        </div>
        <div className="flex my-3 flex-wrap text-[14px] gap-x-2 gap-y-[4px]">
          {place.cuisine &&
            place.cuisine.length > 0 &&
            place.cuisine.map(({ name }) => (
              <p className="bg-slate-300 px-2 rounded-[20px]">{name}</p>
            ))}
        </div>
      </div>
      <div className="flex mt-1 items-center justify-between">
        <button
          className="bg-red-500 text-white px-3 py-[6px] hover:bg-red-700 duration-150 rounded-[4px]"
          onClick={() => window.open(place.web_url, "_blank")}
        >
          Trip Advisor
        </button>
        <button
          className="bg-red-500 text-white px-3 py-[6px] hover:bg-red-700 duration-150 rounded-[4px]"
          onClick={() => window.open(place.website, "_blank")}
        >
          Website
        </button>
      </div>
    </div>
  );
};

export default MapCard;
