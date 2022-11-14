import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import { FaPlusCircle } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
import { getFeildById } from "../../services/Feilds.services";
import Map from "../../components/Map";
import { v } from "../../styles/variables";
import styled from "styled-components";
import FeildDeviceCard from "../Feilds/FeildDeviceCard";

const Feild = () => {
  const [feild, setFeild] = useState();
  const [points, setPoints] = useState([]);

  const params = useParams();
//   console.log(params.id);

  const getFeild = async () => {
    try {
        console.log(params.id.id)
      const feild = await getFeildById(params.id);
      console.log(feild);
      setFeild(feild);
    } catch (error) {
      console.log(error);
    }
  };

  const getDeviceMarker = () => {
    let markers = [];
    if (feild.devices && feild.devices.length > 0) {
      for (let index = 0; index < feild.devices.length; index++) {
        const element = feild.devices[index];
        if (element.location) {
          console.log("Device: ", element.location);
          markers.push({
            lat: element.location.lat,
            lon: element.location.lon,
          });
          setPoints((points) => [...points, {
            lat: element.location.lat,
            lon: element.location.lon,
          }]);
        }
      }
    }
    console.log("Markers: ", markers)
  };





  useEffect(() => {
    getFeild();
  }, []);

  useEffect(() => {
    if (feild) {
      getDeviceMarker();
    }
  }, [feild]);

  return (
    <Layout>
      <Container>
        {feild ? (
          <>
            
            <div className="infoCard">
              <div className="left">
                <div className="title">{feild.name}</div>
                <div className="line">{feild.domain.name} | Aser Nabil</div>
                <div className="line">
                  {feild.area}ha | {feild.createdAt}
                </div>
                <Link to="/">Go to dashboard</Link>
              </div>
              <div className="right">
                <div className="actionBTN">
                  <a href="#">
                    <div className="icon">
                      <BiEdit />
                    </div>
                    <div className="text">Edit</div>
                  </a>
                </div>
              </div>
            </div>
            <div className="alarmsCard">
              <div className="title">
                <div className="text">Alarms</div>
                <div className="addItemBtn">
                  <div className="CTAtext">Add Alarm</div>
                  <div className="icon">
                    <FaPlusCircle />
                  </div>
                </div>
              </div>
              <div className="content">
                {feild.alrams.length > 0 ? (
                  feild.alrams.map((alarm) => {
                    return (
                      <>
                        <AlarmCard />
                      </>
                    );
                  })
                ) : (
                  <>
                    <FaPlusCircle />
                  </>
                )}
              </div>
            </div>
            <div className="plantCard">
              <div className="title">
                <div className="text">Plant Productions</div>
                <div className="addItemBtn">
                  <div className="CTAtext">Add Plant</div>
                  <div className="icon">
                    <FaPlusCircle />
                  </div>
                </div>
              </div>
            </div>
            <div className="deviceCard">
              <div className="title">
                <div className="text">Devices</div>
                <div className="addItemBtn">
                  <div className="CTAtext">Add Device</div>
                  <div className="icon">
                    <FaPlusCircle />
                  </div>
                </div>
              </div>
              <div className="content">
                {feild.devices.length > 0 ? (
                  feild.devices.map((device) => {
                    return (
                      <>
                        <FeildDeviceCard id={device} />
                      </>
                    );
                  })
                ) : (
                  <>
                    <FaPlusCircle />
                  </>
                )}
              </div>
            </div>
            <MapContainer>
              <Map data={points} />
            </MapContainer>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </Container>
    </Layout>
  );
};

export default Feild;

const MapContainer = styled.div`
  .map-view {
    height: 600px;
    width: 400px;
    overflow: hidden;
  }
`;

const Container = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  /* align-items: center; */
  gap: 1rem;
  width: 100%;
  padding-top: ${v.smSpacing};
  position: relative;
`;


const AlarmCard = () => {
    return (
      <SAlarmCard>
        <div className="heading">Air Temprature</div>
        <div className="body">24/28 C</div>
        <div className="status">No-Alarm</div>
      </SAlarmCard>
    );
  };
  
  const SAlarmCard = styled.div`
    border: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    padding: 1rem;
    /* gap:1rem; */
    .heading {
      font-size: 1.2rem;
    }
    .body {
      font-size: 1.8rem;
    }
    .status {
      font-size: 1rem;
    }
  `;
  

  
