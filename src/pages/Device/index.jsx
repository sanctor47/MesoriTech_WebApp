import { useParams } from "react-router-dom";
import styled from "styled-components";
import Layout from "../../components/Layout";

const Device = () => {
  const params = useParams();
  console.log(params);
  return (
    <Layout>
      <Container>Device</Container>
    </Layout>
  );
};

export default Device;

const Container = styled.div``;
