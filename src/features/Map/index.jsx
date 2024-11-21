import { useContext } from "react";
import { CurrentLocationContext } from "../../context/CurrentLocationContext";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
} from "@vis.gl/react-google-maps";

const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const mapId = import.meta.env.VITE_MAP_ID;

export function LocationMap({ locations }) {
  const currentLocation = useContext(CurrentLocationContext);
  const markers = locations.map((location) => {
    return (
      <AdvancedMarker
        key={location.id}
        position={{
          lat: Number(location.lat),
          lng: Number(location.lng),
        }}
      />
    );
  });
  return (
    <APIProvider apiKey={googleMapsApiKey}>
      <Map
        style={{ width: "100%", height: "auto", aspectRatio: 1 }}
        mapId={mapId}
        defaultCenter={currentLocation}
        defaultZoom={10}
        disableDefaultUI
      >
        <AdvancedMarker position={currentLocation}>
          <Pin
            background={"#0f9d58"}
            borderColor={"#006425"}
            glyphColor={"#60d98f"}
          />
        </AdvancedMarker>
        {markers}
      </Map>
    </APIProvider>
  );
}
