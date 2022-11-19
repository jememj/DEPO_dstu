import { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostsByRubric, setStatus } from "../../redux/postsSlice";
import ListArticles from "../../components/Articles/ListPosts";
import { useParams } from "react-router-dom";

const Rubric = () => {
  const dispatch = useDispatch();
  let { rubric } = useParams();

  useEffect(() => {
    dispatch(setStatus(false));
    dispatch(fetchPostsByRubric(rubric));
  }, []);

  const postsByRubric = useSelector((state) => state.postsSlice.postsByRubric);

  return (
    <Wrapper>
      <h3>{rubric}</h3>
      <ListArticles list={postsByRubric} />
    </Wrapper>
  );
};

export default Rubric;

const Wrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;
