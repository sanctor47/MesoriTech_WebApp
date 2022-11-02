import styled from "styled-components";
import Layout from "../../components/Layout";
import { useParams } from "react-router-dom";
const Plant = () => {
  const params = useParams();
  console.log(params);
  return (
    <Layout>
      <Container>Plant</Container>
    </Layout>
  );
};

export default Plant;

const Container = styled.div``;
