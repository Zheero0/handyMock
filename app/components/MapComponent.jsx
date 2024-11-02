import { useEffect, useState } from "react";
import { useLoadScript, GoogleMap, Circle } from "@react-google-maps/api";

export default function MapComponent({ location }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDSqru8c1Skuxm2uzsivAaIlhHC9Pjwc5M", // Make sure to keep your API key safe
  });

  const [center, setCenter] = useState({ lat: 51.5074, lng: -0.1278 }); // Default to London

  useEffect(() => {
    if (isLoaded && location) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: location }, (results, status) => {
        if (status === "OK" && results[0]) {
          const newLocation = results[0].geometry.location;
          const { lat, lng } = newLocation;
          const randomLocation = getRandomOffset(lat(), lng(), 2000);
          setCenter(randomLocation); // Set the randomized center
        } else {
          console.error(
            "Geocode was not successful for the following reason: " + status
          );
        }
      });
    }
  }, [isLoaded, location]); // Ensure dependencies are correct

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="flex-1 h-60 rounded-lg">
      <GoogleMap
        zoom={12}
        center={center}
        mapContainerStyle={{ width: "100%", height: "100%" }}
      >
        {/* Display Circle to represent the radius */}
        <Circle
          center={center}
          radius={2000} // Radius in meters
          options={{
            strokeColor: "#4A90E2",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#4A90E2",
            fillOpacity: 0.35,
          }}
        />
      </GoogleMap>
    </div>
  );
}

// Helper function to generate a random point within a specified radius (in meters)
function getRandomOffset(lat, lng, radius) {
  const y0 = lat;
  const x0 = lng;
  const rd = radius / 111300; // Convert radius from meters to degrees

  const u = Math.random();
  const v = Math.random();
  const w = rd * Math.sqrt(u);
  const t = 2 * Math.PI * v;
  const x = w * Math.cos(t);
  const y = w * Math.sin(t);

  return { lat: y0 + y, lng: x0 + x };
}


