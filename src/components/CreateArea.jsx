import React from "react";

function CreateArea(props) {
  const [noteData, setNoteData] = React.useState({title: "", content:""});

  function handleChange(event) {
    const {name, value} = event.target;
    setNoteData(prev => ({...prev, [name] : value}));
  }

  function handleSubmit(event){
    props.createNote(noteData);
    setNoteData({title: "", content: ""});
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={noteData.title} name="title" placeholder="Title" />
        <textarea onChange={handleChange} value={noteData.content} name="content" placeholder="Take a note..." rows="3" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
