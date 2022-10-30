import React from "react";
import styled from "styled-components";

const ArticleCompact = ({ article }) => {
  return (
    <>
      <Item key={article.id}>{article.title}</Item>
    </>
  );
};
export default ArticleCompact;
const Item = styled.div`
  width: 400px;
  border: 1px solid black;
  margin: 5px;
`;
