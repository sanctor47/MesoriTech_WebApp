import { useRef } from "react";
import { useCreateMap } from "./useCreateMap";
const Map = ({data}) => {
  const mapRef = useRef(null);
  useCreateMap(mapRef, data);
  return <div className="map-view" ref={mapRef}></div>;
};
export default Map;
