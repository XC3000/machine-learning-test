import React from "react";
import { Container } from "@mui/material";
import Header from "./components/Header";
import TaskGrid from "./components/TaskGrid";
import AddTaskModal from "./components/AddTaskModal";

function App() {
  return (
    <Container maxWidth="xlg">
      <Header />
      <TaskGrid />
      <AddTaskModal />
    </Container>
  );
}

export default App;
