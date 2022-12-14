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
import { Button, Card, Col, Row, Stack } from "react-bootstrap";

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
        console.log("No filter");
        setFilterd(plants);
        return;
      }
      if (filter.length > 2 && filter !== "") {
        console.log("Filter Applied: ", filter);
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
        <>
          <Row className="align-items-center mb-4">
            <Col>
              <h1 style={{ fontSize: 24 }}>Plants</h1>
            </Col>
            <Col xs="auto">
              <Stack gap={2} direction="horizontal">
                <Link to="/new">
                  <Button variant="primary">Create</Button>
                </Link>
                <Button variant="outline-primary">Edit Tags</Button>
              </Stack>
            </Col>
          </Row>
          <Row xs={1} sm={2} lg={4} xl={6} className="g-3">
            {plants.map((plant) => (
              <>
                <Col key={plant.id}>
                  <PlantCard data={plant} />
                </Col>
              </>
            ))}
          </Row>
        </>
      )}
    </Layout>
  );
};

export default Plants;

const PlantCard = ({ data }) => {
  return (
    <>
      <SCard as={Link} to={`/plants/${data._id}`}>
        <Card.Img variant="top" src={data.imgURL} />
        <Card.Body>
          <Stack gap={2} className=" justify-content-center h-100">
            <Card.Title>{data.name}</Card.Title>
            <Card.Text>{data.type}</Card.Text>
            <Button>
              <div className="text">More Details</div>
              <div className="icon">
                <FiLogIn />
              </div>
            </Button>
          </Stack>
        </Card.Body>
      </SCard>
    </>
  );
};

const SCard = styled(Card)`
  display: flex;
  /* padding: 1rem; */
  flex-direction: column;
  gap: 0.2rem;
  background-color: ${({ theme }) => theme.bg};
  transition: translate ease-in 200ms, box-shadow ease-in-out 200ms;

  :hover,
  :focus {
    /* translate: 2px -5px ; */
    scale: 1.05;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2);
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
