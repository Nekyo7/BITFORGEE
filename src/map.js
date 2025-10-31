import { useEffect, useRef } from "react";

export default function Map() {
  const mapRef = useRef(null);

  useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: 28.6139, lng: 77.2090 },
      zoom: 12,
    });

    new window.google.maps.Marker({
      position: { lat: 28.6139, lng: 77.2090 },
      map,
      title: "Delhi",
    });
  }, []);

  return <div ref={mapRef} style={{ width: "100%", height: "400px" }} />;
}
