import styled from "styled-components";

const constants = [
  { title: "Английский", category: "english" },
  { title: "Украинский", category: "ukraine" },
  { title: "Веб", category: "web" },
  { title: "История", category: "history" },
];

export const Filters = () => {
  return (
    <Wrapper>
      {constants.map(({ title, category }, index) => (
        <FilterButton key={index} title={title} category={category} />
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;
