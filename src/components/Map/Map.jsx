import React from "react";
import GoogleMapReact from "google-map-react";
const Map = ({ setCoordinates, setBounds, coordinates, places }) => {
  console.log(coordinates);
  return (
    <div className="bg-slate-300 min-w-[300px] h-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_SECRET_KEY }}
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        options={""}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        onChildClick={""}
      >
        {places.length > 0 &&
          places.map((place, index) => {
            return (
              <div
                className=""
                lat={Number(place.latitude)}
                lng={Number(place.longitude)}
                key={index}
              >
                <div>
                  <img
                    className="h-[50px] w-[50px] object-cover rounded-[50%] border-[3px] hover:border-white border-red-500"
                    src={
                      place.photo
                        ? place.photo.images.large.url
                        : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
                    }
                  />
                </div>
              </div>
            );
          })}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
