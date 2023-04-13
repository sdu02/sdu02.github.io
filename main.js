import Feature from 'ol/Feature.js';
import Map from 'ol/Map.js';
import View from 'ol/View.js';
import {Circle} from 'ol/geom.js';
import {OSM, Vector as VectorSource} from 'ol/source.js';
import {Style} from 'ol/style.js';
import {Tile as TileLayer, Vector as VectorLayer} from 'ol/layer.js';

const circleFeature_1 = new Feature({
  geometry: new Circle([-13594765.018353105, 6052222.702048948], 50000), // Redmond, WA
});

const circleFeature_2 = new Feature({
  geometry: new Circle([-13598468.395172818, 4502293.801652151], 50000),// Palo Alto, CA
});

const circleFeature_3 = new Feature({
  geometry: new Circle([-13567279.34552032, 4531725.157703301], 50000),// Pleasanton, WA
});

const circleFeature_4 = new Feature({
  geometry: new Circle([8112857.733622108, 2164573.622452341], 50000),// Mumbai, India
});

const circleFeature_5 = new Feature({
  geometry: new Circle([-13595896.247018546, 4581604.935965281], 50000),// Martinez, CA
});

circleFeature_1.setStyle(
  new Style({
    renderer(coordinates, state) {
      const [[x, y], [x1, y1]] = coordinates;
      const ctx = state.context;
      const dx = x1 - x;
      const dy = y1 - y;
      const radius = Math.sqrt(dx * dx + dy * dy);

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
      ctx.fillStyle = 'blue';
      ctx.fill();

      ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
      ctx.strokeStyle = "blue";
      ctx.stroke();
    },
  })
);



circleFeature_2.setStyle(
  new Style({
    renderer(coordinates, state) {
      const [[x, y], [x1, y1]] = coordinates;
      const ctx = state.context;
      const dx = x1 - x;
      const dy = y1 - y;
      const radius = Math.sqrt(dx * dx + dy * dy);

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
      ctx.fillStyle = 'red';
      ctx.fill();

      ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
      ctx.strokeStyle = "red";
      ctx.stroke();
    },
  })
);

circleFeature_3.setStyle(
  new Style({
    renderer(coordinates, state) {
      const [[x, y], [x1, y1]] = coordinates;
      const ctx = state.context;
      const dx = x1 - x;
      const dy = y1 - y;
      const radius = Math.sqrt(dx * dx + dy * dy);

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
      ctx.fillStyle = 'red';
      ctx.fill();

      ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
      ctx.strokeStyle = "red";
      ctx.stroke();
    },
  })
);

circleFeature_4.setStyle(
  new Style({
    renderer(coordinates, state) {
      const [[x, y], [x1, y1]] = coordinates;
      const ctx = state.context;
      const dx = x1 - x;
      const dy = y1 - y;
      const radius = Math.sqrt(dx * dx + dy * dy);

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
      ctx.fillStyle = 'green';
      ctx.fill();

      ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
      ctx.strokeStyle = "green";
      ctx.stroke();
    },
  })
);

circleFeature_5.setStyle(
  new Style({
    renderer(coordinates, state) {
      const [[x, y], [x1, y1]] = coordinates;
      const ctx = state.context;
      const dx = x1 - x;
      const dy = y1 - y;
      const radius = Math.sqrt(dx * dx + dy * dy);

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
      ctx.fillStyle = 'red';
      ctx.fill();

      ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
      ctx.strokeStyle = "red";
      ctx.stroke();
    },
  })
);

new Map({
  layers: [
    new TileLayer({
      source: new OSM(),
      visible: true,
    }),
    new VectorLayer({
      source: new VectorSource({
        features: [circleFeature_1, circleFeature_2, circleFeature_3, circleFeature_4, circleFeature_5],
      }),
    }),
  ],
  target: 'map',
  view: new View({
    center: [-13431824.230650192, 4204882.182488435], // Cal Poly
    resolution: 100,
  }),
});