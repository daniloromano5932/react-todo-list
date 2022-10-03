import React from "react";

function ToDoForm() {
  return <form>
    <div>
      <label for="title">Note Title</label>
      <input type="text" name="title"/> </div>
    <div>
      <label for="content">Note Content</label>
      <textarea name="content" /></div>
      <button type="button">Add Note</button>
  </form>
}

export default ToDoForm;