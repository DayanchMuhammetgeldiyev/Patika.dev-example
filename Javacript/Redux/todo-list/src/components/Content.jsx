import React from "react";
import Todolist from "./TodoList";
import ContentFooter from "./ContentFooter";

function Content() {
  return (
    <>
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <Todolist />
    </section>
    <ContentFooter />
    </>
  );
}

export default Content;
