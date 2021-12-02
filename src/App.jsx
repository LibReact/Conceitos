import React from "react";

// Component Welcome
function Welcome (props) {
    return <h1>Que tal, {props.name}</h1>;
}

function App() {
    return (
        <div>
            <Welcome name="Aprendermos React?" />
        </div>
    )
}

export default App;