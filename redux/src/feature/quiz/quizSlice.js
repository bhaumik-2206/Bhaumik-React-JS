import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    question_type: ["logical", "social", "sport"],
    total_questions: {
        "logical": [
            { id: 1, question: "What is 12 - 5 ?", options: [3, 5, 7, 9], correctAnswer: 7, selectedOption: null },
            { id: 2, question: "If a train travels at 60 km/h for 3 hours, how far does it go?", options: [120, 180, 240, 300], correctAnswer: 180, selectedOption: null },
            { id: 3, question: "Simplify: (8 * 2) + (5 - 3)", options: [15, 16, 17, 18], correctAnswer: 18, selectedOption: null },
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
        "social": [
            { id: 1, question: "What is the capital of Canada?", options: ["Toronto", "Ottawa", "Vancouver", "Montreal"], correctAnswer: "Ottawa", selectedOption: null },
            { id: 2, question: "In which year did the French Revolution begin?", options: ["1789", "1799", "1801", "1776"], correctAnswer: "1789", selectedOption: null },
            { id: 3, question: "Who wrote 'The Communist Manifesto'?", options: ["Karl Marx", "Friedrich Engels", "Vladimir Lenin", "Adam Smith"], correctAnswer: "Karl Marx", selectedOption: null },
            { id: 4, question: "What is the official language of Brazil?", options: ["Portuguese", "Spanish", "English", "French"], correctAnswer: "Portuguese", selectedOption: null },
            { id: 5, question: "Who was the first President of the United States?", options: ["Thomas Jefferson", "John Adams", "George Washington", "James Madison"], correctAnswer: "George Washington", selectedOption: null },
            { id: 6, question: "What is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"], correctAnswer: "Pacific Ocean", selectedOption: null },
            { id: 7, question: "In which country did the Industrial Revolution begin?", options: ["United Kingdom", "France", "Germany", "United States"], correctAnswer: "United Kingdom", selectedOption: null },
            { id: 8, question: "Who wrote 'The Diary of a Young Girl'?", options: ["Anne Frank", "Harper Lee", "J.K. Rowling", "Mark Twain"], correctAnswer: "Anne Frank", selectedOption: null },
            { id: 9, question: "What is the currency of Japan?", options: ["Yen", "Won", "Baht", "Ringgit"], correctAnswer: "Yen", selectedOption: null },
            { id: 10, question: "Which river is the longest in the world?", options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"], correctAnswer: "Nile River", selectedOption: null },
            { id: 11, question: "Who is known as the 'Father of Psychology'?", options: ["Sigmund Freud", "B.F. Skinner", "John B. Watson", "William James"], correctAnswer: "Sigmund Freud", selectedOption: null },
            { id: 12, question: "What is the Great Barrier Reef?", options: ["Mountain Range", "Desert", "Coral Reef", "Cave System"], correctAnswer: "Coral Reef", selectedOption: null },
            { id: 13, question: "Which planet is known as the 'Red Planet'?", options: ["Venus", "Mars", "Jupiter", "Saturn"], correctAnswer: "Mars", selectedOption: null },
            { id: 14, question: "Who is the author of 'To Kill a Mockingbird'?", options: ["Ernest Hemingway", "Harper Lee", "F. Scott Fitzgerald", "J.K. Rowling"], correctAnswer: "Harper Lee", selectedOption: null },
            { id: 15, question: "What is the largest mammal in the world?", options: ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"], correctAnswer: "Blue Whale", selectedOption: null }
        ],
        "sport": [
            { id: 1, question: "Which country won the ICC Cricket World Cup in 2019?", options: ["India", "Australia", "England", "New Zealand"], correctAnswer: "England", selectedOption: null },
            { id: 2, question: "Who holds the record for the highest individual score in Test cricket?", options: ["Sachin Tendulkar", "Virender Sehwag", "Brian Lara", "Matthew Hayden"], correctAnswer: "Brian Lara", selectedOption: null },
            { id: 3, question: "In which year did the first-ever One Day International (ODI) cricket match take place?", options: ["1968", "1971", "1975", "1980"], correctAnswer: "1971", selectedOption: null },
            { id: 4, question: "Who is known as the 'Sultan of Swing' in cricket?", options: ["Wasim Akram", "Glenn McGrath", "Curtly Ambrose", "Richard Hadlee"], correctAnswer: "Wasim Akram", selectedOption: null },
            { id: 5, question: "Which player has scored the most runs in the history of T20 International cricket?", options: ["Virat Kohli", "Rohit Sharma", "Martin Guptill", "David Malan"], correctAnswer: "Martin Guptill", selectedOption: null },
            { id: 6, question: "Who is the leading wicket-taker in Test cricket?", options: ["James Anderson", "Anil Kumble", "Shane Warne", "Muttiah Muralitharan"], correctAnswer: "Muttiah Muralitharan", selectedOption: null },
            { id: 7, question: "Which country hosted the first-ever Cricket World Cup in 1975?", options: ["England", "India", "Australia", "West Indies"], correctAnswer: "England", selectedOption: null },
            { id: 8, question: "Who was the first cricketer to score 10,000 runs in One Day Internationals (ODIs)?", options: ["Sachin Tendulkar", "Ricky Ponting", "Brian Lara", "Kumar Sangakkara"], correctAnswer: "Sachin Tendulkar", selectedOption: null },
            { id: 9, question: "Which team has won the most ICC Cricket World Cup titles?", options: ["Australia", "West Indies", "India", "Pakistan"], correctAnswer: "Australia", selectedOption: null },
            { id: 10, question: "Who was the first bowler to take a hat-trick in a Cricket World Cup match?", options: ["Chetan Sharma", "Saqlain Mushtaq", "Lasith Malinga", "Wasim Akram"], correctAnswer: "Chetan Sharma", selectedOption: null },
            { id: 11, question: "Which cricketer is known as the 'Wall' of the Indian cricket team?", options: ["Virender Sehwag", "Rahul Dravid", "Sachin Tendulkar", "Virat Kohli"], correctAnswer: "Rahul Dravid", selectedOption: null },
            { id: 12, question: "Who was the captain of the West Indies cricket team when they won their first two Cricket World Cup titles?", options: ["Clive Lloyd", "Vivian Richards", "Brian Lara", "Darren Sammy"], correctAnswer: "Clive Lloyd", selectedOption: null },
            { id: 13, question: "Which cricketer holds the record for the fastest century in T20 International cricket?", options: ["AB de Villiers", "Yuvraj Singh", "Chris Gayle", "David Miller"], correctAnswer: "David Miller", selectedOption: null },
            { id: 14, question: "Who is the only player to score a double century in ODIs more than once?", options: ["Sachin Tendulkar", "Virender Sehwag", "Rohit Sharma", "Chris Gayle"], correctAnswer: "Rohit Sharma", selectedOption: null },
            { id: 15, question: "In which year did the first edition of the Indian Premier League (IPL) take place?", options: ["2007", "2008", "2009", "2010"], correctAnswer: "2008", selectedOption: null }
        ],
    },
    questions: [],
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
        },
        setQuestions: (state, action) => {
            const { selectedNumber, type } = action.payload;
            const random_questions = state.total_questions[type].sort(() => 0.5 - Math.random());
            state.questions = random_questions.slice(0, selectedNumber);
        },
        retakeQuiz: () => {
            return initialState
        },
    }
})


export const { checkAnswer, submitAnswer, retakeQuiz, setQuestions } = quizSlice.actions;

export default quizSlice.reducer;