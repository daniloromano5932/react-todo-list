import React from "react";
import NewNote from "./NewNote";

function NotesArea(props) {
  return <div>
    <ul>
      <NewNote title={props.title} content={props.content} />
    </ul>
  </div>
 }

export default NotesArea;