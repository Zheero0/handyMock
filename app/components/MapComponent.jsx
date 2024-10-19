import { useEffect, useState } from "react";
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";

export default function MapComponent({ location }) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyDSqru8c1Skuxm2uzsivAaIlhHC9Pjwc5M", // Replace with your actual Google Maps API key
  });

  const [center, setCenter] = useState({ lat: 51.5074, lng: -0.1278 }); // Initial center: London

  useEffect(() => {
    if (isLoaded && location) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: location }, (results, status) => {
        if (status === "OK" && results[0]) {
          const newLocation = results[0].geometry.location;
          setCenter({ lat: newLocation.lat(), lng: newLocation.lng() });
        } else {
          console.error(
            "Geocode was not successful for the following reason: " + status
          );
        }
      });
    }
  }, [isLoaded, location]);

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading...</div>;

  return (
    <div className="flex-1 h-60  rounded-lg">
      <GoogleMap
        zoom={10}
        center={center}
        mapContainerStyle={{ width: "100%", height: "100%" }}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}
