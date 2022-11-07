import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ArticleCompact = ({ article }) => {
  return (
    <StyledLink to={`/article/${article.id}`} key={article.id}>
      <Container>{article.title}</Container>
    </StyledLink>
  );
};
export default ArticleCompact;
const Container = styled.div`
  width: 100%;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  border: 1px dashed black;
`;
