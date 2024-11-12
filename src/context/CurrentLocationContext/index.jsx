import { createContext } from "react";
import { useState, useEffect } from "react";

export const CurrentLocationContext = createContext();

export function CurrentLocation({ children }) {
  const [currentLocation, setCurrentLocation] = useState({
    lat: 43.653226,
    lng: -79.3831843,
  });
  function setPosition(position) {
    setCurrentLocation({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  }
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(setPosition);
  }, []);

  return (
    <CurrentLocationContext.Provider value={currentLocation}>
      {children}
    </CurrentLocationContext.Provider>
  );
}
