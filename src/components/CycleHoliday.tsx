import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "Christmas"
    | "Halloween"
    | "Easter"
    | "Thanksgiving"
    | "Valentine";

const ALPHABET: Record<Holiday, Holiday> = {
    Christmas: "Easter",
    Halloween: "Thanksgiving",
    Easter: "Halloween",
    Thanksgiving: "Valentine",
    Valentine: "Christmas"
};

const TIME: Record<Holiday, Holiday> = {
    Valentine: "Easter",
    Easter: "Halloween",
    Halloween: "Thanksgiving",
    Thanksgiving: "Christmas",
    Christmas: "Valentine"
};

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("Christmas");

    function alphabet(): void {
        const newHoliday = ALPHABET[holiday];
        setHoliday(newHoliday);
    }

    function time(): void {
        const newHoliday = TIME[holiday];
        setHoliday(newHoliday);
    }

    function chooseEmoji(): string {
        if (holiday == "Christmas") {
            return "🎄";
        } else if (holiday == "Halloween") {
            return "🎃";
        } else if (holiday == "Easter") {
            return "🐰";
        } else if (holiday == "Thanksgiving") {
            return "🦃";
        } else {
            return "♥️";
        }
    }

    const final = chooseEmoji();
    return (
        <div>
            Holiday: <span>{final}</span>
            <div>
                <Button onClick={alphabet}> Advance by Alphabet </Button>
            </div>
            <div>
                <Button onClick={time}> Advance by Year </Button>
            </div>
        </div>
    );
}
