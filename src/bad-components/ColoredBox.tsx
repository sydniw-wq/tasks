import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function ColoredBox(): JSX.Element {
    const COLORS = ["red", "blue", "green"];
    const DEFAULT_COLOR_INDEX = 0;
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);

    function ChangeColor(): void {
        setColorIndex((1 + colorIndex) % COLORS.length);
    }

    function ColorPreview(): JSX.Element {
        return (
            <div
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: COLORS[colorIndex],
                    display: "inline-block",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            ></div>
        );
    }
    return (
        <div>
            <h3>Colored Box</h3>
            <span>
                The current color is: <span>{COLORS[colorIndex]}</span>
            </span>
            <div>
                <Button onClick={() => ChangeColor()}>Next Color</Button>;
                <ColorPreview></ColorPreview>
            </div>
        </div>
    );
}
