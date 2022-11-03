import { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { fetchArticleById, setStatus } from "../../redux/articlesSlice";
import { useParams } from "react-router-dom";

const CurrentArticle = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const articleById = useSelector(
    (state) => state.articlesSlice.currentArticle
  );
  useEffect(() => {
    dispatch(setStatus(false));
    dispatch(fetchArticleById(id));
  }, []);

  console.log("articleById", articleById);

  const status = useSelector((state) => state.articlesSlice.status);
  console.log("status", status);
  if (!status || !articleById?.length) {
    return null;
  }
  return (
    <Container>
      <Wrapper>
        <div>Тема: {articleById[0].theme}</div>
        <div>Рубрика: {articleById[0].rubric}</div>
      </Wrapper>
      <h3>Название: {articleById[0].title}</h3>
      <Text>Текст: {articleById[0].text}</Text>
    </Container>
  );
};
export default CurrentArticle;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Wrapper = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  margin: auto;
`;
const Text = styled.div`
  margin: auto;
  width: 60%;
`;
