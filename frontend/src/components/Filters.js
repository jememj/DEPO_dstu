import styled from "styled-components";

const constants = [
  { title: "couch", theme: "couch" },
  { title: "art", theme: "art" },
  { title: "media", theme: "media" },
  { title: "prof", theme: "prof" },
];

export const Filters = () => {
  return (
    <Wrapper>
      {constants.map(({ title, theme }, index) => (
        <div key={index} theme={theme}>
          title
        </div>
      ))}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  gap: 10px;
`;
