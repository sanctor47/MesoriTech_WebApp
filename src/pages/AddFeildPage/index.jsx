import { useState } from "react";
import styled from "styled-components";
import Layout from "../../components/Layout";

const AddFeildPage = () => {
  const [name, setName] = useState()
  const [area, setArea] = useState()
  return (
    <Layout>
      <Container>
        <div className="title">AddFeildPage</div>
        <form>
          <div className="inputGroup">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter Feild Name"/>
          </div>
        </form>
      </Container>
    </Layout>
  );
};

export default AddFeildPage;

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
