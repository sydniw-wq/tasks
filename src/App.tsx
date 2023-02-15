import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import img from "./assets/family.png";
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript, Sydni Wright
            </header>
            <h2>My Family</h2>
            <img src={img} alt="My siblings and I." />
            <ol>
                <li>My brother Justin is the oldest.</li>
                <li>I am the middle child. </li>
                <li>My sister Yasmine is the youngest.</li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World!!!!!
            </p>
        </div>
    );
}

export default App;
