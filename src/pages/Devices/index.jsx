import React, { useContext } from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { AiOutlineSearch } from "react-icons/ai";
import { ThemeContext } from "../../App";
import { btnReset, v } from "../../styles/variables";
import DeviceCard from "./DeviceCard";

const data = [
  {
    name: "Soil Sensor 01",
    label: "Feild 01 Soil Sensor 01",
    feild: "Feild 01",
    status: true,
    gateway: true,
    createdAt: "2022/2/3",
    battery: "60%",
    sensors: [
      {
        name: "Soil Moisture",
        type: "Moisture",
        medium: "Soil",
        lastReading:"32 %",
        lastReadingDate:"2022/2/4-12:40:23",
      },
      {
        name: "Soil Temprature",
        type: "Temprature",
        medium: "Soil",
        lastReading:"24.2 C",
        lastReadingDate:"2022/2/4-12:40:23",
      },
      {
        name: "Air Temprature",
        type: "Temprature",
        medium: "Soil",
        lastReading:"24.2 C",
        lastReadingDate:"2022/2/4-12:40:23",
      },
      {
        name: "Air Humidity",
        type: "Temprature",
        medium: "Soil",
        lastReading:"20 RH",
        lastReadingDate:"2022/2/4-12:40:23",
      },
    ],
  },
  {
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
          lastReading:"32 %",
          lastReadingDate:"2022/2/4-12:40:23",
        },
        {
          name: "Soil Temprature",
          type: "Temprature",
          medium: "Soil",
          lastReading:"24.2 C",
          lastReadingDate:"2022/2/4-12:40:23",
        },
        {
          name: "Air Temprature",
          type: "Temprature",
          medium: "Soil",
          lastReading:"24.2 C",
          lastReadingDate:"2022/2/4-12:40:23",
        },
        {
          name: "Air Humidity",
          type: "Temprature",
          medium: "Soil",
          lastReading:"20 RH",
          lastReadingDate:"2022/2/4-12:40:23",
        },
      ],
  },
  {
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
          lastReading:"32 %",
          lastReadingDate:"2022/2/4-12:40:23",
        },
        {
          name: "Soil Temprature",
          type: "Temprature",
          medium: "Soil",
          lastReading:"24.2 C",
          lastReadingDate:"2022/2/4-12:40:23",
        },
        {
          name: "Air Temprature",
          type: "Temprature",
          medium: "Soil",
          lastReading:"24.2 C",
          lastReadingDate:"2022/2/4-12:40:23",
        },
        {
          name: "Air Humidity",
          type: "Temprature",
          medium: "Soil",
          lastReading:"20 RH",
          lastReadingDate:"2022/2/4-12:40:23",
        },
      ],
  },
  {
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
          lastReading:"32 %",
          lastReadingDate:"2022/2/4-12:40:23",
        },
        {
          name: "Soil Temprature",
          type: "Temprature",
          medium: "Soil",
          lastReading:"24.2 C",
          lastReadingDate:"2022/2/4-12:40:23",
        },
        {
          name: "Air Temprature",
          type: "Temprature",
          medium: "Soil",
          lastReading:"24.2 C",
          lastReadingDate:"2022/2/4-12:40:23",
        },
        {
          name: "Air Humidity",
          type: "Temprature",
          medium: "Soil",
          lastReading:"20 RH",
          lastReadingDate:"2022/2/4-12:40:23",
        },
      ],
  },
];

const Devices = () => {
  const { setTheme, theme } = useContext(ThemeContext);
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
        </FilterBar>
        {/* <ListView>
          {data.map((device) => {
            return (
              <>
                <ListCard data={device} />
              </>
            );
          })}
        </ListView> */}
      </Container>
      <ListView>
        {data.map((device) => {
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
