import styled from "styled-components";
import ChartCard from "../../components/ChartCard";
import Layout from "../../components/Layout";
import LineChartEx from "../../components/LineChartEx";
import { v } from "../../styles/variables";
// import ChartCard as CChartCard from "../../components/ChartCard";

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
      </ActionBar>
      <FeildCard />
      <GridArea>
        <div className="col-lg">
          <ChartCard />
          <ChartCard />
          <ChartCard />
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

const FeildCard = () => {
  return (
    <SFeildCard>
      <div className="left">
        <div className="header">
          <div className="name">Feild 01</div>
          <a href="#">Edit Information</a>
        </div>
        <div className="labe">Expermantal Feild</div>
        <div className="owner">Aser Nabil | Dina Farms</div>
        <div className="createdAt">2022/2/3 - 04:12:33</div>
        <div className="sensors">5/7 Active Sesnors</div>
        <div className="production">No Current Productions</div>
      </div>
      <div className="mid"></div>
      <div className="right"></div>
    </SFeildCard>
  );
};

const SFeildCard = styled.div`
  background: ${({ theme }) => theme.bg};
  padding: ${v.smSpacing};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  .left {
    width: 360px;
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    flex-direction: column;
    gap: 0.4rem;
    padding: ${v.smSpacing};
    .header {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      .name {
        font-size: 1.8rem;
        display: flex;
        /* justify-content: flex-end; */
      }
    }
    .label {
      font-size: 1.6rem;
    }
    .owner {
      font-size: 1.4rem;
    }
    .sensors {
      font-size: 1.2rem;
    }
    .production {
      font-size: 1.2rem;
    }
    .date {
      font-size: 1rem;
    }
  }
  .mid {
  }
  .right {
  }
`;

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
    flex: 5;
  }
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
  flex: 1;
  max-height: auto;
  min-width: 120px;
  max-width: 200px;
  width: 100%;
  /* border: 1px solid black; */
  background: ${({ theme }) => theme.bg};
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
