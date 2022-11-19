import React from "react";
import styled from "styled-components";
import PostCompact from "./PostCompact";

const ListArticles = ({ list }) => {
  if (!list) return null;

  return (
    <ListWrapper>
      {list.map((post) => (
        <PostCompact key={post.id} article={post} />
      ))}
    </ListWrapper>
  );
};

export default ListArticles;

const ListWrapper = styled.div`
  background-color: #f5f5f5;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 300px;
  row-gap: 20px;
  column-gap: 20px;
`;
