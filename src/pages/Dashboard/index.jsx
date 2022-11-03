import styled from "styled-components";
import Layout from "../../components/Layout";
import LineChartEx from "../../components/LineChartEx";
import { v } from "../../styles/variables";

const Dashboard = () => {
  return (
    <Layout>
      <ActionBar>
        <div className="left">
          <label for="feild">Feild Select:</label>
          <StyledSelect>
            <select name="feild" id="feild">
              <option value="feild-01">feild-01</option>
              <option value="feild-02">feild-02</option>
              <option value="feild-03">feild-03</option>
              <option value="feild-04">feild-04</option>
            </select>
          </StyledSelect>
        </div>
      </ActionBar>
      <GridArea>
        <div className="col-lg">
          <ChartCard>
            <div className="title">Percpeation</div>
            <StyledSelect>
              <select name="feild" id="feild">
                <option value="feild-01">Per Hour</option>
                <option value="feild-02">Per Day</option>
                <option value="feild-03">Per Week</option>
                <option value="feild-04">Per Month</option>
              </select>
            </StyledSelect>
            <LineChartEx />
          </ChartCard>
        </div>
        <div className="col-sm">
          <StatCard />
          <StatCard />
          <StatCard />
          <StatCard />
          <StatCard />
        </div>
      </GridArea>
    </Layout>
  );
};

export default Dashboard;

const GridArea = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  .col-sm {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    /* width: 100%; */
    flex: 1;
  }
  .col-lg {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    /* width: 100%; */
    flex: 3;
  }
`;

const ChartCard = styled.div`
  /* flex: 3; */
  max-height: 400px;
  background: ${({ theme }) => theme.bg};
  padding: ${v.lgSpacing};
`;

const ActionBar = styled.div`
  background: ${({ theme }) => theme.bg};
  padding: ${v.lgSpacing};
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .right {
  }

  .left {
    display: flex;
    gap: 0.8rem;
    align-items: center;

    label {
      font-size: 18px;
    }
  }
`;

const StyledSelect = styled.div`
  background: ${({ theme }) => theme.bgAlpha};
  border: 1px solid ${({ theme }) => theme.bg3};
  border-radius: ${v.borderRadius};
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

const StatCard = () => {
  return (
    <SStatCard>
      <div className="title">Sum Air Temprature</div>
      <div className="body">
        <div className="value">30.5 C</div>
        <div className="subTitle">Air Temp</div>
      </div>
      <div className="footer">
        <div className="daycount">9/19 Days</div>
        <div className="extra">Since January</div>
      </div>
    </SStatCard>
  );
};

const SStatCard = styled.div`
  /* position: relative; */
  flex: 1;
  max-height: 200px;
  /* border: 1px solid black; */
  background: ${({ theme }) => theme.bg};
  /* padding: ${v.lgSpacing}; */
  padding: ${v.smSpacing};
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  gap: 1rem;
  .title {
    width: 100%;
    font-size: 24px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .body {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .value {
      width: 100%;
      font-size: 42px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      /* border: 1px solid black; */
    }
    .subTitle {
      /* border: 1px solid black; */
    }
  }
  .footer {
    /* border: 1px solid black; */

    .daycount {
    }
    .extra {
    }
  }
`;
