import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addComments, fetchCommentsById } from "../../../redux/articlesSlice";
import generateRandomId from "../../../utils/generateRandomId";

export default function AddCommentsForm({ id }) {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const commentId = generateRandomId();
    if (text) {
      dispatch(
        addComments({ id: commentId, articleId: id, text, name: "test" })
      );
      dispatch(fetchCommentsById(id));
      setText("");
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

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
