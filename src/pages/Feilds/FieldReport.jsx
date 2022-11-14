import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { BiEdit } from "react-icons/bi";
import { FaPlusCircle } from "react-icons/fa";
import FeildDeviceCard from "./FeildDeviceCard";
import Map from "../../components/Map";

const FieldReport = ({ data }) => {
  let points = [];
  const getDevicePoints = () => {
    if (data.devices && data.devices.length > 0) {
      for (let index = 0; index < data.devices.length; index++) {
        const element = data.devices[index];
        if (element.location) {
          console.log("Device: ", element.location);
          points.push({ lat: element.location.lat, lon: element.location.lon });
        }
      }
    }
    console.log("points: ", points);
  };

  if (data) {
    getDevicePoints();
    return (
      <Container>
        <MapContainer>
          <Map data={points} />
        </MapContainer>
        <div className="infoCard">
          <div className="left">
            <div className="title">{data.name}</div>
            <div className="line">{data.domain.name} | Aser Nabil</div>
            <div className="line">
              {data.area}ha | {data.createdAt}
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
            {data.alrams.length > 0 ? (
              data.alrams.map((alarm) => {
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
            {data.devices.length > 0 ? (
              data.devices.map((device) => {
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
      </Container>
    );
  }
};

const MapContainer = styled.div`
  .map-view {
    height: 400px;
    /* width: 600px; */
    overflow: hidden;
  }
`;

const Container = styled.div`
  flex: 3;
  /* background: ${({ theme }) => theme.bg}; */
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
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
  .alarmsCard {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    background: ${({ theme }) => theme.bg};
    padding: 0.5rem;
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
    .content {
      display: flex;
      gap: 1rem;
    }
  }
  .plantCard {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    background: ${({ theme }) => theme.bg};
    padding: 0.5rem;
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
        gap: 0.4rem;

        background-color: ${({ theme }) => theme.primary};
        color: white;
        padding: 0.4rem 0.8rem;
        border-radius: 1px;
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
    .content {
      display: flex;
      gap: 1rem;
    }
  }
  .deviceCard {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    background: ${({ theme }) => theme.bg};
    padding: 0.5rem;
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
        gap: 0.4rem;
        background-color: ${({ theme }) => theme.primary};
        color: white;
        padding: 0.4rem 0.8rem;
        border-radius: 1px;
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
    .content {
      display: flex;
      gap: 1rem;
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

export default FieldReport;
