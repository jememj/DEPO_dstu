import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles, setStatus } from "../redux/articlesSlice";
import ListArticles from "../components/Articles/ListArticles";
import { Filters } from "../components/Filters/Filters";
import { Link } from "react-router-dom";

const sections = [
  { theme: "coach", name: "Коуч" },
  { theme: "art", name: "Арт" },
];

const MainPage = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articlesSlice.articles);

  useEffect(() => {
    dispatch(setStatus(false));
    dispatch(fetchArticles());
  }, []);

  const status = useSelector((state) => state.articlesSlice.status);
  if (!status || !articles?.length) {
    return null;
  }

  return (
    <Container>
      <Link to={`/archive`}>Архив</Link>
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
