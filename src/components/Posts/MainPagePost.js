import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const PopularPosts = ({ post }) => {
  if (!post || !post.title) return;

  return (
    <Container>
      Главная статья: <br />
      title:{post.title}
      <Wrapper>
        {post.image[0] ? (
          <Img src={`http://localhost:1337${post?.image[0]?.url}`} />
        ) : (
          <Img src="#" alt="Нет картинки" />
        )}
        description: {post.description} <br />
        <Link to={`/post/${post.id}`}>Читать</Link>
      </Wrapper>
    </Container>
  );
};

export default PopularPosts;

const Container = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  text-align: start;
`;
const Wrapper = styled.div`
  background-color: #f5f5f5;
  display: flex;
  align-items: center;
`;
const Img = styled.img`
  height: 409px;
  width: 671px;
  overflow: hidden;
  background-position: center;
  background-size: cover;
`;
