import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [remain, setRemain] = useState<number>(3);
    const [request, setRequest] = useState<string>("");

    function use(): void {
        setRemain(remain - 1);
    }

    function gain(): void {
        setRemain(remain + Number(request));
    }

    function updateRequest(event: React.ChangeEvent<HTMLInputElement>) {
        setRequest(event.target.value);
    }

    return (
        <div>
            <h3>Give Attempts</h3>
            <Form.Group controlId="formGiveAttempts">
                <Form.Label>Request Attempts: </Form.Label>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={updateRequest}
                />
            </Form.Group>

            <Button disabled={remain == 0} onClick={() => use()}>
                Use
            </Button>
            <Button onClick={() => gain()}>Gain</Button>

            <div>
                Remaining Attempts: <span>{remain}</span>
            </div>
        </div>
    );
}
