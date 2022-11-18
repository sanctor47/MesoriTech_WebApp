import { useState, useEffect } from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";
import { useParams } from "react-router-dom";
import { getPlantById } from "../../services/Plants.services";
const Plant = () => {
  const [plant, setPlant] = useState();
  const params = useParams();
  console.log(params);

  const getPlant = async () => {
    try {
      const plant = await getPlantById(params.id);
      console.log(plant);
      setPlant(plant);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPlant();
  }, []);

  return (
    <Layout>
      {!plant ? (
        <h1>Loading....</h1>
      ) : (
        <Container>
          <InfoCard>
            <div className="left">
              <div className="imgContainer">
                <img src={plant.imgURL} alt="" />
              </div>
            </div>
            <div className="right">
              <div className="name">{plant.name}</div>
              <div className="type">{plant.type}</div>
            </div>
          </InfoCard>
          {/* <div className="airParmas">{JSON.stringify(plant.airParams)}</div>
          <div className="soilParams">{JSON.stringify(plant.soilParams)}</div>
          <div className="waterParams">{JSON.stringify(plant.water)}</div> */}
          <div className="paramsArea">
            <ParamsTable title={"Air Parameters"} data={plant.airParams} />
            <ParamsTable title={"Soil Parameters"} data={plant.soilParams} />
            <ParamsTable title={"Water Parameters"} data={plant.water} />
          </div>
        </Container>
      )}
    </Layout>
  );
};

export default Plant;

const ParamsTable = ({ title, data }) => {
  console.log("Parmas Data: ", Object.keys(data));
  console.log("Parmas Data: ", Object.keys(data.params));

  return (
    <SParamsTable>
      <h1>{title}</h1>
      <table>
        <thead>
          <tr>
            <th>Param</th>
            <th>Value</th>
            <th>Unit</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(data.params).map((param) => {
            return (
              <>
                <tr>
                  <td>{param}</td>
                  <td>{data.params[param]}</td>
                  <td>deg C</td>
                </tr>
              </>
            );
          })}
          {/* <tr>
            <td>MinTemp</td>
            <td>20</td>
            <td>deg C</td>
          </tr> */}
        </tbody>
      </table>
    </SParamsTable>
  );
};

const SParamsTable = styled.div`
  width: 100%;
  table {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;

    td,
    th {
      border: 1px solid #ddd;
      padding: 8px;
    }

    tr:nth-child(even) {
      background-color: #f2f2f2;
    }

    tr:hover {
      background-color: #ddd;
    }

    th {
      padding-top: 12px;
      padding-bottom: 12px;
      text-align: left;
      background-color: #04aa6d;
      color: white;
    }
  }
`;

const Container = styled.div`
  /* width: 100%; */
  .paramsArea {
    display: flex;
  }
`;

const InfoCard = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  .left {
    /* border: 1px solid black; */
    /* width: 200px; */
    .imgContainer {
      max-width: 400px;
      img {
        width: 100%;
        height: auto;
      }
    }
  }
  .right {
    .name {
    }
    .type {
    }
  }
`;

const ParamTableContainer = styled.div``;
