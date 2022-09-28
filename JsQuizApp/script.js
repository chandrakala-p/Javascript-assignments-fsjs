const quizData = [
    {
        question: "Which built-in method calls a function for each element in the array?",
        a: "while()",
        b: "loop()",
        c: "forEach()",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "Which built-in method reverses the order of the elements of an array?",
        a: "changeOrder(order)",
        b: "reverse()",
        c: "sort(order)",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "Which of the following is a valid type of function javascript supports?",
        a: "named function",
        b: "anonymous function",
        c: "Both the above",
        d: "None of the above",
        correct: "c",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")

let currentQuiz = 0
let score = 0
let randomValue = Math.floor(Math.random() * quizData.length);


loadQuiz()

function loadQuiz() {

    questionEl.innerText = quizData[randomValue].question;
    a_text.innerText = quizData[randomValue].a
    b_text.innerText = quizData[randomValue].b
    c_text.innerText = quizData[randomValue].c
    d_text.innerText = quizData[randomValue].d

}

function deselectAnswers() {
}

function getSelected() {


}

submitBtn.addEventListener('click', (e) => {
    let correct = quizData[randomValue].correct;

    for (const radioButton of answerEls) {
        if (radioButton.checked.value === quizData[randomValue][correct]) {
            score += 1
            document.querySelector(".score").innerHTML = "hi";
            break;

        }



    }

    answerEls.forEach((e) => {
        if (e.checked.value === quizData[randomValue][correct]) {
            score += 1
            document.querySelector(".score").innerHTML = "hi";

        }


    })


    // console.log(quizData[randomValue][correct])



})

