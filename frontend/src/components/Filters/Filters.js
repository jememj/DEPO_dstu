import React, { useState } from "react";
import styled from "styled-components";
import { rubric } from "../../constants/rubric";

export const Filters = () => {
  return (
    <Container>
      {rubric.map(({ id, name, value }) => (
        <div key={id}>{value}</div>
      ))}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;
