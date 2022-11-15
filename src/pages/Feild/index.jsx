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
      console.log(params.id.id);
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
          setPoints((points) => [
            ...points,
            {
              lat: element.location.lat,
              lon: element.location.lon,
            },
          ]);
        }
      }
    }
    console.log("Markers: ", markers);
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
            <div className="leftSide">
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
    width: 500px;
    overflow: hidden;
  }
`;

const Container = styled.div`
  width: 100%;
  /* border: 1px solid black; */
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  /* align-items: center; */
  gap: 1rem;
  width: 100%;
  /* padding-top: ${v.smSpacing}; */
  position: relative;
  .leftSide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* padding: ${v.smSpacing}; */
    gap : 1rem;

    .alarmsCard {
      /* border: 1px solid black; */
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-direction: column;
      background: ${({ theme }) => theme.bg};
      /* padding: 0.5rem; */
      gap: 0.8rem;
      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        .text {
          text-decoration: underline;
          font-size: 1.6rem;
        }
        .addItemBtn {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: ${({ theme }) => theme.primary};
          color: white;
          padding: 0.4rem 0.8rem;
          border-radius: 1px;
          gap: 0.4rem;
          .CTAtext {
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 1.2rem;
          }
          .icon {
            font-size: 1.2rem;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }

    .infoCard {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: ${({ theme }) => theme.bg};
      .right {
        height: 100%;
        .actionBTN {
          /* justify-self: flex-end; */
          font-size: 28px;
          background-color: ${({ theme }) => theme.primary};
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          a {
            text-decoration: none;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 0.8rem;
            .text {
              font-size: 1rem;
            }
          }
        }
      }
      .left {
        height: 100%;
        padding: 0.8rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        .title {
          font-size: 2rem;
        }
        /* border: 1px solid black; */
      }
    }
  }
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
