import { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { fetchPostsByTheme, setStatus } from "../redux/postsSlice";
import ListArticles from "../components/Articles/ListPosts";
import { Filters } from "../components/Filters/Filters";

const ArtPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setStatus(false));
    dispatch(fetchPostsByTheme("art"));
  }, []);

  const postsByTheme = useSelector((state) => state.postsSlice.postsByTheme);

  const status = useSelector((state) => state.postsSlice.status);
  if (!status || !postsByTheme?.length) {
    return null;
  }
  return (
    <Wrapper>
      <h3>Art</h3>
      <Filters />
      <ListArticles list={postsByTheme} />
    </Wrapper>
  );
};

export default ArtPage;
const Wrapper = styled.div`
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;
