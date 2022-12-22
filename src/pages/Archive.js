import styled from "styled-components";
import { Link } from "react-router-dom";
import { rubric } from "../constants/rubric";

const Archive = () => {
  return (
    <Container>
      {rubric.map(({ name, value, id }) => (
        <Link to={`/archive/${name}`} key={id}>
          {value}
        </Link>
      ))}
    </Container>
  );
};

export default Archive;
const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;
