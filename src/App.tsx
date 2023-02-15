import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript, Sydni Wright
            </header>
            <h2>Second Header</h2>
            <img src="..assets/panda.png" alt="Cute panda holding a tree." />
            <ol>
                <li>They are no longer endangered.</li>
                <li>They are very fluffy.</li>
                <li>They act like toddlers.</li>
            </ol>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World!!!!!
            </p>
        </div>
    );
}

export default App;
