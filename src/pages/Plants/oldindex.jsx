import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { AiOutlineSearch } from "react-icons/ai";
import { btnReset, v } from "../../styles/variables";
import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
// import Client from "../../services/HttpClient";
import { getAllPlants } from "../../services/Plants.services";

const Plants = () => {
  const [plants, setPlants] = useState([]);
  const [filterd, setFilterd] = useState([]);
  const [filter, setFilter] = useState("");

  const getPlants = async () => {
    try {
      const plants = await getAllPlants();
      console.log(plants);
      setPlants(plants);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPlants();
  }, []);

  useEffect(() => {
    if (plants.length > 0) {
      if (filter === null) {
        console.log("No filter")
        setFilterd(plants);
        return;
      }
      if (filter.length > 2 && filter !== "") {
        console.log("Filter Applied: ", filter)
        const newArray = plants.Students.filter(function (el) {
          return (el.name = filter);
        });
        console.log(newArray);
        setFilterd(newArray);
      }
    }
  }, [plants, filter]);

  return (
    <Layout>
      {!plants || plants.length === 0 ? (
        <>
          <h1>Loading....</h1>
        </>
      ) : (
        <Container>
          <div className="title">Plant Catalog</div>
          <CatalogContainer>
            <div className="actionBar">
              <SSearch>
                <SSearchIcon>
                  <AiOutlineSearch />
                </SSearchIcon>
                <input
                  placeholder="Search"
                  onChange={(e) => setFilter(e.target.value)}
                />
              </SSearch>
            </div>
            <div className="myCatalog">
              <div className="title">My Catalog</div>
              <div className="emptyItemArea">
                <div className="CTAtext">
                  No plants in your Catalog, Add one.
                </div>
                <div className="CTA">
                  <FaPlusCircle />
                </div>
              </div>
            </div>
            <div className="myCatalog">
              <div className="title">Catalog</div>
              <div className="content">
                {plants.map((plant) => {
                  return (
                    <>
                      <PlantCard data={plant} />
                    </>
                  );
                })}
              </div>
            </div>
          </CatalogContainer>
        </Container>
      )}
    </Layout>
  );
};

export default Plants;

const PlantCard = ({ data }) => {
  return (
    <>
      <SPlantCard>
        <div className="imgContiner">
          <img src={data.imgURL} alt="img" />
        </div>
        <div className="block">
          <div className="name">{data.name}</div>
          <div className="type">{data.type}</div>
        </div>
        <div className="actionBTN">
          <Link to={`/plants/${data._id}`}>
            <div className="text">More Details</div>
            <div className="icon">
              <FiLogIn />
            </div>
          </Link>
        </div>
      </SPlantCard>
    </>
  );
};

const SPlantCard = styled.div`
  /* background: ${({ theme }) => theme.bg3}; */
  width: 200px;
  /* height: 300px; */
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  cursor: pointer;
  .imgContiner {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      max-width: 100%;
      height: auto;
    }
    /* margin-bottom: ${v.smSpacing}; */
  }
  .block {
    display: flex;
    flex-direction: column;
    /* border: 1px solid black; */
    height: 100%;
    padding: 0.2rem;
    .name {
      font-size: 1.2rem;
      font-weight: bold;
    }
  }
  .actionBTN {
    /* justify-self: flex-end; */
    font-size: 22px;
    background-color: ${({ theme }) => theme.primary};
    display: flex;
    align-items: center;
    justify-content: center;
    /* gap: 1rem; */
    a {
      width: 100%;
      text-decoration: none;
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.4rem;
    }
  }
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

// const PlantCard = styled.div``;

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .title {
    font-size: 2rem;
    font-weight: bold;
    width: 100%;
  }
`;

const CatalogContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: ${({ theme }) => theme.bg};
  padding: ${v.lgSpacing};
  .actionBar {
  }
  .myCatalog {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
    .title {
      font-size: 1.6rem;
      text-decoration: underline;
    }
    .emptyItemArea {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      border-bottom: 1px solid black;
      .CTAtext {
        font-size: 1.2rem;
      }
      .CTA {
        font-size: 2.6rem;
        color: ${({ theme }) => theme.primary};

        :hover {
          cursor: pointer;
        }
      }
    }
    .content {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }
  }
`;

const Catalog = [
  {
    name: "Strawberry",
    type: "Berry",
    image:
      "https://www.haifa-group.com/sites/default/files/crop/Strawberry-Thumb_03.JPG",
    air: {
      parameters: {
        minTemp: 20,
        maxTemp: 29,
        minHum: 45,
        maxHum: 65,
      },
    },
    soil: {
      type: "loam",
      minOrganicMatter: 2,
      parameters: {
        minPh: 5.5,
        maxPh: 6.5,
        optimalEC: 1.5,
      },
    },
    water: {
      parameters: {
        minPh: 6.5,
        maxPh: 8.5,
        maxECw: 1,
        maxTDS: 450,
        maxSAR: 30,
        maxChloride: 130,
        maxBoron: 0.7,
        maxNitrate: 5,
        maxBicarbonate: 1.5,
      },
    },
  },
  {
    name: "Strawberry",
    type: "Berry",
    image:
      "https://www.haifa-group.com/sites/default/files/crop/Strawberry-Thumb_03.JPG",
    air: {
      parameters: {
        minTemp: 20,
        maxTemp: 29,
        minHum: 45,
        maxHum: 65,
      },
    },
    soil: {
      type: "loam",
      minOrganicMatter: 2,
      parameters: {
        minPh: 5.5,
        maxPh: 6.5,
        optimalEC: 1.5,
      },
    },
    water: {
      parameters: {
        minPh: 6.5,
        maxPh: 8.5,
        maxECw: 1,
        maxTDS: 450,
        maxSAR: 30,
        maxChloride: 130,
        maxBoron: 0.7,
        maxNitrate: 5,
        maxBicarbonate: 1.5,
      },
    },
  },
  {
    name: "Strawberry",
    type: "Berry",
    image:
      "https://www.haifa-group.com/sites/default/files/crop/Strawberry-Thumb_03.JPG",
    air: {
      parameters: {
        minTemp: 20,
        maxTemp: 29,
        minHum: 45,
        maxHum: 65,
      },
    },
    soil: {
      type: "loam",
      minOrganicMatter: 2,
      parameters: {
        minPh: 5.5,
        maxPh: 6.5,
        optimalEC: 1.5,
      },
    },
    water: {
      parameters: {
        minPh: 6.5,
        maxPh: 8.5,
        maxECw: 1,
        maxTDS: 450,
        maxSAR: 30,
        maxChloride: 130,
        maxBoron: 0.7,
        maxNitrate: 5,
        maxBicarbonate: 1.5,
      },
    },
  },
  {
    name: "Strawberry",
    type: "Berry",
    image:
      "https://www.haifa-group.com/sites/default/files/crop/Strawberry-Thumb_03.JPG",
    air: {
      parameters: {
        minTemp: 20,
        maxTemp: 29,
        minHum: 45,
        maxHum: 65,
      },
    },
    soil: {
      type: "loam",
      minOrganicMatter: 2,
      parameters: {
        minPh: 5.5,
        maxPh: 6.5,
        optimalEC: 1.5,
      },
    },
    water: {
      parameters: {
        minPh: 6.5,
        maxPh: 8.5,
        maxECw: 1,
        maxTDS: 450,
        maxSAR: 30,
        maxChloride: 130,
        maxBoron: 0.7,
        maxNitrate: 5,
        maxBicarbonate: 1.5,
      },
    },
  },
  {
    name: "Strawberry",
    type: "Berry",
    image:
      "https://www.haifa-group.com/sites/default/files/crop/Strawberry-Thumb_03.JPG",
    air: {
      parameters: {
        minTemp: 20,
        maxTemp: 29,
        minHum: 45,
        maxHum: 65,
      },
    },
    soil: {
      type: "loam",
      minOrganicMatter: 2,
      parameters: {
        minPh: 5.5,
        maxPh: 6.5,
        optimalEC: 1.5,
      },
    },
    water: {
      parameters: {
        minPh: 6.5,
        maxPh: 8.5,
        maxECw: 1,
        maxTDS: 450,
        maxSAR: 30,
        maxChloride: 130,
        maxBoron: 0.7,
        maxNitrate: 5,
        maxBicarbonate: 1.5,
      },
    },
  },
  {
    name: "Strawberry",
    type: "Berry",
    image:
      "https://www.haifa-group.com/sites/default/files/crop/Strawberry-Thumb_03.JPG",
    air: {
      parameters: {
        minTemp: 20,
        maxTemp: 29,
        minHum: 45,
        maxHum: 65,
      },
    },
    soil: {
      type: "loam",
      minOrganicMatter: 2,
      parameters: {
        minPh: 5.5,
        maxPh: 6.5,
        optimalEC: 1.5,
      },
    },
    water: {
      parameters: {
        minPh: 6.5,
        maxPh: 8.5,
        maxECw: 1,
        maxTDS: 450,
        maxSAR: 30,
        maxChloride: 130,
        maxBoron: 0.7,
        maxNitrate: 5,
        maxBicarbonate: 1.5,
      },
    },
  },
  {
    name: "Strawberry",
    type: "Berry",
    image:
      "https://www.haifa-group.com/sites/default/files/crop/Strawberry-Thumb_03.JPG",
    air: {
      parameters: {
        minTemp: 20,
        maxTemp: 29,
        minHum: 45,
        maxHum: 65,
      },
    },
    soil: {
      type: "loam",
      minOrganicMatter: 2,
      parameters: {
        minPh: 5.5,
        maxPh: 6.5,
        optimalEC: 1.5,
      },
    },
    water: {
      parameters: {
        minPh: 6.5,
        maxPh: 8.5,
        maxECw: 1,
        maxTDS: 450,
        maxSAR: 30,
        maxChloride: 130,
        maxBoron: 0.7,
        maxNitrate: 5,
        maxBicarbonate: 1.5,
      },
    },
  },
  {
    name: "Strawberry",
    type: "Berry",
    image:
      "https://www.haifa-group.com/sites/default/files/crop/Strawberry-Thumb_03.JPG",
    air: {
      parameters: {
        minTemp: 20,
        maxTemp: 29,
        minHum: 45,
        maxHum: 65,
      },
    },
    soil: {
      type: "loam",
      minOrganicMatter: 2,
      parameters: {
        minPh: 5.5,
        maxPh: 6.5,
        optimalEC: 1.5,
      },
    },
    water: {
      parameters: {
        minPh: 6.5,
        maxPh: 8.5,
        maxECw: 1,
        maxTDS: 450,
        maxSAR: 30,
        maxChloride: 130,
        maxBoron: 0.7,
        maxNitrate: 5,
        maxBicarbonate: 1.5,
      },
    },
  },
];
const MyCatalog = [];
