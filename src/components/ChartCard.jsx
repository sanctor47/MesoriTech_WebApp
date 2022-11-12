import React from "react";
import styled from "styled-components";
import { getLineChartData } from "../services/Readings.services";
import { v } from "../styles/variables";
import LineChartEx from "./LineChartEx";
import ReadingCard from "./ReadingCard";
import StatCard from "./StatCard";

// const ChartCard = ({data, options, params}) => {
const ChartCard = ({ id, sensor }) => {
  const [readings, setReadings] = React.useState();
  const [chartData, setChartData] = React.useState();

  console.log("From Chart: ", readings);

  const createData = () => {
    let labels = [];
    let data = [];
    for (let index = 0; index < readings.length; index++) {
      const element = readings[index];
      labels.push(element.createdAt);
      data.push(element.value);
    }
    setChartData({
      labels,
      datasets: [
        {
          label: sensor.name,
          data,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
      ],
    });
  };

  const GetLatestReadings = async () => {
    try {
      const readings = await getLineChartData(id, sensor.name);
      // console.log("Readings: ", readings);
      setReadings(readings);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (id) {
      GetLatestReadings();
    }
  }, []);
  React.useEffect(() => {
    if (readings) {
      // console.log("readings: ", readings);
      createData();
    }
  }, [readings]);

  return (
    <SChartCard>
      <div className="header">
        <h1>{sensor.name}</h1>
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
          {chartData ? <LineChartEx data={chartData} /> : <h1>Loading...</h1>}
        </div>
        <div className="statArea">
          <ReadingCard id={id} sensor={sensor} />
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
  max-height: 420px;
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
  max-height: 420px;

      /* height: 100%; */
      /* max-height: 300px; */
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
