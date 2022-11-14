import { useEffect } from "react";
import { loadModules } from "esri-loader";

export const useCreateMap = (mapRef, data) => {
  useEffect(() => {
    let view;
    console.log(data);

    const initMap = async (mapRef) => {
      const modules = [
        "esri/Map",
        "esri/views/MapView",
        "esri/Graphic",
        "esri/views/draw/Draw",
      ];
      const [Map, MapView, Graphic] = await loadModules(modules);
      const map = new Map({ basemap: "hybrid" });
      //hybrid
      //gray-vector
      view = new MapView({
        map: map,
        container: mapRef.current,
        center: {
          type: "point", // autocasts as new Point()
          latitude: 30.06841463238849,
          longitude: 31.019506768809368,
        },
        zoom: 18,
      });

      let markers = [];

      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        let marker = new Graphic({
          geometry: {
            type: "point", // autocasts as new Point()
            // longitude: 31.2357,
            // latitude: 30.0444,
            longitude: element.lon,
            latitude: element.lat,
          },
          symbol: {
            type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
            color: [226, 119, 40],
          },
        });
        console.log("Current Marker: ", marker);
        markers.push(marker);
      }

      // Create a graphic and add the geometry and symbol to it
      let FeildCenter = new Graphic({
        geometry: {
          type: "point", // autocasts as new Point()
          latitude: 30.06841463238849,
          longitude: 31.019506768809368,
        },
        symbol: {
          type: "simple-marker", // autocasts as new SimpleMarkerSymbol()
          color: [226, 200, 40],
        },
        attributes: {
          Name: "Feild 01", // The name of the pipeline
          Owner: "TransCanada", // The owner of the pipeline
          Length: "3,456 km", // The length of the pipeline
        },
        popupTemplate: {
          title: "{Name}",
          content: [
            {
              type: "fields",
              fieldInfos: [
                {
                  fieldName: "Name",
                },
                {
                  fieldName: "Owner",
                },
                {
                  fieldName: "Length",
                },
              ],
            },
          ],
        },
      });

      let paths = [
        [
          // first path
          [-97.06138, 32.837, 5],
          [-97.06133, 32.836, 6],
          [-97.06124, 32.834, 7],
        ],
        [
          // second path
          [-97.06326, 32.759],
          [-97.06298, 32.755],
        ],
      ];

      const polyline = {
        type: "polyline", // autocasts as new Polyline()
        paths: [
          //[lon, lat]
          [31.01952667582992, 30.06858756596796],
          [31.01927526064374, 30.068238216613373],
          [31.019731236176334, 30.06828464184785],
          [31.02000482149589, 30.068321782019737],
          [31.01952667582992, 30.06858756596796],

        ],
        // paths: boundryArr
      };

      // Create a symbol for drawing the line
      const lineSymbol = {
        type: "simple-line", // autocasts as SimpleLineSymbol()
        color: [0, 0, 255],
        width: 1,
      };

      const polylineGraphic = new Graphic({
        geometry: polyline,
        symbol: lineSymbol,
      });

      view.on("click", function (event) {
        // you must overwrite default click-for-popup
        // behavior to display your own popup
        view.popup.autoOpenEnabled = false;
        console.log("cords:", {
          lat: event.mapPoint.latitude,
          lon: event.mapPoint.longitude,
        });
      });

      view.graphics.add(FeildCenter);
      view.graphics.add(polylineGraphic);
      view.graphics.addMany(markers);
    };
    initMap(mapRef);
    return () => {
      view?.destroy();
    };
  }, [mapRef]);
};

const boundry = [
  {
    latitude: 30.068591047849118,
    longitude: 31.019522023873144,
  },
  {
    latitude: 30.068312496978074,
    longitude: 31.020026279168015,
  },
  {
    latitude: 30.06824750166202,
    longitude: 31.01977951593861,
  },
  {
    latitude: 30.06830321193553,
    longitude: 31.01975269384846,
  },
  {
    latitude: 30.068293926892125,
    longitude: 31.019420099930567,
  },
  {
    latitude: 30.068252144186,
    longitude: 31.019302082733898,
  },
];

const boundryArr = [
  [30.068591047849118, 31.019522023873144],
  [30.068312496978074, 31.020026279168015],
  [30.06824750166202, 31.01977951593861],
  [30.06830321193553, 31.01975269384846],
  [30.068293926892125, 31.019420099930567],
  [30.068252144186, 31.019302082733898],
];
