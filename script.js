const quizData = [
    {
        question: "Which is the first planet in the Solar system?",
        a: "Mercury", 
        b: "Venus", 
        c: "Mars", 
        d:"Pluto", 
        correct: a,
    },
    {
        question: "Which is the second planet in the Solar system?",
        a: "Jupiter",
        b: "Venus",
        c: "Earth",
        d: "Saturn",
        correct: b,
        
    },
    {
        question: "Which is the third planet in the Solar system?",
       a: "Earth",
       b: "Jupiter",
       c: "Pluto",
       d: "Mars",
        correct: a,
    },
    {
        question: "Which is the fourth planet in the Solar system?",
        a: "Jupiter",
        b: "Saturn",
        c: "Mars",
        d: "Mercury",
        correct: c,
    },
    {
        question: "Which is the fifth planet in the Solar system?",
        a: "Jupiter",
        b: "Pluto",
        c: "Mercury",
        d: "Venus",
        correct: a,
    },
    {
        question: "Which is the sixth planet in the Solar system?",
        a: "Saturn",
        b: "Venus",
        c: "Mars",
        d: "Jupiter",
        correct: a,
    },
    {
        question: "Which is the seventh planet in the Solar system?",
        a: "Mercury",
        b: "Neptune",
        c: "Mars",
        d: "Uranus",
        correct: d,
           
    },
    {
        question: "Which is the ninth planet in the Solar system?",
        a: "Mercury",
        b: "Venus",
        c: "Pluto",
        d: "Venus",
        correct: c,
           
    },
    {
        question: "When was J.R.R Tolkien's 'The Lord of the Rings' first published?",
        a: "1954",
        b:"1932",
        c:"1941",
        d: "1964",
        correct: a,

           
    },
    {
        question: "Which of these animals doesn't live in solitude?",
        a: "Leopard",
        b:"Opossum",
        c:"Polar bear",
        d:"Gorilla",
        correct: d,
    },
]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});