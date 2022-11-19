import { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import ListArticles from "../components/Articles/ListPosts";
import { fetchPostsByTheme, setStatus } from "../redux/postsSlice";
import { Filters } from "../components/Filters/Filters";

const ProfessionPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStatus(false));
    dispatch(fetchPostsByTheme("prof"));
  }, []);

  const postsByTheme = useSelector((state) => state.postsSlice.postsByTheme);
  const status = useSelector((state) => state.postsSlice.status);

  if (!status || !postsByTheme?.length) {
    return null;
  }

  return (
    <Wrapper>
      <h3>Prof</h3>
      <Filters />
      <ListArticles list={postsByTheme} />
    </Wrapper>
  );
};

export default ProfessionPage;

const Wrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;
