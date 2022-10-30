import { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import ListArticles from "../components/Articles/ListArticles";
import { fetchArticlesByTheme } from "../redux/articlesSlice";

const MediaPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticlesByTheme("media"));
  }, []);

  const articlesByTheme = useSelector(
    (state) => state.articlesSlice.articlesByTheme
  );

  return (
    <Wrapper>
      <h3>Couch</h3>
      <ListArticles list={articlesByTheme} />
    </Wrapper>
  );
};

export default MediaPage;
const Wrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;
