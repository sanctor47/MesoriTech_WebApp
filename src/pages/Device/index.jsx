import { useParams } from "react-router-dom";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { v } from "../../styles/variables";
import { MdRouter } from "react-icons/md";
import { RiRouterLine } from "react-icons/ri";
import mapEx from "../../assets/mapEx.png";
import LineChartEx from "../../components/LineChartEx";

const DeviceData = {
  name: "Soil Sensor 01",
  label: "Feild 01 Soil Sensor 01",
  feild: "Feild 01",
  status: true,
  gateway: false,
  createdAt: "2022/2/3",
  battery: "60%",
  sensors: [
    {
      name: "Soil Moisture",
      type: "Moisture",
      medium: "Soil",
      lastReading: "32 %",
      lastReadingDate: "2022/2/4-12:40:23",
    },
    {
      name: "Soil Temprature",
      type: "Temprature",
      medium: "Soil",
      lastReading: "24.2 C",
      lastReadingDate: "2022/2/4-12:40:23",
    },
    {
      name: "Air Temprature",
      type: "Temprature",
      medium: "Soil",
      lastReading: "24.2 C",
      lastReadingDate: "2022/2/4-12:40:23",
    },
    {
      name: "Air Humidity",
      type: "Temprature",
      medium: "Soil",
      lastReading: "20 RH",
      lastReadingDate: "2022/2/4-12:40:23",
    },
  ],
};

const Device = () => {
  const params = useParams();
  console.log(params);
  return (
    <Layout>
      <Container>
        <Row>
          <DeviceCard data={DeviceData} />
          <BateryCard>
            <div className="title">Battery Status</div>
            <div className="value">69%</div>
            <div className="status">Healthy</div>
            <div className="date">2022/2/3 - 02:30:50</div>
          </BateryCard>
          <StatusCard>
            <div className="title">Device Status</div>
            <div className="value">Active</div>
            <div className="date">2022/2/3 - 02:30:50</div>
          </StatusCard>
        </Row>
        <ReadingArea data={DeviceData} />
        <ChartCard>
        <LineChartEx />

        </ChartCard>
      </Container>
    </Layout>
  );
};

export default Device;

const ChartCard = styled.div`
   max-height: 400px;
  background: ${({ theme }) => theme.bg};
  padding: ${v.lgSpacing};
`

const BateryCard = styled.div`
  background: ${({ theme }) => theme.bg};
  min-width: 192px;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  /* padding: ${v.smSpacing}; */
  /* border: 1px solid black; */
  height: 100%;
  /* background: ${({ theme }) => theme.bg}; */

  .title {
    font-size: 1.4rem;
  }
  .value {
    font-size: 1.8rem;
  }
  .date {
    font-size: 1.2rem;
  }

`;
const StatusCard = styled.div`
  background: ${({ theme }) => theme.bg};
  min-width: 192px;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  /* padding: ${v.smSpacing}; */
  /* border: 1px solid black; */
  height: 100%;

  .title {
    font-size: 1.4rem;
  }
  .value {
    font-size: 1.8rem;
  }
  .date {
    font-size: 1.2rem;
  }

`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  gap: 1rem;
  width: 100%;
  padding-top: ${v.smSpacing};
  position: relative;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  /* padding: ${v.smSpacing}; */
`;

const DeviceCard = ({ data }) => {
  return (
    <>
      <SDeviceCard>
        <div className="iconContainer">
          {data.gateway ? (
            <>
              <MdRouter />
              <p>Gateway</p>
            </>
          ) : (
            <>
              <RiRouterLine />
              <p>Node</p>
            </>
          )}
        </div>
        <div className="dataBlock">
          <div className="name">{data.name}</div>
          <div className="label">{data.label}</div>
          <div className="date">Aser Nabil | {data.createdAt}</div>
          <div className="feild">{data.feild}</div>
        </div>
        <div className="mapContainer">
          <img src={mapEx} alt="" />
        </div>
      </SDeviceCard>
    </>
  );
};

const SDeviceCard = styled.div`
  background: ${({ theme }) => theme.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
  /* padding: ${v.lgSpacing}; */
  gap: ${v.smSpacing};
  .iconContainer {
    margin: ${v.lgSpacing};

    background: ${({ theme }) => theme.bg3};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    padding: ${v.lgSpacing};
    font-size: 1.6rem;
  }
  .dataBlock {
    margin: ${v.lgSpacing} 0;

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    .name {
      font-size: 1.4rem;
    }
    .label {
      font-size: 1.2rem;
    }
    .feild {
      font-size: 1.2rem;
    }
    .date {
      font-size: 1rem;
    }
  }
  .mapContainer {
    /* margin:  ${v.lgSpacing}; */
    /* margin: 0; */
    height: 100%;
    max-width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid black; */
    /* padding: 0.5em; */

    img {
      max-width: 100%;
      height: auto;
    }
  }
`;

const ReadingArea = ({ data }) => {
  return (
    <>
      <h1>Latest Readings</h1>
      <SReadingArea>
        <ReadingCard>
          <div className="name">Air Temprature</div>
          <div className="value">24.3 C</div>
          <div className="date">2022/22/11 - 02:38:23</div>
        </ReadingCard>
        <ReadingCard>
          <div className="name">Air Humidity</div>
          <div className="value">50 RH</div>
          <div className="date">2022/2/11 - 02:38:23</div>
        </ReadingCard>
        <ReadingCard>
          <div className="name">Soil Temprature</div>
          <div className="value">26.6 C</div>
          <div className="date">2022/2/11 - 02:38:23</div>
        </ReadingCard>
        <ReadingCard>
          <div className="name">Soil Moiture</div>
          <div className="value">50 %</div>
          <div className="date">2022/2/11 - 02:38:23</div>
        </ReadingCard>
        <ReadingCard>
          <div className="name">Soil Moiture</div>
          <div className="value">50 %</div>
          <div className="date">2022/2/11 - 02:38:23</div>
        </ReadingCard>
        <ReadingCard>
          <div className="name">Soil Moiture</div>
          <div className="value">50 %</div>
          <div className="date">2022/2/11 - 02:38:23</div>
        </ReadingCard>
        <ReadingCard>
          <div className="name">Soil Moiture</div>
          <div className="value">50 %</div>
          <div className="date">2022/2/11 - 02:38:23</div>
        </ReadingCard>
        <ReadingCard>
          <div className="name">Soil Moiture</div>
          <div className="value">50 %</div>
          <div className="date">2022/2/11 - 02:38:23</div>
        </ReadingCard>
        <ReadingCard>
          <div className="name">Soil Moiture</div>
          <div className="value">50 %</div>
          <div className="date">2022/2/11 - 02:38:23</div>
        </ReadingCard>
        <ReadingCard>
          <div className="name">Soil Moiture</div>
          <div className="value">50 %</div>
          <div className="date">2022/22/11 - 02:38:23</div>
        </ReadingCard>
      </SReadingArea>
    </>
  );
};

const SReadingArea = styled.div`
  /* display: grid; */
  /* grid-template-columns: 1fr 1fr; */
  /* gap: 1rem; */
  /* flex: 3; */
  max-width: 1200px;
  display: flex;
  align-items: center;
  gap: 1rem;
  /* width: 100%; */
  /* border: 1px solid black; */
  padding: ${v.smSpacing};
  background: ${({ theme }) => theme.bg3};
  overflow-x: scroll;
`;

const ReadingCard = styled.div`
  min-width: 192px;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  /* padding: ${v.smSpacing}; */
  /* border: 1px solid black; */
  height: 100%;
  background: ${({ theme }) => theme.bg};

  .name {
    font-size: 1.4rem;
  }
  .value {
    font-size: 1.8rem;
  }
  .date {
    font-size: 1.2rem;
  }
`;

const StatCard = ({ data }) => {
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
