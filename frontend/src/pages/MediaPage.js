import { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import ListArticles from "../components/Posts/ListPosts";
import { fetchPostsByTheme, setStatus } from "../redux/postsSlice";
import { Filters } from "../components/Filters/Filters";

const MediaPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStatus(false));
    dispatch(fetchPostsByTheme("media"));
  }, []);

  const postsByTheme = useSelector((state) => state.postsSlice.postsByTheme);
  const status = useSelector((state) => state.postsSlice.status);

  if (!status || !postsByTheme?.length) {
    return null;
  }

  return (
    <Wrapper>
      <h3>Media</h3>
      <Filters theme="media" />
      <ListArticles list={postsByTheme} />
    </Wrapper>
  );
};

export default MediaPage;
const Wrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;
