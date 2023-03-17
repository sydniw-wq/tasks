import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("");
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-red"
                label={
                    <div
                        data-testid="colored-box"
                        style={{ backgroundColor: "red" }}
                    >
                        red
                    </div>
                }
                value="red"
                checked={color === "red"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-orange"
                label={
                    <div
                        data-testid="colored=box"
                        style={{ backgroundColor: "orange" }}
                    >
                        orange
                    </div>
                }
                value="orange"
                checked={color === "orange"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-yellow"
                label={
                    <div
                        data-testid="colored=box"
                        style={{ backgroundColor: "yellow" }}
                    >
                        yellow
                    </div>
                }
                value="yellow"
                checked={color === "yellow"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-green"
                label={
                    <div
                        data-testid="colored=box"
                        style={{ backgroundColor: "green" }}
                    >
                        green
                    </div>
                }
                value="green"
                checked={color === "green"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-blue"
                label={
                    <div
                        data-testid="colored=box"
                        style={{ backgroundColor: "blue" }}
                    >
                        blue
                    </div>
                }
                value="blue"
                checked={color === "blue"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-purple"
                label={
                    <div
                        data-testid="colored=box"
                        style={{ backgroundColor: "purple" }}
                    >
                        purple
                    </div>
                }
                value="purple"
                checked={color === "purple"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-pink"
                label={
                    <div
                        data-testid="colored=box"
                        style={{ backgroundColor: "pink" }}
                    >
                        pink
                    </div>
                }
                value="pink"
                checked={color === "pink"}
            />
            <Form.Check
                inline
                type="radio"
                name="colors"
                onChange={updateColor}
                id="color-check-grey"
                label={
                    <div
                        data-testid="colored=box"
                        style={{ backgroundColor: "grey" }}
                    >
                        grey
                    </div>
                }
                value="grey"
                checked={color === "grey"}
            />

            <div>
                You have chosen{" "}
                <span
                    data-testid="colored=box"
                    style={{ backgroundColor: color }}
                >
                    {color}
                </span>
                .
            </div>
        </div>
    );
}
