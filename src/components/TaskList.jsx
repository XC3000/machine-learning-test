import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";
import TaskCard from "./TaskCard";

const Wrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.background,
  padding: "15px 10px",
  border: `1px solid ${theme.background}`,
}));

const Title = styled("p")({
  margin: 0,
  lineHeight: "24px",
  textTransform: "uppercase",
  color: "#252525",
});

const TaskListContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  marginTop: "20px",
});

const TaskList = ({ boardId }) => {
  const tasks = useSelector((state) => state.task[boardId]);
  const searchText = useSelector((state) => state.task.searchText);

  function search(tasks) {
    return tasks.filter((task) => task.content.includes(searchText));
  }

  return (
    <Wrapper>
      <Title>Step {boardId}</Title>
      <TaskListContainer>
        {search(tasks).map((task) => (
          <TaskCard task={task} key={task.id} boardId={boardId} />
        ))}
      </TaskListContainer>
    </Wrapper>
  );
};

export default TaskList;
