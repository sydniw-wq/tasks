import React from "react";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript, Sydni Wright
            </header>
            <h2>Second Header</h2>
            <img src="..assets/panda.png" alt="Cute panda holding a tree." />
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World!!!!!
            </p>
        </div>
    );
}

export default App;
