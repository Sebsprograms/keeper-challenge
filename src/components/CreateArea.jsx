import React from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab, Zoom } from "@mui/material";

function CreateArea(props) {
  const [noteData, setNoteData] = React.useState({title: "", content:""});
  const [show, setShow] = React.useState(false);

  function handleChange(event) {
    const {name, value} = event.target;
    setNoteData(prev => ({...prev, [name] : value}));
  }

  function handleSubmit(event){
    props.createNote(noteData);
    setNoteData({title: "", content: ""});
    toggleShow();
    event.preventDefault();
  }

  function toggleShow() {
    setShow(prev => !prev);
  }

  return (
    <div>
      <form  className="create-note">
      {show &&
        <Zoom in={true}>
        <input onChange={handleChange} value={noteData.title} name="title" placeholder="Title" />
        </Zoom>}
        <textarea onClick={toggleShow} onChange={handleChange} value={noteData.content} name="content" placeholder="Take a note..." rows={show ? "3": "1"} />
       {show &&
       <Zoom in={true}>
        <Fab onClick={handleSubmit} color="primary" aria-label="add">
          <AddIcon />
        </Fab>
       </Zoom>}
      </form>
    </div>
  );
}

export default CreateArea;
