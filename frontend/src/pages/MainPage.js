import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticles, setStatus } from "../redux/articlesSlice";
import ListArticles from "../components/Articles/ListArticles";

const sections = [
  { theme: "coach", name: "Коуч" },
  { theme: "art", name: "Арт" },
  { theme: "media", name: "Медиа" },
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
      {sections.map((i) => (
        <Wrapper key={i.theme}>
          <h3>{i.name}</h3>
          <ListArticles list={articles} />
        </Wrapper>
      ))}
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
