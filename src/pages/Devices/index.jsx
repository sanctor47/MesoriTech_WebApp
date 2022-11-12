import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { AiOutlineSearch } from "react-icons/ai";
import { btnReset, v } from "../../styles/variables";
import DeviceCard from "./DeviceCard";
import { getAllDevices, newDevice } from "../../services/Devices.services";
import { FaPlusCircle } from "react-icons/fa";
import { getAllFeilds } from "../../services/Feilds.services";

const Devices = () => {
  const [devices, setDevices] = useState([]);
  const [openForm, setOpenForm] = useState(false);
  const [newDeviceName, setNewDeviceName] = useState();
  const [newDeviceLabel, setNewDeviceLabel] = useState();
  const [newDeviceFeild, setNewDeviceFeild] = useState();
  const [listOfFeilds, setListOfFeilds] = useState([]);

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

  const addDevice = async (e) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const id = user.domain;
    e.preventDefault();
    const data = {
      name: newDeviceName,
      label: newDeviceLabel,
      feild: newDeviceFeild !== "none" ? newDeviceFeild : null,
      createdBy: user._id,
    };
    console.log("New Device: ", data);
    newDevice(data);
    getDevices();
    setNewDeviceName("");
    setNewDeviceLabel("");
    setNewDeviceFeild(null);
    setOpenForm(false);
  };

  const getDevices = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const id = user._id;
      const devices = await getAllDevices(id);
      console.log(devices);
      setDevices(devices);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDevices();
    GetAllFeilds();
  }, []);

  return (
    <Layout>
      <Container>
        <FilterBar>
          <SSearch>
            <SSearchIcon>
              <AiOutlineSearch />
            </SSearchIcon>
            <input placeholder="Search" />
          </SSearch>
          <AddDeviceButton onClick={() => setOpenForm(true)}>
            <div className="CTAText">Add Device</div>
            <div className="icon">
              <FaPlusCircle />
            </div>
          </AddDeviceButton>
        </FilterBar>
        <AddDeviceFrom show={openForm}>
          {/* <h1>Add New Device</h1> */}
          <form onSubmit={(e) => addDevice(e)}>
            <label htmlFor="name">Name</label>
            <div className="inputGroup">
              <input
                type="text"
                placeholder="Enter Device Name"
                onChange={(e) => setNewDeviceName(e.target.value)}
                value={newDeviceName}
                required
              />
            </div>
            <label htmlFor="name">Label</label>
            <div className="inputGroup">
              <input
                type="text"
                required
                value={newDeviceLabel}
                placeholder="Enter Device Label"
                onChange={(e) => setNewDeviceLabel(e.target.value)}
              />
            </div>
            <div className="inputGroup">
              <select onChange={(e) => setNewDeviceFeild(e.target.value)}>
                <option value="none">Assign Later</option>
                {listOfFeilds.map((feild) => {
                  return <option value={feild._id}>{feild.name}</option>;
                })}
              </select>
            </div>
            <button type="submit">Add Device</button>
          </form>
        </AddDeviceFrom>
      </Container>
      <ListView>
        {devices.map((device) => {
          return (
            <>
              <DeviceCard data={device} />
            </>
          );
        })}
      </ListView>
    </Layout>
  );
};

export default Devices;

const AddDeviceFrom = styled.div`
  /* display: block; */
  display: ${(props) => (props.show ? "flex" : "none")};
  width: 100%;
  padding: 0.5rem;
  min-height: 80px;
  background: ${({ theme }) => theme.bg};
  justify-content: space-between;
  align-items: center;
  .inputGroup {
    display: flex;
    flex-direction: column;
    background: ${({ theme }) => theme.bgAlpha};
    border: 1px solid ${({ theme }) => theme.bg3};
    border-radius: ${v.borderRadius};
    input {
      padding: 0 ${v.smSpacing};
      font-family: inherit;
      letter-spacing: inherit;
      font-size: 16px;
      width: 100%;
      outline: none;
      border: none;
      color: inherit;
      background: transparent;
    }
    display: flex;
  }
`;

const AddDeviceButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 1px;
  gap: 0.4rem;
  :hover {
    cursor: pointer;
  }
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
`;

const ListView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  /* padding: ${v.lgSpacing}; */
  position: relative;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: ${v.lgSpacing};
  position: relative;
  background: ${({ theme }) => theme.bg};
`;

const FilterBar = styled.div`
  display: flex;
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
const THead = styled.thead``;
const TBody = styled.tbody``;
const TRow = styled.tr`
  :nth-child(even) {
    background-color: #f2f2f2;
  }
`;
const TH = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
`;
const TD = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

const SSearch = styled.div`
  background: ${({ theme }) => theme.bgAlpha};
  border: 1px solid ${({ theme }) => theme.bg3};
  border-radius: ${v.borderRadius};
  input {
    padding: 0 ${v.smSpacing};
    font-family: inherit;
    letter-spacing: inherit;
    font-size: 16px;
    width: 100%;
    outline: none;
    border: none;
    color: inherit;
    background: transparent;
  }
  display: flex;
`;

const SSearchIcon = styled.button`
  ${btnReset};
  padding: calc(${v.mdSpacing} - 2px) ${v.mdSpacing};
  display: flex;
  cursor: pointer;

  svg {
    font-size: 20px;
  }
`;
