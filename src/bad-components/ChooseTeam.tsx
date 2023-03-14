import React, { useState } from "react";
import { Button, Row, Col } from "react-bootstrap";

const PEOPLE = [
    "Alan Turing",
    "Grace Hopper",
    "Ada Lovelace",
    "Charles Babbage",
    "Barbara Liskov",
    "Margaret Hamilton"
];

export function ChooseTeam(): JSX.Element {
    const [allOptions, setAllOptions] = useState<string[]>(PEOPLE);
    const [team, setTeam] = useState<string[]>([]);

    function chooseMember(newMember: string) {
        const newPeople = [...team, newMember];
        if (!team.includes(newMember)) {
            setTeam(newPeople);
        }

        const index = allOptions.indexOf(newMember);
        const copy = [...allOptions];
        copy.splice(index, 1, newMember);
        let final: string[] = [];
        final = copy;
        setAllOptions(final);
    }

    function clearTeam(people: string[]) {
        const copy = [...people];
        copy.splice(0, copy.length);
        let final: string[] = [];
        final = copy;
        setTeam(final);
    }

    return (
        <div>
            <h3>Choose Team</h3>
            <Row>
                <Col>
                    {allOptions.map((option: string) => (
                        <div key={option} style={{ marginBottom: "4px" }}>
                            Add{" "}
                            <Button
                                onClick={() => chooseMember(option)}
                                size="sm"
                            >
                                {option}
                            </Button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <strong>Team:</strong>
                    {team.map((member: string) => (
                        <li key={member}>{member}</li>
                    ))}
                    <Button onClick={() => clearTeam(team)}>Clear Team</Button>
                </Col>
            </Row>
        </div>
    );
}
