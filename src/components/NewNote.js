import React from "react";

function NewNote(props) {
  return <div>
    <li>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </li>
  </div>
}

export default NewNote;