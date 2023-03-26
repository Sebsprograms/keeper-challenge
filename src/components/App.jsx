import React from "react";
import Header from "./Header";
import CreateArea from "./CreateArea";
import Footer from "./Footer";
import Note from "./Note";
import './App.css';
import notes from "../data/notes";

const noteElements = notes.map(note => <Note key={note.id} title={note.title} content={note.content} />)

export default function App() {
    return(<div>
        <Header />
        <CreateArea />
        {noteElements}
        <Footer />
    </div>);
}