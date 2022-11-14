import React from "react";
import styled from "styled-components";
import { getDeviceById } from "../../services/Devices.services";
import { MdRouter } from "react-icons/md";
import { RiRouterLine } from "react-icons/ri";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";

const mockdata = {
  active: false,
  isGateway: false,
  _id: "636f9d153d0acd0874ca58ad",
  name: "35223",
  label: "23532",
  clientId: "c38264e1-a2df-4cd4-973b-bd9313896489",
  password: "5b751571-c8eb-4220-9b3f-6fdb4fed3e0b",
  createdBy: "636ab0189f7d6709d4c9cb5e",
  feild: {
    devices: ["636e5be68d94731810cb7831", "636f9d153d0acd0874ca58ad"],
    alrams: [],
    _id: "636d67b15fd7084c8c2011a1",
    name: "Test Feild 01",
    domain: "636ab0189f7d6709d4c9cb60",
    area: 27,
    createdAt: "2022-11-10T21:05:53.037Z",
    updatedAt: "2022-11-12T13:18:13.495Z",
    __v: 0,
  },
  sensors: [],
  createdAt: "2022-11-12T13:18:13.480Z",
  updatedAt: "2022-11-12T13:18:13.480Z",
  __v: 0,
};

const FeildDeviceCard = ({ id }) => {
  console.log(id);
  const [device, setDevice] = React.useState(id);
  // const GetDeviceById = async () => {
  //   try {
  //     const device = await getDeviceById(id);
  //     console.log("device: ", device);
  //     setDevice(device);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // React.useEffect(() => {
  //   if (id) {
  //     GetDeviceById();
  //   }
  // }, []);
  // React.useEffect(() => {
  //   console.log(device);
  // }, [device]);
  return (
    <Container>
      {device ? (
        <>
          <div className="iconContainer">
            {device.isGateway ? (
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
          <div className="deviceBlock">
            <div className="name">{device.name}</div>
            <div className="label">{device.label}</div>
            <div className="createdAt">{device.createdAt}</div>
            <div className="statusBlock">
              {device.active ? "Active" : "In-Active"}
            </div>
          </div>
          <div className="actionBTN">
            <Link to={`/devices/${device._id}`}>
              <FiLogIn />
            </Link>
          </div>
        </>
      ) : (
        <h1>Loading...</h1>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  .iconContainer {
    font-size: 48px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    background: ${({ theme }) => theme.bg3};
    p {
      font-size: 1rem;
    }
  }
  .deviceBlock {
    padding: 0.5rem;
    /* border-right: 1px solid ${({ theme }) => theme.primary}; */
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    .name {
      font-size: 1.8rem;
    }
    .label {
      font-size: 1.2rem;
    }
    .createdAt {
      font-size: 0.8rem;
    }
    .statusBlock {
      font-size: 0.8rem;
    }
  }
  .actionBTN {
    /* justify-self: flex-end; */
    /* font-size: 64px; */
    font-size: 32px;

    background-color: ${({ theme }) => theme.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      text-decoration: none;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.4rem;
    }
  }
`;

export default FeildDeviceCard;
