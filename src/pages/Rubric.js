import { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPostsByRubric,
  resetRubricPosts,
  setStatus,
} from "../redux/postsSlice";
import ListPosts from "../components/Posts/ListPosts";
import { useParams } from "react-router-dom";

const Rubric = () => {
  const dispatch = useDispatch();
  let { theme, rubric } = useParams();

  useEffect(() => {
    dispatch(setStatus(false));
    dispatch(resetRubricPosts());
    dispatch(fetchPostsByRubric({ rubric, theme }));
  }, []);
  console.log("theme", theme);
  const postsByRubric = useSelector((state) => state.postsSlice.postsByRubric);

  return (
    <Wrapper>
      <h3>{rubric}</h3>
      <ListPosts list={postsByRubric} />
    </Wrapper>
  );
};

export default Rubric;

const Wrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;
