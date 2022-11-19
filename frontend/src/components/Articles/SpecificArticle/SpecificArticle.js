import { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostById, setStatus } from "../../../redux/postsSlice";
import { useParams } from "react-router-dom";
import Comments from "./Comments";

const CurrentArticle = () => {
  const dispatch = useDispatch();

  let { id } = useParams();

  const articleById = useSelector((state) => state.postsSlice.currentPost);
  useEffect(() => {
    dispatch(setStatus(false));
    dispatch(fetchPostById(id));
  }, []);

  const status = useSelector((state) => state.postsSlice.status);
  if (!status || !articleById) {
    return null;
  }

  return (
    <Container>
      <Wrapper>
        <div>Тема: {articleById.theme}</div>
        <div>Рубрика: {articleById.rubric}</div>
        <button>like</button>
        <button>add to fav</button>
      </Wrapper>
      <h3>Название: {articleById.title}</h3>
      <Text>Текст: {articleById.text}</Text>
      <Comments id={id} />
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
