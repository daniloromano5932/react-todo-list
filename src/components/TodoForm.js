import React, {useState} from "react";


function ToDoForm() {

  const [noteTitle, setNoteTitle] = useState("")
  const [noteContent, setNoteContent] = useState("")

  function saveNoteTitle(e) {
    const newTitle = e.target.value;
    setNoteTitle(newTitle);
  }

  function saveNoteContent(e) {
    const newContent = e.target.value;
    setNoteContent(newContent)
  }

  function addNote() {
    console.log(noteTitle, noteContent);
    setNoteTitle("");
    setNoteContent("")
  }

  return <form>
    <div>
      <label for="title" >Note Title</label>
      <input type="text" name="title" onChange={saveNoteTitle} value={noteTitle}/> </div>
    <div>
      <label for="content">Note Content</label>
      <textarea name="content" onChange={saveNoteContent} value={noteContent} /></div>
      <button type="button" onClick={addNote}>Add Note</button>
  </form>
}

export default ToDoForm;