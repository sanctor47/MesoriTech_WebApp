import { useState, useEffect } from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { AiOutlineSearch } from "react-icons/ai";
import { btnReset, v } from "../../styles/variables";
import { BiEdit } from "react-icons/bi";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getAllFeilds, NewField } from "../../services/Feilds.services";
import FieldReport from "./FieldReport";

const Feilds = () => {
  const [feilds, setFeilds] = useState([]);
  const [activeFeild, setActiveFeild] = useState(null);
  const [openForm, setOpenForm] = useState(false);
  const [newFeildnName, setNewFeildnName] = useState();
  const [newFeildnArea, setNewFeildnArea] = useState();

  const feildSelect = (id) => {
    console.log(id);
    const index = feilds.findIndex((x) => x._id === id);
    setActiveFeild(feilds[index]);
  };

  const addFeild = (e) => {
    const user = JSON.parse(localStorage.getItem("user"));
    const id = user.domain;
    e.preventDefault();
    const data = {
      name: newFeildnName,
      area: newFeildnArea,
      domain: id,
    };
    console.log("New Feidl: ", data);
    NewField(data);
    getFeilds();
    setNewFeildnName("");
    setNewFeildnArea("");
    setOpenForm(false);
  };

  const getFeilds = async () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      const id = user.domain;
      const feilds = await getAllFeilds(id);
      console.log(feilds);
      setFeilds(feilds);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFeilds();
  }, []);

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
            <AddFeildButton onClick={() => setOpenForm(true)}>
              <div className="CTAText">Add Feild</div>
              <div className="icon">
                <FaPlusCircle />
              </div>
            </AddFeildButton>
          </FilterBar>
          <AddFeildFrom show={openForm}>
            {/* <h1>Add New Feild</h1> */}
            <form onSubmit={(e) => addFeild(e)}>
              <label htmlFor="name">Name</label>
              <div className="inputGroup">
                <input
                  type="text"
                  placeholder="Enter Feild Name"
                  onChange={(e) => setNewFeildnName(e.target.value)}
                  value={newFeildnName}
                  required
                />
              </div>
              <label htmlFor="name">Area</label>
              <div className="inputGroup">
                <input
                  type="text"
                  required
                  value={newFeildnArea}
                  placeholder="Enter Feild Area"
                  onChange={(e) => setNewFeildnArea(e.target.value)}
                />
              </div>
              <button type="submit">Add Feild</button>
            </form>
          </AddFeildFrom>
          {feilds.length > 0 ? (
            feilds.map((feild) => {
              return (
                <>
                  <FeildCard feildSelect={feildSelect} data={feild} />
                </>
              );
            })
          ) : (
            <h1>No Feilds</h1>
          )}
        </FeildsList>
        <FieldReport data={activeFeild} />
        {/* <MapView /> */}
      </Container>
    </Layout>
  );
};

export default Feilds;

const AddFeildFrom = styled.div`
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
      <SFeildCard onClick={() => feildSelect(data._id)}>
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




