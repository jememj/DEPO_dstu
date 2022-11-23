import { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPostById,
  setStatus,
  resetPost,
  fetchCommentsById,
  resetComments,
} from "../../../redux/postsSlice";
import { addPostToFav, delPostFromFav } from "../../../redux/userSlice";
import { useParams } from "react-router-dom";
import Comments from "./Comments";

const CurrentArticle = () => {
  const dispatch = useDispatch();

  let { id } = useParams();

  const postById = useSelector((state) => state.postsSlice.currentPost);
  const status = useSelector((state) => state.postsSlice.status);
  const commentsById = useSelector((state) => state.postsSlice.commentsById);
  const isFavorite = useSelector(
    (state) =>
      state.userSlice.favoritesPosts?.filter((i) => i.id == id)?.length !== 0
  );

  const handleAddToFavorites = (id) => {
    dispatch(addPostToFav(id));
  };

  const handleDeleteToFavorites = (id) => {
    dispatch(delPostFromFav(id));
  };
  useEffect(() => {
    dispatch(fetchCommentsById(id));
    dispatch(fetchPostById(id));
    return () => {
      dispatch(resetPost(false));
      dispatch(setStatus(false));
      dispatch(resetComments(false));
    };
  }, []);

  if (!status || !postById?.text || !commentsById) {
    return null;
  }
  return (
    <Container>
      <Wrapper>
        <div>Тема: {postById.theme}</div>
        <div>Рубрика: {postById.rubric}</div>
        <button>like</button>
        {isFavorite ? (
          <FavButton
            isFavorite
            onClick={() => handleDeleteToFavorites(postById.id)}
          >
            Избранное
          </FavButton>
        ) : (
          <FavButton onClick={() => handleAddToFavorites(postById)}>
            Избранное
          </FavButton>
        )}
      </Wrapper>
      <h3>Название: {postById.title}</h3>
      <Text>Текст: {postById.text}</Text>
      <Comments id={id} comments={commentsById} />
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
const FavButton = styled.button`
  width: 80px;
  height: 40px;
  color: ${(props) => (props.isFavorite ? "#5f35" : "#000")};
`;
