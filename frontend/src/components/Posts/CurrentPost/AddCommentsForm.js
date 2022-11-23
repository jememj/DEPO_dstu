import { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { addComments, fetchCommentsById } from "../../../redux/postsSlice";

export default function AddCommentsForm({ id }) {
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const isAuth = useSelector((state) => state.userSlice.token);
  const username = useSelector((state) => state.userSlice.username);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      dispatch(addComments({ post: id, text, name: username }));
      dispatch(fetchCommentsById(id));
      setText("");
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  if (!isAuth.length)
    return (
      <div>
        <input disabled />
        <Button disabled>Написать комментарий</Button>
      </div>
    );

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        onChange={handleChange}
        type="text"
        value={text}
        placeholder="Ваш комментарий"
      />
      <Button type="submit">Написать комментарий</Button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
`;
const Input = styled.input``;
const Button = styled.button``;
