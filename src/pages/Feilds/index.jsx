import React, { useState } from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { AiOutlineSearch } from "react-icons/ai";
import { btnReset, v } from "../../styles/variables";
import { BiEdit } from "react-icons/bi";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const Feilds = () => {
  const [activeFeild, setActiveFeild] = useState(null);

  const feildSelect = (id) => {
    console.log(id);
    setActiveFeild(id);
  };

  return (
    <Layout>
      <Container>
        <FeildsList>
          <FilterBar>
            <SSearch>
              <SSearchIcon>
                <AiOutlineSearch />
              </SSearchIcon>
              <input placeholder="Search" />
            </SSearch>
            <AddFeildButton>
              <div className="CTAText">Add Feild</div>
              <div className="icon"><FaPlusCircle/></div>
            </AddFeildButton>
          </FilterBar>
          {feilds.map((feild) => {
            return (
              <>
                <FeildCard feildSelect={feildSelect} data={feild} />
              </>
            );
          })}
        </FeildsList>
        <FeildReport id={activeFeild} />
        {/* <MapView /> */}
      </Container>
    </Layout>
  );
};

export default Feilds;

const AddFeildButton = styled.div`
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

const Container = styled.div`
  display: flex;
  gap: 1rem;
  /* flex-direction: column; */
`;

const FeildsList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 0.5rem;
`;

const MapView = styled.div`
  display: flex;
`;

const FeildCard = ({ data, feildSelect }) => {
  return (
    <>
      <SFeildCard onClick={() => feildSelect(data.id)}>
        <div className="left">
          <div className="name">{data.name}</div>
          <div className="date">{data.createdAt}</div>
        </div>
        <div className="right">
          <div className="org">{data.orgnization}</div>
          <div className="activeSensors">
            Active Sensors: {data.devices.length}
          </div>
        </div>
      </SFeildCard>
    </>
  );
};

const SFeildCard = styled.div`
  width: 100%;
  padding: 0.5rem;
  min-height: 80px;
  background: ${({ theme }) => theme.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  :hover {
    cursor: pointer;
  }
  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
    display: flex;
    flex-direction: column;
    .name {
      font-size: 1.6rem;
    }
    .date {
      font-size: 1.2rem;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 100%;
    display: flex;
    flex-direction: column;
    .org {
      font-size: 1.4rem;
    }
    .date {
      font-size: 1rem;
    }
  }
`;

const FilterBar = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;
  background: ${({ theme }) => theme.bg};
  padding: 1rem;
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

const FeildReport = ({ id }) => {
  let data = null;
  if (id !== null) {
    data = feilds[id];
    return (
      <SFeildReport>
        <div className="infoCard">
          <div className="left">
            <div className="title">{data.name}</div>
            <div className="line">
              {data.orgnization} | {data.createdBy}
            </div>
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
            <AlarmCard />
            <AlarmCard />
            <AlarmCard />
            <AlarmCard />
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
        </div>
      </SFeildReport>
    );
  }
};

const SFeildReport = styled.div`
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

const feilds = [
  {
    id: 0,
    name: "Feild-001",
    createdAt: "2022/2/3",
    orgnization: "Dina Farms",
    area: 0.27,
    location: {
      region: "Cario",
      city: "Giza",
    },
    createdBy: "Aser Nabil",
    devices: [
      {
        name: "Soil Sensor 1",
      },
    ],
  },
  {
    id: 1,
    name: "Feild-002",
    createdAt: "2022/2/3",
    orgnization: "Dina Farms",
    area: 0.27,
    location: {
      region: "Cario",
      city: "Giza",
    },
    createdBy: "Aser Nabil",
    devices: [
      {
        name: "Soil Sensor 1",
      },
    ],
  },
  {
    id: 2,
    name: "Feild-003",
    createdAt: "2022/2/3",
    orgnization: "Dina Farms",
    area: 0.27,
    location: {
      region: "Cario",
      city: "Giza",
    },
    createdBy: "Aser Nabil",
    devices: [
      {
        name: "Soil Sensor 1",
      },
    ],
  },
];
