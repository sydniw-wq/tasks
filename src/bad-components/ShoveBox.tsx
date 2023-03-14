import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function ShoveBox(): JSX.Element {
    const [position, setPosition] = useState<number>(10);

    function ShoveBoxButton(): void {
        setPosition(4 + position);
    }

    function MoveableBox(): JSX.Element {
        return (
            <div
                data-testid="moveable-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "lightblue",
                    border: "1px solid blue",
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: position.toString() + "px"
                }}
            ></div>
        );
    }

    return (
        <div>
            <h3>Shove Box</h3>
            <span>The box is at: {position}</span>
            <div>
                <Button onClick={() => ShoveBoxButton()}>Shove the Box</Button>
                <MoveableBox></MoveableBox>
            </div>
        </div>
    );
}
