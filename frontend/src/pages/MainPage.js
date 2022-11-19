import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, setStatus } from "../redux/postsSlice";
import ListPosts from "../components/Articles/ListPosts";
import { Link } from "react-router-dom";

const MainPage = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsSlice.posts);

  useEffect(() => {
    dispatch(setStatus(false));
    dispatch(fetchPosts());
  }, []);

  const status = useSelector((state) => state.postsSlice.status);
  if (!status || !posts?.length) {
    return null;
  }

  return (
    <Container>
      <Link to={`/archive`}>Архив</Link>
      Art
      <ListPosts list={posts} />
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
