import React from "react";
import { getLatestReading } from "../services/Devices.services";
import styled from 'styled-components'

const ReadingCard = ({ id, sensor }) => {
  console.log(id, sensor);
  const [reading, setReading] = React.useState();
  const GetLatestReading = async () => {
    try {
      const reading = await getLatestReading(id, sensor.name);
      console.log("Reading: ", reading);
      setReading(reading);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (id) {
      GetLatestReading();
    }
  }, []);
  React.useEffect(() => {
    console.log(reading);
  }, [reading]);
  return (
    <Container>
      <div className="readingBlock">
        <div className="reading">{sensor.name}</div>
        {reading ? (
          <>
            <div className="value">
              {reading.value} {reading.unit}
            </div>
            <div className="date">{reading.createdAt}</div>
          </>
        ) : null}
      </div>
    </Container>
  );
};

export default ReadingCard;

const Container = styled.div`
  .readingBlock {
    padding: 0.5rem;
    border-right: 1px solid ${({ theme }) => theme.primary};
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .reading {
      font-size: 1.2rem;
    }
    .value {
      font-size: 1.8rem;
    }
    .date {
      font-size: 0.8rem;
    }
  }
`;
