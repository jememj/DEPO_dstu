import { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostsByTheme, setStatus } from "../redux/postsSlice";
import ListArticles from "../components/Articles/ListPosts";
import { Filters } from "../components/Filters/Filters";

const CoachPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStatus(false));
    dispatch(fetchPostsByTheme("coach"));
  }, []);

  const postsByTheme = useSelector((state) => state.postsSlice.postsByTheme);

  const status = useSelector((state) => state.postsSlice.status);
  if (!status || !postsByTheme?.length) {
    return null;
  }

  return (
    <Wrapper>
      <h3>Couch</h3>
      <Filters />
      <ListArticles list={postsByTheme} />
    </Wrapper>
  );
};

export default CoachPage;

const Wrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;
