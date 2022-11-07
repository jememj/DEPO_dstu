import styled from "styled-components";
import { Link } from "react-router-dom";

const rubric = [
  { id: "1", name: "depoRecommends", value: "Депо Рекомендует" },
  { id: "2", name: "SharpAndClear", value: "Четко и ясно" },
  { id: "3", name: "HouseOfCards", value: "Карточный домик" },
  { id: "4", name: "Interview", value: "Интервью" },
];
const Archive = () => {
  return (
    <Container>
      {rubric.map(({ name, value, id }) => (
        <Link to={`/archive`} key={id} value={name}>
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
