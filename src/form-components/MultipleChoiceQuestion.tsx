import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [choice, setChoice] = useState<string>(options[0]);
    function updateChoicen(event: React.ChangeEvent<HTMLSelectElement>) {
        setChoice(event.target.value);
    }
    function check(): string {
        if (choice == expectedAnswer) {
            return "✔️";
        } else {
            return "❌";
        }
    }
    const final = check();
    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <Form.Group controlId="userChoices">
                <Form.Label>Answer the Question</Form.Label>
                <Form.Select value={choice} onChange={updateChoicen}>
                    <option value={options[0]}>A</option>
                    <option value={options[1]}>B</option>
                    <option value={options[2]}>C</option>
                </Form.Select>
            </Form.Group>
            Check your answer: {final}.
        </div>
    );
}
