import { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticlesByTheme, setStatus } from "../redux/articlesSlice";
import ListArticles from "../components/Articles/ListArticles";
import { Filters } from "../components/Filters/Filters";

const CoachPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStatus(false));
    dispatch(fetchArticlesByTheme("coach"));
  }, []);

  const articlesByTheme = useSelector(
    (state) => state.articlesSlice.articlesByTheme
  );

  const status = useSelector((state) => state.articlesSlice.status);
  if (!status || !articlesByTheme?.length) {
    return null;
  }

  return (
    <Wrapper>
      <h3>Couch</h3>
      <Filters />
      <ListArticles list={articlesByTheme} />
    </Wrapper>
  );
};

export default CoachPage;

const Wrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;
