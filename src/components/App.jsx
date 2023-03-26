import React from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Note from "./Note";
import './App.css';


export default function App() {
    const startingData = [
        {
            id: 0,
            title: "Delegation",
            content:
            "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem"
        },];
    const [notes, setNotes] = React.useState(startingData);

    function createNote(newNote) {
        setNotes(prev => [...prev, { id: prev.length,...newNote}]);
    }

    function deleteNote(id) {
        setNotes(prev => {
            return prev.filter(note => note.id !== id);
        })
    }

    const noteElements = notes.map(note => <Note deleteNote={deleteNote} key={note.id} id={note.id} title={note.title} content={note.content} />);
    return(<div>
        <Header />
        <CreateArea createNote={createNote} />
        {noteElements}
        <Footer />
    </div>);
}