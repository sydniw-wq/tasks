import React from "react";
import "./App.css";

import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";

import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
//import { EditMode } from "./form-components/EditMode";
//import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";
//import { ChangeColor } from "./form-components/ChangeColor";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript, Sydni Wright
            </header>

            <CheckAnswer expectedAnswer="42"></CheckAnswer>
            {<GiveAttempts></GiveAttempts>}
            {/*<EditMode></EditMode>*/}
            {/*<ChangeColor></ChangeColor>*/}
            {/*<MultipleChoiceQuestion
                options={["a", "b", "c"]}
                expectedAnswer="b"
            ></MultipleChoiceQuestion>*/}

            <Counter></Counter>
            <RevealAnswer></RevealAnswer>
            <ChangeType></ChangeType>
            <StartAttempt></StartAttempt>
            <TwoDice></TwoDice>
            <CycleHoliday></CycleHoliday>
            <DoubleHalf></DoubleHalf>
            <ChooseTeam></ChooseTeam>
            <ColoredBox></ColoredBox>
            <ShoveBox></ShoveBox>
        </div>
    );
}

export default App;
