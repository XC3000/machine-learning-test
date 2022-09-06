import React from "react";
import styled from "@emotion/styled";

import { ReactComponent as ArrowIcon } from "../assets/arrow.svg";
import { BOARDS } from "../data/task";
import { useDispatch } from "react-redux";
import { deleteTask, shiftTask } from "../features/task/taskSlice";
import { Button } from "@mui/material";
import { AiOutlineDelete } from "react-icons/ai";
import { red } from "@mui/material/colors";

const Wrapper = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  padding: "12px",
  border: "1px solid #DEDEDE",
  borderRadius: "4px",
}));

const Header = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  marginBottom: "15px",
  justifyContent: "space-between",
});

const Text = styled("p")({
  margin: 0,
  width: "100%",
});
const TaskNumber = styled("div")(({ theme }) => ({
  margin: 0,
  border: `1px solid ${theme.background}`,
  borderRadius: "50%",
  width: "23px",
  height: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const LeftArrowIcon = styled(ArrowIcon)({
  transform: "rotateZ(180deg)",
});

const ShiftButton = styled("button")(({ theme }) => ({
  backgroundColor: "transparent",
  border: `1px solid ${theme.background}`,
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  padding: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
}));

const Footer = styled("div")({
  marginTop: "15px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

const DeleteButton = styled(Button)(({ theme }) => ({
  backgroundColor: "transparent",
  color: red[500],
}));

const TaskCard = ({ task, boardId }) => {
  const dispatch = useDispatch();

  const handleShiftTask = (boardId, task, shiftDirection) => {
    dispatch(
      shiftTask({
        boardId,
        task,
        shiftDirection,
      })
    );
  };

  const handleDeletTask = (boardId, task) => {
    dispatch(
      deleteTask({
        boardId,
        task,
      })
    );
  };

  return (
    <Wrapper>
      <Header>
        <TaskNumber>{task.id}</TaskNumber>
        <DeleteButton
          variant="primary"
          startIcon={<AiOutlineDelete />}
          onClick={() => handleDeletTask(boardId, task, 1)}
        >
          Delete
        </DeleteButton>
      </Header>
      <Text>{task.content}</Text>
      <Footer>
        {boardId !== 1 && (
          <ShiftButton onClick={() => handleShiftTask(boardId, task, -1)}>
            <LeftArrowIcon />
          </ShiftButton>
        )}

        <div></div>

        {boardId !== BOARDS.length && (
          <ShiftButton onClick={() => handleShiftTask(boardId, task, 1)}>
            <ArrowIcon />
          </ShiftButton>
        )}
      </Footer>
    </Wrapper>
  );
};

export default TaskCard;
