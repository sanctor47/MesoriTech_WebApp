import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { v } from "../../styles/variables";
import { MdRouter } from "react-icons/md";
import { RiRouterLine } from "react-icons/ri";
import mapEx from "../../assets/mapEx.png";
import ChartCard from "../../components/ChartCard";
import {
  getDeviceById,
  updateDeviceById,
} from "../../services/Devices.services";
import { useEffect, useState } from "react";
import { getAllFeilds } from "../../services/Feilds.services";
import ReadingCard from "../../components/ReadingCard";

const Device = () => {
  const [device, setDevice] = useState();

  const params = useParams();
  console.log(params);

  const getDevice = async () => {
    try {
      const device = await getDeviceById(params.id);
      console.log(device);
      setDevice(device);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDevice();
  }, []);

  return (
    <Layout>
      {device ? (
        <Container>
          <Row>
            <DeviceCard data={device} />
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
          <ReadingArea data={device} />
          {/* <ChartCard>
          <LineChartEx />
        </ChartCard> */}
          {device.sensors.map((sensor) => {
            return <ChartCard id={device._id} sensor={sensor} />;
          })}
        </Container>
      ) : (
        <h1>Loading..</h1>
      )}
    </Layout>
  );
};

export default Device;

// const ChartCard = styled.div`
//   max-height: 400px;
//   background: ${({ theme }) => theme.bg};
//   padding: ${v.lgSpacing};
// `;

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
  const [showCreds, setShowCreds] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [listOfFeilds, setListOfFeilds] = useState([]);
  const [editName, setEditName] = useState(data.name);
  const [editLabel, setEditLabel] = useState(data.label);
  const [editLat, setEditLat] = useState(data.location?.lat);
  const [editLon, setEditLon] = useState(data.location?.lon);
  const [editFeild, setEditFeild] = useState();
  console.log(data);

  const GetAllFeilds = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const id = user.domain;
      const feilds = await getAllFeilds(id);
      console.log(feilds);
      setListOfFeilds(feilds);
    } catch (error) {
      console.log(error);
    }
  };

  const updateDevice = async (e) => {
    e.preventDefault();
    try {
      const EditData = {
        name: editName,
        label: editLabel,
        feild: editFeild,
        location: {
          lat: editLat,
          lon: editLon,
        },
      };
      console.log("Device Edit: ", EditData);
      updateDeviceById(data._id, EditData);
      setEditName(data.name);
      setEditLabel(data.label);
      setEditFeild(null);
      setEditMode(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetAllFeilds();
  }, []);
  if (editMode) {
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
            <button onClick={() => setEditMode(!editMode)}>Exit Edit</button>
            <>
              <form onSubmit={(e) => updateDevice(e)}>
                <label htmlFor="name">Edit Name</label>
                <input
                  type="text"
                  placeholder={data.name}
                  onChange={(e) => setEditName(e.target.value)}
                />
                <label htmlFor="label">Edit Label</label>
                <input
                  type="text"
                  placeholder={data.label}
                  onChange={(e) => setEditLabel(e.target.value)}
                />
                <label htmlFor="lat">Edit Lat</label>
                <input
                  type="text"
                  placeholder={data.location?.lat}
                  onChange={(e) => setEditLat(e.target.value)}
                />
                <label htmlFor="lon">Edit Lon</label>
                <input
                  type="text"
                  placeholder={data.location?.lon}
                  onChange={(e) => setEditLon(e.target.value)}
                />

                <select onChange={(e) => setEditFeild(e.target.value)}>
                  <option value="none">Assign Later</option>
                  {listOfFeilds.map((feild) => {
                    return <option value={feild._id}>{feild.name}</option>;
                  })}
                </select>
                <button type="submit">Save Edits</button>
              </form>
            </>
            <div className="date">Aser Nabil | {data.createdAt}</div>
            <div className="feild">{data.feild.name}</div>
          </div>
          {/* <div className="mapContainer">
            <img src={mapEx} alt="" />
          </div> */}
        </SDeviceCard>
      </>
    );
  }
  if (!editMode) {
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
            <button onClick={() => setEditMode(!editMode)}>Edit</button>
            <div className="name">{data.name}</div>
            <div className="label">{data.label}</div>
            <div className="date">Aser Nabil | {data.createdAt}</div>
            <Link to={`/feilds/${data.feild._id}`} className="feild">
              {data.feild.name}
            </Link>
            <div className="locationData">{JSON.stringify(data.location)}</div>
          </div>
          <button onClick={() => setShowCreds(!showCreds)}>Show Creds</button>
          {showCreds ? (
            <>
              <div className="clientId">ClientId: {data.clientId}</div>
              <div className="password">Password: {data.password}</div>
              <div className="password">_id: {data._id}</div>
            </>
          ) : null}
          <div className="mapContainer">
            <img src={mapEx} alt="" />
          </div>
        </SDeviceCard>
      </>
    );
  }
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
  if (data) {
    console.log("Reading Area:", data);
    return (
      <>
        <h1>Latest Readings</h1>
        <SReadingArea>
          {data.sensors.map((sensor) => {
            return <ReadingCard id={data._id} sensor={sensor} />;
          })}
        </SReadingArea>
      </>
    );
  }
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

// const ReadingCard = styled.div`
//   min-width: 192px;
//   min-height: 140px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-evenly;
//   align-items: center;
//   /* padding: ${v.smSpacing}; */
//   /* border: 1px solid black; */
//   height: 100%;
//   background: ${({ theme }) => theme.bg};

//   .name {
//     font-size: 1.4rem;
//   }
//   .value {
//     font-size: 1.8rem;
//   }
//   .date {
//     font-size: 1.2rem;
//   }
// `;

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
