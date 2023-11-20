import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    questions: [
        { id: 1, question: "What is 12 - 5 ?", options: [3, 5, 7, 9], correctAnswer: 7, selectedOption: null },
        { id: 2, question: "If a train travels at 60 km/h for 3 hours, how far does it go?", options: [120, 180, 240, 300], correctAnswer: 180, selectedOption: null },
        { id: 3, question: "Simplify: (8 * 2) + (5 - 3)", options: [15, 16, 17, 18], correctAnswer: 17, selectedOption: null },
        { id: 4, question: "What is the area of a rectangle with length 8 cm and width 5 cm?", options: [30, 35, 40, 45], correctAnswer: 40, selectedOption: null },
        { id: 5, question: "If x = 3, what is the value of 2x + 4?", options: [8, 10, 12, 14], correctAnswer: 10, selectedOption: null },
        { id: 6, question: "What is the square root of 49?", options: [5, 6, 7, 8], correctAnswer: 7, selectedOption: null },
        { id: 7, question: "If a bag contains 3 red marbles, 2 blue marbles, and 5 green marbles, what is the probability of drawing a blue marble?", options: ["1/2", "1/5", "2/5", "3/10"], correctAnswer: "1/5", selectedOption: null },
        { id: 8, question: "A pizza is divided into 8 equal slices. If 3 slices are eaten, what fraction of the pizza remains?", options: ["1/4", "3/8", "1/2", "5/8"], correctAnswer: "5/8", selectedOption: null },
        { id: 9, question: "The perimeter of a square is 20 cm. What is the length of one side?", options: [4, 5, 6, 7], correctAnswer: 5, selectedOption: null },
        { id: 10, question: "If 2x + 3 = 11, what is the value of x?", options: [2, 4, 5, 6], correctAnswer: 4, selectedOption: null },
        { id: 11, question: "The product of 7 and a number is 56. What is the number?", options: [4, 6, 8, 10], correctAnswer: 8, selectedOption: null },
        { id: 12, question: "If a car travels at 40 km/h for 2.5 hours, how far does it go?", options: [80, 100, 120, 150], correctAnswer: 100, selectedOption: null },
        { id: 13, question: "If y = 6, what is the value of 4y - 2?", options: [22, 24, 26, 28], correctAnswer: 22, selectedOption: null },
        { id: 14, question: "If a shirt costs 💵 25 and is on sale for 20% off, what is the sale price?", options: [15, 18, 20, 22], correctAnswer: 20, selectedOption: null },
        { id: 15, question: "The average of five numbers is 18. If four of the numbers are 10, 15, 20, and 25, what is the fifth number?", options: [10, 15, 20, 25], correctAnswer: 20, selectedOption: null },
    ],
    result: 0,
    currentQuestion: 0,
    count: 15
}

const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        checkAnswer: (state, action) => {
            const { option, question_id } = action.payload;
            let question = state.questions.find(ele => ele.id === question_id);
            if (question) {
                question.selectedOption = option;
            }
        },
        submitAnswer: (state, action) => {
            state.result = 0;
            state.questions.forEach((ele) => {
                if (ele.correctAnswer === ele.selectedOption)
                    state.result++
            })
            console.log(state.result)
        },
        retakeQuiz: (state, action) => {
            Object.assign(state, initialState);
        }
    }
})


export const { checkAnswer, submitAnswer, retakeQuiz } = quizSlice.actions;

export default quizSlice.reducer;