import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editing, setEditing] = useState<boolean>(false);
    const [student, setStudent] = useState<boolean>(true);

    function updateEditing(event: React.ChangeEvent<HTMLInputElement>) {
        setEditing(event.target.checked);
    }
    function updateStudent(event: React.ChangeEvent<HTMLInputElement>) {
        setStudent(event.target.checked);
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
                <Form.Check
                    type="checkbox"
                    id="is-student-check"
                    label="Are you a Student?"
                    checked={student}
                    onChange={updateStudent}
                />
            </div>
            <div>Your name is {student ? "a student" : "not a student"} </div>
        </div>
    );
}
