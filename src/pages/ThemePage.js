import { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import ListPosts from "../components/Posts/ListPosts";
import {
  fetchPostsByTheme,
  setStatus,
  resetThemePosts,
} from "../redux/postsSlice";
import { Filters } from "../components/Filters/Filters";
import { useParams } from "react-router-dom";

const ThemePage = () => {
  const dispatch = useDispatch();
  let { theme } = useParams();

  useEffect(() => {
    dispatch(setStatus(false));
    dispatch(resetThemePosts());
    dispatch(fetchPostsByTheme(theme));
  }, [theme]);

  const postsByTheme = useSelector((state) => state.postsSlice.postsByTheme);
  const status = useSelector((state) => state.postsSlice.status);

  if (!status || !postsByTheme?.length) {
    return null;
  }

  return (
    <Wrapper>
      <h3>{theme}</h3>
      <Filters theme={theme} />
      <ListPosts list={postsByTheme} />
    </Wrapper>
  );
};

export default ThemePage;

const Wrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;
