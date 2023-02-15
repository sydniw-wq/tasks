import React from "react";
import "./App.css";
import { Button } from "react-bootstrap";
import img from "./assets/family.png";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript, Sydni Wright
            </header>
            <h2>My Family</h2>

            <div>
                <Container>
                    <Row>
                        <Col>
                            <img src={img} alt="My siblings and I." />
                        </Col>
                        <Col>
                            <ol>
                                <li>My brother Justin is the oldest.</li>
                                <li>I am the middle child. </li>
                                <li>My sister Yasmine is the youngest.</li>
                            </ol>
                        </Col>
                    </Row>
                </Container>
            </div>

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
