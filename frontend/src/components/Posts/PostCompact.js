import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ArticleCompact = ({ article }) => {
  return (
    <StyledLink to={`/article/${article.id}`} key={article.id}>
      <Container img={`http://localhost:1337${article?.image[0]?.url}`}>
        {article.title}
      </Container>
    </StyledLink>
  );
};
export default ArticleCompact;
const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.img});
  background-size: 100%;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  border: 1px dashed black;
`;
