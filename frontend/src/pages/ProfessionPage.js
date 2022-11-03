import { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import ListArticles from "../components/Articles/ListArticles";
import { fetchArticlesByTheme, setStatus } from "../redux/articlesSlice";

const ProfessionPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStatus(false));
    dispatch(fetchArticlesByTheme("prof"));
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
      <h3>Prof</h3>
      <ListArticles list={articlesByTheme} />
    </Wrapper>
  );
};

export default ProfessionPage;

const Wrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;
