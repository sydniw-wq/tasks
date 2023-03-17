import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    function chooseMark(answer: string): string {
        if (answer == expectedAnswer) {
            return "✔️";
        } else {
            return "❌";
        }
    }

    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }
    const final = chooseMark(answer);
    return (
        <div>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Enter Answer: </Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>
            <div> {final}</div>
        </div>
    );
}
