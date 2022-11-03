import styled from 'styled-components'
import { v } from '../styles/variables';

const StatCard = () => {
    return (
      <SStatCard>
        <div className="title">Sum Air Temprature</div>
        <div className="body">
          <div className="value">30.5 C</div>
          <div className="subTitle">Air Temp</div>
        </div>
        <div className="footer">
          <div className="daycount">9/19 Days</div>
          <div className="extra">Since January</div>
        </div>
      </SStatCard>
    );
};
export default StatCard

  const SStatCard = styled.div`
    flex: 1;
    max-height: auto;
    min-width: 120px;
    max-width: 200px;
    width: 100%;
    /* border: 1px solid black; */
    background: ${({ theme }) => theme.bg};
    padding: ${v.smSpacing};
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    gap: 1rem;
    .title {
      width: 100%;
      font-size: 24px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .body {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .value {
        width: 100%;
        font-size: 42px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        /* border: 1px solid black; */
      }
      .subTitle {
        /* border: 1px solid black; */
      }
    }
    .footer {
      /* border: 1px solid black; */
  
      .daycount {
      }
      .extra {
      }
    }
  `;
