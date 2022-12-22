import React from "react";
import styled from "styled-components";
import PostCompact from "./PostCompact";

const ListPosts = ({ list }) => {
  if (!list) return null;

  return (
    <ListWrapper>
      {list.map((post) => (
        <PostCompact key={post.id} post={post} />
      ))}
    </ListWrapper>
  );
};

export default ListPosts;

const ListWrapper = styled.div`
  background-color: #f5f5f5;
  display: grid;
  margin: 0 auto;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 300px;
  row-gap: 20px;
  column-gap: 20px;
`;
