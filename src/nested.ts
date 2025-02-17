import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const newQuestions = questions.filter(
        (question: Question): boolean => question.published == true
    );

    return newQuestions;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const nonEmptyQuestions = questions.filter(
        (question: Question): boolean =>
            question.body != "" ||
            question.expected != "" ||
            question.options.length > 0
    );
    return nonEmptyQuestions;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    if (questions.length > 0) {
        const finalQuestion = questions.filter(
            (question: Question): boolean => question.id == id
        );
        if (finalQuestion.length < 1) {
            return null;
        } else {
            return finalQuestion[0];
        }
    } else {
        return null;
    }
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const finalQuestion = [...questions];
    const final = finalQuestion.filter(
        (question: Question): boolean => question.id != id
    );
    return final;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    let newArr: string[] = [];
    newArr = questions.map((question: Question): string => question.name);
    return newArr;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    let pointsArr: number[] = [];
    let sum = 0;
    pointsArr = questions.map((question: Question): number => question.points);
    sum = pointsArr.reduce((total: number, num: number) => total + num, 0);
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions.
 */
export function sumPublishedPoints(questions: Question[]): number {
    let sum = 0;
    const publishedQues = questions.filter(
        (question: Question): boolean => question.published == true
    );
    sum = sumPoints(publishedQues);
    return sum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    const newArr = [...questions];
    const strnArr = newArr.map(
        (question: Question): string =>
            question.id.toString() +
            "," +
            question.name +
            "," +
            question.options.length.toString() +
            "," +
            question.points.toString() +
            "," +
            question.published.toString()
    );
    const combine = strnArr.join("\n");
    return "id,name,options,points,published\n" + combine;
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const deepCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    function makeBlankAnswer(questionId: number): Answer {
        const text = "";
        const submitted = false;
        const correct = false;
        return {
            questionId: questionId,
            text: text,
            submitted: submitted,
            correct: correct
        };
    }
    const newArr = deepCopy.map(
        (question: Question): Answer => makeBlankAnswer(question.id)
    );
    return newArr;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const deepCopy = questions.map(
        (question: Question): Question => ({ ...question, published: true })
    );
    return deepCopy;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    const clones = [...questions];
    const short = clones.every(
        (clone: Question): boolean => clone.type == "short_answer_question"
    );
    const multiple = clones.every(
        (clone: Question): boolean => clone.type == "multiple_choice_question"
    );
    if (short == true) {
        return true;
    } else if (multiple == true) {
        return true;
    } else {
        return false;
    }
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const deepCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const blankQuestion = makeBlankQuestion(id, name, type);
    deepCopy.push(blankQuestion);

    return deepCopy;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const deepCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const index = deepCopy.findIndex(
        (question: Question): boolean => question.id == targetId
    );
    deepCopy[index].name = newName;
    return deepCopy;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const deepCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const index = deepCopy.findIndex(
        (question: Question): boolean => question.id == targetId
    );
    deepCopy[index].type = newQuestionType;
    if (deepCopy[index].type == "short_answer_question") {
        deepCopy[index].options = [];
    }
    return deepCopy;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const deepCopy = questions.map(
        (question: Question): Question => ({
            ...question,
            options: [...question.options]
        })
    );
    const index = deepCopy.findIndex(
        (question: Question): boolean => question.id == targetId
    );

    const optArr = deepCopy[index].options;
    let optArr2: string[] = [];
    if (targetOptionIndex == -1) {
        optArr2 = [...optArr, newOption];
    } else {
        optArr.splice(targetOptionIndex, 1, newOption);
        optArr2 = optArr;
    }
    deepCopy[index].options = optArr2;
    return deepCopy;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    let final: Question[] = [];
    const deepCopy = questions.map(
        (question: Question): Question => ({ ...question })
    );
    const index = deepCopy.findIndex(
        (question: Question): boolean => question.id == targetId
    );
    const duplicate = duplicateQuestion(newId, deepCopy[index]);
    deepCopy.splice(index + 1, 0, duplicate);
    final = deepCopy;
    return final;
}
