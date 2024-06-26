import { sortPlacesByDistance } from "../loc.js";

import Error from "./Error.jsx";
import Places from "./Places.jsx";

import { fetchAvailablePlaces } from "../http.js";

import { useFetch } from "../hooks/useFetch.js";

async function fetchSortedPlaces() {
  const places = await fetchAvailablePlaces();

  return new Promise((resolve,reject)=>{
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(
        places,
        position.coords.latitute,
        position.coords.longitude
      );

      resolve(sortedPlaces)
  })

  });
}

export default function AvailablePlaces({ onSelectPlace }) {
  const {
    isFetching,
    error,
    fetchedData: availablePlaces,
  } = useFetch(fetchSortedPlaces ,[]);

  if (error) {
    return <Error title="An error occured!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
