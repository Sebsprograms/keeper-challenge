import React from "react";

export default function Note(props) {
    return (<div className="Note">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <button>DELETE</button>
    </div>);
}