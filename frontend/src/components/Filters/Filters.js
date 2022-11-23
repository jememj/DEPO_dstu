import React, { useState } from "react";
import styled from "styled-components";
import { rubric } from "../../constants/rubric";
import { Link } from "react-router-dom";

export const Filters = ({ theme }) => {
  console.log(theme);
  return (
    <Container>
      {rubric.map(({ id, name, value }) => (
        <Link key={id} to={`/${theme}/${name}`}>
          {value}
        </Link>
      ))}
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;
