import "mapbox-gl/dist/mapbox-gl.css";
import { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import axios from "axios";


function PlaygroundMap() {
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_TOKEN;
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/inclusiveplayworks/clgsh6lgj000z01q1apkg1ft1",
      center: [-114.0708, 51.0486],
      zoom: 10
    });

    axios
      .get("http://localhost:5005/api/playgrounds")
      .then(response => {
        const playgroundData = response.data;

        const newMarkers = playgroundData.map(playground => {
          const markerElement = document.createElement("div");
					markerElement.classList.add("playground-marker");


          const newMarker = new mapboxgl.Marker({
            element: markerElement,
            color: "#3FB1CE",
            draggable: false
          })
            .setLngLat([playground.longitude, playground.latitude])
            .setPopup(new mapboxgl.Popup({ offset: 15 }).setHTML(`<h3 style='color: black;'>${playground.name}</h3><p style='color: black;'>${playground.location}</p><p style='color: black;'>${playground.quadrant}</p>`))
            .addTo(map);

          return newMarker;
        });

        setMarkers(newMarkers);

        return () => {
          newMarkers.forEach(marker => marker.remove());
          map.remove();
        };
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div
      id="map"
      style={{
        height: "85vh",
        width: "75vw",
        display: "flex",
        justifyContent: "grow",
        alignItems: "center"
      }}
    />
  );
}

export default PlaygroundMap;
