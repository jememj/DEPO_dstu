import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { fetchPopularPosts, setStatus } from "../../redux/postsSlice";
import PostCompact from "./PostCompact";

const PopularPosts = ({ posts }) => {
  if (!posts) return;

  return (
    <ListWrapper>
      {posts.map((i) => (
        <PostCompact key={i.post.id} post={i.post} />
      ))}
    </ListWrapper>
  );
};

export default PopularPosts;

const ListWrapper = styled.div`
  background-color: #f5f5f5;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-rows: 300px;
  row-gap: 20px;
  column-gap: 20px;
  margin: 0 auto;
`;
