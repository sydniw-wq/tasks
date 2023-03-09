import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);

    function start(): void {
        setAttempts(attempts - 1);
        setProgress(true);
    }
    function stop(): void {
        setProgress(false);
    }
    function mulligan(): void {
        setAttempts(attempts + 1);
    }

    return (
        <div>
            <div>
                <Button disabled={progress == false} onClick={stop}>
                    Stop Quiz
                </Button>
                <Button
                    disabled={progress == true || attempts == 0}
                    onClick={start}
                >
                    Start Quiz
                </Button>
                <Button disabled={progress == true} onClick={mulligan}>
                    Mulligan
                </Button>
            </div>
            <div>Attempts: {attempts}</div>
        </div>
    );
}
