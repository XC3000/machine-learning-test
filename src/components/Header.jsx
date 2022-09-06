import React from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";

import { Button } from "@mui/material";

import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import { toggleAddTaskModal } from "../features/modal/modalSlice";
import { setSearchText } from "../features/task/taskSlice";

const StyledHeader = styled("header")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: "2rem",
  marginBottom: "5rem",
});

const SearchWrapper = styled("form")(({ theme }) => ({
  backgroundColor: theme.background,
  borderRadius: "8px",
  maxWidth: "400px",
  position: "relative",
  width: "100%",
}));

const SearchInput = styled("input")({
  width: "100%",
  height: "100%",
  outline: "none",
  border: "none",
  background: "transparent",
  padding: "15px",
});

const SearchInputIcon = styled(BiSearch)({
  position: "absolute",
  right: "20px",
  top: "50%",
  transform: "translateY(-50%)",
  cursor: "pointer",
});

const AddTaskButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.background,
}));

const Header = () => {
  const dispatch = useDispatch();
  const handleAddTaskModal = () => {
    dispatch(toggleAddTaskModal());
  };

  const handleSearchInput = (alphabet) => {
    dispatch(setSearchText(alphabet));
  };

  return (
    <StyledHeader>
      <SearchWrapper>
        <SearchInput
          onChange={(e) => handleSearchInput(e.target.value)}
          placeholder="Search Task"
        />
        <SearchInputIcon className="search-icon" />
      </SearchWrapper>
      <AddTaskButton
        variant="primary"
        startIcon={<AiOutlinePlus />}
        onClick={handleAddTaskModal}
      >
        Add Task
      </AddTaskButton>
    </StyledHeader>
  );
};

export default Header;
