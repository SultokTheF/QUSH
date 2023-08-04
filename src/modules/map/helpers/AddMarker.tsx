import mapboxgl from "mapbox-gl";

const addMarkerToMap = (map: any, lng: number, lat: number): void => {
  new mapboxgl.Marker().setLngLat([lng, lat]).addTo(map);
};

export { addMarkerToMap };
