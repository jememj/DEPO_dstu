import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import {
  fetchArticlesByTheme,
  setStatus,
  setFiltersTheme,
  setFiltersRubric,
} from "../../redux/articlesSlice";

const rubric = [
  { id: "1", name: "depoRecommends", value: "Депо Рекомендует" },
  { id: "2", name: "SharpAndClear", value: "Четко и ясно" },
  { id: "3", name: "HouseOfCards", value: "Карточный домик" },
  { id: "4", name: "Interview", value: "Интервью" },
];

export const Filters = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(setStatus(false));
  };
  const handleChangeFilterRubric = (e) => {
    e.preventDefault();

    dispatch(setFiltersRubric(e.target.value));
    handleSubmit(e);
  };
  return (
    <Wrapper>
      <p>Filters</p>
      <div onChange={handleChangeFilterRubric}>
        {rubric.map(({ name, value }, index) => (
          <button key={index} value={name}>
            {value}
          </button>
        ))}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
`;
