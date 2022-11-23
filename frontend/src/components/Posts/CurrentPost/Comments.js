import { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { fetchCommentsById, resetComments } from "../../../redux/postsSlice";
import AddCommentsForm from "./AddCommentsForm";
import dayjs from "dayjs";

export default function Comments({ comments, id }) {
  return (
    <Container>
      Комментарии
      <AddCommentsForm id={id} />
      {comments?.map((info) => (
        <FormComment key={info.id}>
          <TextComment>
            {dayjs(info.createdAt).format("DD/MM/YYYY")}
          </TextComment>
          <TextComment>name: {info.name}</TextComment>
          <TextComment>text: {info.text}</TextComment>
        </FormComment>
      ))}
    </Container>
  );
}
const Container = styled.div`
  min-height: 200px;
  padding: 5px;
  align-items: start;
  text-align: start;
  display: flex;
  flex-direction: column;
  background-color: #dcdcdc;
`;
const FormComment = styled.div`
  padding: 5px;
  align-items: start;
  text-align: start;
  display: flex;
`;
const TextComment = styled.div`
  font-size: 13px;
  line-height: 15px;
  padding: 10px;
`;
