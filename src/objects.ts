import { Question, QuestionType } from "./interfaces/question";

/**
 * Create a new blank question with the given `id`, `name`, and `type. The `body` and
 * `expected` should be empty strings, the `options` should be an empty list, the `points`
 * should default to 1, and `published` should default to false.
 */
export function makeBlankQuestion(
    id: number,
    name: string,
    type: QuestionType
): Question {
    const body = "";
    const expected = "";
    const options: string[] = [];
    const points = 1;
    const published = false;

    return {
        id: id,
        name: name,
        type: type,
        body: body,
        expected: expected,
        options: options,
        points: points,
        published: published
    };
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is correct. You should check that the `answer` is equal to
 * the `expected`, ignoring capitalization and trimming any whitespace.
 *
 * HINT: Look up the `trim` and `toLowerCase` functions.
 */
export function isCorrect(question: Question, answer: string): boolean {
    const final = answer.toLowerCase().trim();
    const expect = question.expected.toLowerCase().trim();
    if (final == expect) {
        return true;
    } else {
        return false;
    }
}

/**
 * Consumes a question and a potential `answer`, and returns whether or not
 * the `answer` is valid (but not necessarily correct). For a `short_answer_question`,
 * any answer is valid. But for a `multiple_choice_question`, the `answer` must
 * be exactly one of the options.
 */
export function isValid(question: Question, answer: string): boolean {
    const clones: string[] = [...question.options];
    let checks: boolean[] = [];
    let num1: number[] = [];
    let count = 0;

    if (question.type == "short_answer_question") {
        return true;
    } else {
        checks = clones.map((clone: string): boolean =>
            clone === answer ? true : false
        );
        num1 = checks.map((check: boolean): number => Number(check));
        count = num1.reduce((total: number, num: number) => total + num, 0);
        if (count == 1) {
            return true;
        } else {
            return false;
        }
    }
}

/**
 * Consumes a question and produces a string representation combining the
 * `id` and first 10 characters of the `name`. The two strings should be
 * separated by ": ". So for example, the question with id 9 and the
 * name "My First Question" would become "9: My First Q".
 */
export function toShortForm(question: Question): string {
    const clones = question.name.slice(0, 10);
    return question.id + ": " + clones;
}

/**
 * Consumes a question and returns a formatted string representation as follows:
 *  - The first line should be a hash sign, a space, and then the `name`
 *  - The second line should be the `body`
 *  - If the question is a `multiple_choice_question`, then the following lines
 *      need to show each option on its line, preceded by a dash and space.
 *
 * The example below might help, but don't include the border!
 * ----------Example-------------
 * |# Name                      |
 * |The body goes here!         |
 * |- Option 1                  |
 * |- Option 2                  |
 * |- Option 3                  |
 * ------------------------------
 * Check the unit tests for more examples of what this looks like!
 */
export function toMarkdown(question: Question): string {
    const line1 = "# " + question.name;
    const line2 = question.body;
    const clones = question.options;
    let multi: string[] = [];
    let together = "";
    if (question.type == "multiple_choice_question") {
        multi = clones.map((clone: string): string => "- " + clone);
        together = multi.join("\n");
        return line1 + "\n" + line2 + "\n" + together;
    } else {
        return line1 + "\n" + line2;
    }
}

/**
 * Return a new version of the given question, except the name should now be
 * `newName`.
 */
export function renameQuestion(question: Question, newName: string): Question {
    const newQuestion = { ...question };
    newQuestion.name = newName;
    return newQuestion;
}

/**
 * Return a new version of the given question, except the `published` field
 * should be inverted. If the question was not published, now it should be
 * published; if it was published, now it should be not published.
 */
export function publishQuestion(question: Question): Question {
    const newQuestion = { ...question };
    if (newQuestion.published == false) {
        newQuestion.published = true;
        return newQuestion;
    } else {
        newQuestion.published = false;
        return newQuestion;
    }
}

/**
 * Create a new question based on the old question, copying over its `body`, `type`,
 * `options`, `expected`, and `points` without changes. The `name` should be copied
 * over as "Copy of ORIGINAL NAME" (e.g., so "Question 1" would become "Copy of Question 1").
 * The `published` field should be reset to false.
 */
export function duplicateQuestion(id: number, oldQuestion: Question): Question {
    const newQuestion = { ...oldQuestion };
    const { name } = newQuestion;
    newQuestion.name = "Copy of " + name;
    newQuestion.published = false;
    newQuestion.id = id;
    return newQuestion;
}

/**
 * Return a new version of the given question, with the `newOption` added to
 * the list of existing `options`. Remember that the new Question MUST have
 * its own separate copy of the `options` list, rather than the same reference
 * to the original question's list!
 * Check out the subsection about "Nested Fields" for more information.
 */
export function addOption(question: Question, newOption: string): Question {
    const newQuestion = {
        ...question,
        options: [...question.options, newOption]
    };
    return newQuestion;
}

/**
 * Consumes an id, name, and two questions, and produces a new question.
 * The new question will use the `body`, `type`, `options`, and `expected` of the
 * `contentQuestion`. The second question will provide the `points`.
 * The `published` status should be set to false.
 * Notice that the second Question is provided as just an object with a `points`
 * field; but the function call would be the same as if it were a `Question` type!
 */
export function mergeQuestion(
    id: number,
    name: string,
    contentQuestion: Question,
    { points }: { points: number }
): Question {
    const newQuestion = { ...contentQuestion };
    const point = points;
    newQuestion.published = false;
    newQuestion.points = point;
    newQuestion.id = id;
    newQuestion.name = name;
    return newQuestion;
}
