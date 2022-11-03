import { Line } from "react-chartjs-2";
import * as faker from "faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    // title: {
    //   display: true,
    //   text: "Chart.js Line Chart",
    // },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
const LineChartEx = () => {
  return (
    <>
      <Line options={options} data={data} />
    </>
  );
};

export default LineChartEx;

// // install (please make sure versions match peerDependencies)
// // yarn add @nivo/core @nivo/line
// import { ResponsiveLine } from "@nivo/line";

// const data = [
//     {
//       "id": "japan",
//       "color": "hsl(341, 70%, 50%)",
//       "data": [
//         {
//           "x": "plane",
//           "y": 233
//         },
//         {
//           "x": "helicopter",
//           "y": 163
//         },
//         {
//           "x": "boat",
//           "y": 27
//         },
//         {
//           "x": "train",
//           "y": 181
//         },
//         {
//           "x": "subway",
//           "y": 148
//         },
//         {
//           "x": "bus",
//           "y": 161
//         },
//         {
//           "x": "car",
//           "y": 40
//         },
//         {
//           "x": "moto",
//           "y": 176
//         },
//         {
//           "x": "bicycle",
//           "y": 71
//         },
//         {
//           "x": "horse",
//           "y": 66
//         },
//         {
//           "x": "skateboard",
//           "y": 245
//         },
//         {
//           "x": "others",
//           "y": 277
//         }
//       ]
//     },
//     {
//       "id": "france",
//       "color": "hsl(159, 70%, 50%)",
//       "data": [
//         {
//           "x": "plane",
//           "y": 215
//         },
//         {
//           "x": "helicopter",
//           "y": 201
//         },
//         {
//           "x": "boat",
//           "y": 37
//         },
//         {
//           "x": "train",
//           "y": 11
//         },
//         {
//           "x": "subway",
//           "y": 229
//         },
//         {
//           "x": "bus",
//           "y": 53
//         },
//         {
//           "x": "car",
//           "y": 265
//         },
//         {
//           "x": "moto",
//           "y": 220
//         },
//         {
//           "x": "bicycle",
//           "y": 114
//         },
//         {
//           "x": "horse",
//           "y": 245
//         },
//         {
//           "x": "skateboard",
//           "y": 96
//         },
//         {
//           "x": "others",
//           "y": 268
//         }
//       ]
//     },
//     {
//       "id": "us",
//       "color": "hsl(22, 70%, 50%)",
//       "data": [
//         {
//           "x": "plane",
//           "y": 74
//         },
//         {
//           "x": "helicopter",
//           "y": 198
//         },
//         {
//           "x": "boat",
//           "y": 216
//         },
//         {
//           "x": "train",
//           "y": 53
//         },
//         {
//           "x": "subway",
//           "y": 269
//         },
//         {
//           "x": "bus",
//           "y": 262
//         },
//         {
//           "x": "car",
//           "y": 279
//         },
//         {
//           "x": "moto",
//           "y": 197
//         },
//         {
//           "x": "bicycle",
//           "y": 170
//         },
//         {
//           "x": "horse",
//           "y": 39
//         },
//         {
//           "x": "skateboard",
//           "y": 56
//         },
//         {
//           "x": "others",
//           "y": 132
//         }
//       ]
//     },
//     {
//       "id": "germany",
//       "color": "hsl(86, 70%, 50%)",
//       "data": [
//         {
//           "x": "plane",
//           "y": 6
//         },
//         {
//           "x": "helicopter",
//           "y": 143
//         },
//         {
//           "x": "boat",
//           "y": 277
//         },
//         {
//           "x": "train",
//           "y": 216
//         },
//         {
//           "x": "subway",
//           "y": 255
//         },
//         {
//           "x": "bus",
//           "y": 190
//         },
//         {
//           "x": "car",
//           "y": 59
//         },
//         {
//           "x": "moto",
//           "y": 239
//         },
//         {
//           "x": "bicycle",
//           "y": 126
//         },
//         {
//           "x": "horse",
//           "y": 169
//         },
//         {
//           "x": "skateboard",
//           "y": 7
//         },
//         {
//           "x": "others",
//           "y": 9
//         }
//       ]
//     },
//     {
//       "id": "norway",
//       "color": "hsl(134, 70%, 50%)",
//       "data": [
//         {
//           "x": "plane",
//           "y": 104
//         },
//         {
//           "x": "helicopter",
//           "y": 154
//         },
//         {
//           "x": "boat",
//           "y": 108
//         },
//         {
//           "x": "train",
//           "y": 35
//         },
//         {
//           "x": "subway",
//           "y": 191
//         },
//         {
//           "x": "bus",
//           "y": 224
//         },
//         {
//           "x": "car",
//           "y": 24
//         },
//         {
//           "x": "moto",
//           "y": 17
//         },
//         {
//           "x": "bicycle",
//           "y": 141
//         },
//         {
//           "x": "horse",
//           "y": 64
//         },
//         {
//           "x": "skateboard",
//           "y": 202
//         },
//         {
//           "x": "others",
//           "y": 19
//         }
//       ]
//     }
//   ]

// // make sure parent container have a defined height when using
// // responsive component, otherwise height will be 0 and
// // no chart will be rendered.
// // website examples showcase many properties,
// // you'll often use just a few of them.
// const LineChartEx = () => (
//   <ResponsiveLine
//     data={data}
//     // animate={false}
//     margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
//     xScale={{ type: "point" }}
//     yScale={{
//       type: "linear",
//       min: "auto",
//       max: "auto",
//       stacked: true,
//       reverse: false,
//     }}
//     yFormat=" >-.2f"
//     axisTop={null}
//     axisRight={null}
//     axisBottom={{
//       orient: "bottom",
//       tickSize: 5,
//       tickPadding: 5,
//       tickRotation: 0,
//       legend: "transportation",
//       legendOffset: 36,
//       legendPosition: "middle",
//     }}
//     axisLeft={{
//       orient: "left",
//       tickSize: 5,
//       tickPadding: 5,
//       tickRotation: 0,
//       legend: "count",
//       legendOffset: -40,
//       legendPosition: "middle",
//     }}
//     lineWidth={7}
//     pointSize={10}
//     pointColor={{ theme: "background" }}
//     pointBorderWidth={2}
//     pointBorderColor={{ from: "serieColor" }}
//     pointLabelYOffset={-12}
//     useMesh={true}
//     legends={[
//       {
//         anchor: "bottom-right",
//         direction: "column",
//         justify: false,
//         translateX: 100,
//         translateY: 0,
//         itemsSpacing: 0,
//         itemDirection: "left-to-right",
//         itemWidth: 80,
//         itemHeight: 20,
//         itemOpacity: 0.75,
//         symbolSize: 12,
//         symbolShape: "circle",
//         symbolBorderColor: "rgba(0, 0, 0, .5)",
//         effects: [
//           {
//             on: "hover",
//             style: {
//               itemBackground: "rgba(0, 0, 0, .03)",
//               itemOpacity: 1,
//             },
//           },
//         ],
//       },
//     ]}
//   />
// );

// export default LineChartEx;
