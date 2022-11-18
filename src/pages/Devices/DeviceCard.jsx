import styled from "styled-components";
import { MdRouter } from "react-icons/md";
import { RiRouterLine } from "react-icons/ri";
import { FiLogIn } from "react-icons/fi";
import { Link } from "react-router-dom";
import ReadingCard from "../../components/ReadingCard";
import { Accordion, Card } from "react-bootstrap";

const DeviceCard = ({ data }) => {
  return (
    <Card>
      <div className="iconContainer">
        {data.isGateway ? (
          <>
            <MdRouter />
            <p>Gateway</p>
          </>
        ) : (
          <>
            <RiRouterLine />
            <span>Node</span>
          </>
        )}
      </div>
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>{data.label}</Card.Text>
        <Accordion>
        {/* {data.sensors.map((sensor) => {
          return <ReadingCard id={data._id} sensor={sensor} />;
        })} */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>Air Temprature</Accordion.Header>
            <Accordion.Body>
              24C
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Air Humidity</Accordion.Header>
            <Accordion.Body>
              24Rh
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Card.Body>
    </Card>
  );
};

// const DeviceCard = ({ data }) => {
//   return (
//     <LCContainer>
//       <div className="iconContainer">
//         {data.isGateway ? (
//           <>
//             <MdRouter />
//             <p>Gateway</p>
//           </>
//         ) : (
//           <>
//             <RiRouterLine />
//             <p>Node</p>
//           </>
//         )}
//       </div>
//       <div className="dataBlock">
//         <div className="name">{data.name}</div>
//         <div className="label">{data.label}</div>
//         <div className="createdAt">
//           {data.createdAt} | {data.feild ? data.feild.name : "Un-Assigned"}
//         </div>
//       </div>
//       <div className="batteryBlock">
//         <div className="statusBlock">
//           {data.active ? "Active" : "In-Active"}
//         </div>
//         <div className="battBlock">{data.battery}</div>
//         <div className="batMessage">Battery Level: Good</div>
//       </div>
//       <div className="readingsArea">
//         {data.sensors.map((sensor) => {
//           return <ReadingCard id={data._id} sensor={sensor} />;
//         })}
//       </div>
//       <div className="actionBTN">
//         <Link to={`/devices/${data._id}`}>
//           <FiLogIn />
//         </Link>
//       </div>
//     </LCContainer>
//   );
// };

export default DeviceCard;

const LCContainer = styled.div`
  width: 100%;
  min-height: 120px;
  background: ${({ theme }) => theme.bg};
  display: flex;
  justify-content: space-between;
  gap: 0.8rem;
  /* padding: 10px; */
  .iconContainer {
    font-size: 64px;
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
  .dataBlock {
    /* border: 1px solid black; */
    /* width: 100%; */
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    /* justify-content: space-evenly; */
    .name {
      font-size: 1.8rem;
    }
    .label {
      font-size: 1.2rem;
    }
    .createdAt {
      font-size: 0.8rem;
    }
  }
  .batteryBlock {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .statusBlock {
      font-size: 1.2rem;
    }
    .battBlock {
      font-size: 2rem;
    }
    .batMessage {
      font-size: 1rem;
    }
  }
  .readingsArea {
    display: flex;
    /* width: 100%; */
    height: 100%;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
  .actionBTN {
    /* justify-self: flex-end; */
    font-size: 64px;
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
      padding: 0.8rem;
    }
  }
`;
