import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PostCompact = ({ post }) => {
  if (!post) return;

  return (
    <StyledLink to={`/post/${post.id}`} key={post.id}>
      <Container>
        <Img src={`http://localhost:1337${post?.image[0]?.url}`} />
        {post.title}
        <br />
        {post.description}
      </Container>
    </StyledLink>
  );
};
export default PostCompact;
const StyledLink = styled(Link)`
  width: 320px;
  height: 300px;
  text-decoration: none;
  color: black;
  border: 1px dashed black;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  text-align: center;
  max-height: 212px;
  max-width: 100%;
  overflow: hidden;
`;
