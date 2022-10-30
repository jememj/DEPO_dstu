import { useEffect } from "react";

import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticlesByTheme } from "../redux/articlesSlice";
import ListArticles from "../components/Articles/ListArticles";

const ArtPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticlesByTheme("art"));
  }, []);

  const articlesByTheme = useSelector(
    (state) => state.articlesSlice.articlesByTheme
  );

  return (
    <Wrapper>
      <h3>Art</h3>
      <ListArticles list={articlesByTheme} />
    </Wrapper>
  );
};

export default ArtPage;
const Wrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;
