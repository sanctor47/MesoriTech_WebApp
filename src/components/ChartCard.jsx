import React from "react";
import styled from "styled-components";
import { v } from "../styles/variables";
import LineChartEx from "./LineChartEx";
import StatCard from "./StatCard";


// const ChartCard = ({data, options, params}) => {
const ChartCard = () => {
//   const labels = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//   ];
//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         position: "top",
//       },
//       // title: {
//       //   display: true,
//       //   text: "Chart.js Line Chart",
//       // },
//     },
//   };
//   const data = {
//     labels,
//     datasets: [
//       {
//         label: "Dataset 1",
//         data: labels.map(() =>
//           faker.datatype.number({ min: -1000, max: 1000 })
//         ),
//         borderColor: "rgb(255, 99, 132)",
//         backgroundColor: "rgba(255, 99, 132, 0.5)",
//       },
//       {
//         label: "Dataset 2",
//         data: labels.map(() =>
//           faker.datatype.number({ min: -1000, max: 1000 })
//         ),
//         borderColor: "rgb(53, 162, 235)",
//         backgroundColor: "rgba(53, 162, 235, 0.5)",
//       },
//     ],
//   };
  return (
    <SChartCard>
      <div className="header">
        <h1>Percpation</h1>
        <label htmlFor="res">Resolution: </label>
        <StyledSelect>
          <select name="res" id="res">
            <option value="feild-01">Per Hour</option>
            <option value="feild-02">Per Day</option>
            <option value="feild-03">Per Week</option>
            <option value="feild-04">Per Month</option>
          </select>
        </StyledSelect>
        <label htmlFor="res">From: </label>
        <StyledSelect>
          <select name="feild" id="feild">
            <option value="feild-01">Per Hour</option>
            <option value="feild-02">Per Day</option>
            <option value="feild-03">Per Week</option>
            <option value="feild-04">Per Month</option>
          </select>
        </StyledSelect>
        <label htmlFor="res">To: </label>
        <StyledSelect>
          <select name="feild" id="feild">
            <option value="feild-01">Per Hour</option>
            <option value="feild-02">Per Day</option>
            <option value="feild-03">Per Week</option>
            <option value="feild-04">Per Month</option>
          </select>
        </StyledSelect>
      </div>
      <div className="body">
        <div className="chartArea">
          <LineChartEx />
        </div>
        <div className="statArea">
          <StatCard />
        </div>
      </div>
    </SChartCard>
  );
};

export default ChartCard;

const SChartCard = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.bg};
  padding: ${v.lgSpacing};
  /* max-width: 1000px; */
  .header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
    h1 {
      font-size: 1.8rem;
    }
  }
  .body {
    display: flex;
    .chartArea {
      /* width: 620px; */
      display: flex;
      flex: 3;
    }
    .statArea {
      flex: 1;
      height: 100%;
      /* width: 100%; */
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const StyledSelect = styled.div`
  background: ${({ theme }) => theme.bgAlpha};
  border: 1px solid ${({ theme }) => theme.bg3};
  border-radius: ${v.borderRadius};
  display: flex;
  justify-content: center;
  align-items: center;
  select {
    padding: ${v.smSpacing} ${v.smSpacing};
    font-family: inherit;
    letter-spacing: inherit;
    font-size: 16px;
    width: 100%;
    outline: none;
    border: none;
    color: inherit;
    background: transparent;
  }
  option {
    padding: ${v.smSpacing} ${v.smSpacing};
    font-family: inherit;
    letter-spacing: inherit;
    font-size: 16px;
    width: 100%;
    outline: none;
    border: none;
    color: black;
    background: transparent;
  }
`;
