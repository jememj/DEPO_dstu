import React from "react";
import styled from "styled-components";
import ArticleCompact from "./ArticleCompact";

const ListArticles = ({ list }) => {
  return (
    <ListWrapper>
      {list.map((article) => (
        <ArticleCompact key={article.id} article={article} />
      ))}
    </ListWrapper>
  );
};

export default ListArticles;

const ListWrapper = styled.div`
  background-color: #f5f5f5;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 300px;
  row-gap: 20px;
  column-gap: 20px;
`;
