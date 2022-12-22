import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPosts,
  fetchPopularPosts,
  fetchMainPost,
  setStatus,
} from "../redux/postsSlice";
import ListPosts from "../components/Posts/ListPosts";
import { Link } from "react-router-dom";
import PopularPosts from "../components/Posts/PopularPosts";
import MainPagePost from "../components/Posts/MainPagePost";

const MainPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsSlice.posts);
  const popularPosts = useSelector((state) => state.postsSlice.popularPosts);
  const MainPost = useSelector((state) => state.postsSlice.mainPost);

  useEffect(() => {
    dispatch(setStatus(false));
    dispatch(fetchPosts());
    dispatch(fetchPopularPosts());
    dispatch(fetchMainPost());
  }, []);

  const status = useSelector((state) => state.postsSlice.status);
  if (!status || !posts?.length) {
    return null;
  }

  return (
    <Container>
      <Link to={`/archive`}>Архив</Link>
      <MainPagePost post={MainPost} />
      <h2>Популярное</h2>
      <PopularPosts posts={popularPosts} />
    </Container>
  );
};

export default MainPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
const Wrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;
