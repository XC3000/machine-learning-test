import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "@emotion/styled";
import { Button, Modal } from "@mui/material";

import { AiOutlineClose } from "react-icons/ai";

import { toggleAddTaskModal } from "../features/modal/modalSlice";
import { addTask } from "../features/task/taskSlice";

const AddTaskButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.background,
}));

const Title = styled("h1")({
  fontWeight: 600,
  fontSize: "28px",
  lineHeight: "42px",
  color: "#252525",
  textAlign: "center",
  marginTop: 0,
});

const FormGroup = styled("div")(({ theme }) => ({
  backgroundColor: theme.background,
  borderRadius: "4px",
  position: "relative",
  width: "100%",
  marginBottom: "15px",
}));

const FormInput = styled("input")({
  width: "100%",
  height: "100%",
  outline: "none",
  border: "none",
  background: "transparent",
  padding: "15px",
});

const ModalContainer = styled("div")({
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  background: "#fff",
  boxShadow: 24,
  padding: "20px",
});

const CloseIcon = styled(AiOutlineClose)({
  marginLeft: "auto",
  display: "block",
});

const AddTaskModal = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const { isAddTaskModalModalVisible } = useSelector((state) => state.modal);

  const handleClose = () => {
    dispatch(toggleAddTaskModal());
  };

  const handleAddTaskForm = (e) => {
    e.preventDefault();
    handleAddTask();
  };

  const handleAddTask = () => {
    dispatch(
      addTask({
        content: text,
      })
    );
    dispatch(toggleAddTaskModal());
    setText("");
  };

  return (
    <Modal
      open={isAddTaskModalModalVisible}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContainer>
        <CloseIcon />
        <Title>Add Task</Title>
        <form onSubmit={handleAddTaskForm}>
          <FormGroup>
            <FormInput
              name="task"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Add Title"
            />
          </FormGroup>
          <AddTaskButton
            type="submit"
            variant="primary"
            onClick={handleAddTask}
          >
            Add Task
          </AddTaskButton>
        </form>
      </ModalContainer>
    </Modal>
  );
};

export default AddTaskModal;
