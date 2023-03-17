import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    const [student, setStudent] = useState<boolean>(true);
    const [name, setName] = useState<string>("Your name");
    function updateEditing(event: React.ChangeEvent<HTMLInputElement>) {
        setEditing(event.target.checked);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
    }
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="editing-mode-check"
                label="Change to Edit Mode?"
                checked={editing}
                onChange={updateEditing}
            />
            <div>
                {editing ? (
                    <div>
                        <div>
                            <Form.Check
                                type="checkbox"
                                id="is-student-check"
                                label="Are you a Student?"
                                checked={student}
                                onChange={updateStudent}
                            />
                        </div>
                        <div>
                            <Form.Group controlId="formEditName">
                                <Form.Label>Edit Name: </Form.Label>
                                <Form.Control
                                    value={name}
                                    onChange={updateName}
                                />
                            </Form.Group>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>

            <div>
                {name} is {student ? "a student" : "not a student"}
            </div>
        </div>
    );
}
