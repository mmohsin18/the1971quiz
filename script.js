
const quiz = [
    {
        question: "What was the primary reason for the 1971 Bangladesh-Pakistan war?",
        ans1text: "Economic disputes",
        ans2text: "Linguistic and cultural differences",
        ans3text: "Religious conflicts",
        ans4text: "Political power struggle",
        answer: "Linguistic and cultural differences",
    },
    {
        question: "Who led the Bangladeshi forces during the 1971 war for independence?",
        ans1text: "Bangabandhu Sheikh Mujibur Rahman",
        ans2text: "Indira Gandhi",
        ans3text: "General Yahya Khan",
        ans4text: "Zulfikar Ali Bhutto",
        answer: "Bangabandhu Sheikh Mujibur Rahman",
    },
    {
        question: "What event marked the formal declaration of the independence of Bangladesh?",
        ans1text: "The signing of the Shimla Agreement",
        ans2text: "The surrender of Pakistani forces",
        ans3text: "The passing of the Bangladesh Liberation War Resolution",
        ans4text: "The assassination of Sheikh Mujibur Rahman",
        answer: " The passing of the Bangladesh Liberation War Resolution",
    },
    {
        question: "Which neighboring country provided military support to the Bangladeshi independence movement?",
        ans1text: "China",
        ans2text: "India",
        ans3text: "Afghanistan",
        ans4text: "Iran",
        answer: "India",
    },
    {
        question: "What was the date when Pakistani forces surrendered in Dhaka, leading to the creation of Bangladesh?",
        ans1text: "March 26, 1971",
        ans2text: "December 16, 1971",
        ans3text: "October 14, 1971",
        ans4text: " January 3, 1972",
        answer: "December 16, 1971",
    },
    {
        question: "Who served as the President of Pakistan during the 1971 war?",
        ans1text: "Zulfikar Ali Bhutto",
        ans2text: "General Yahya Khan",
        ans3text: "Sheikh Mujibur Rahmann",
        ans4text: "Indira Gandhi",
        answer: "General Yahya Khan",
    },
    {
        question: "What was the name of the Pakistani military operation in East Pakistan that initiated the war?",
        ans1text: "Operation Storm",
        ans2text: "Operation Thunder",
        ans3text: "Operation Searchlight",
        ans4text: "Operation Swift",
        answer: "Operation Searchlight",
    },
    {
        question: "The 1971 war led to the emergence of Bangladesh as an independent country. What was Bangladesh's previous name when it was part of Pakistan?",
        ans1text: "West Pakistan",
        ans2text: "South Pakistan",
        ans3text: "East Bengal",
        ans4text: "East Bengal",
        answer: "East Bengal",
    },
    {
        question: "Which international organization played a significant role in mediating the conflict and negotiating the terms of surrender?",
        ans1text: "United Nations",
        ans2text: "European Nations",
        ans3text: "NATO",
        ans4text: "African Nations",
        answer: "United Nations",
    },
    {
        question: "What is the official language of Bangladesh today, following its independence from Pakistan in 1971?",
        ans1text: "Bengali",
        ans2text: "Urdu",
        ans3text: "English",
        ans4text: "French",
        answer: "Bengali",
    }
]
const question = document.getElementById("quiz-question");
console.log(question)
console.log(question.textContent)
const optiona = document.getElementById("text_optiona");
const optionb = document.getElementById("text_optionb");
const optionc = document.getElementById("text_optionc");
const optiond = document.getElementById("text_optiond");
console.log(optiona);
console.log(optionb);
console.log(optionc);
console.log(optiond);
console.log(optiona.textContent);
console.log(optionb.textContent);
console.log(optionc.textContent);
console.log(optiond.textContent);

let currentQuestion = 0;
let score = 0;

console.log(quiz[currentQuestion].question)
console.log(quiz[currentQuestion].ans1text)
console.log(quiz[currentQuestion].ans2text)
console.log(quiz[currentQuestion].ans3text)
console.log(quiz[currentQuestion].ans4text)
question.textContent = quiz[currentQuestion].question;
optiona.textContent = quiz[currentQuestion].ans1text;
optionb.textContent = quiz[currentQuestion].ans2text;
optionc.textContent = quiz[currentQuestion].ans3text;
optiond.textContent = quiz[currentQuestion].ans4text;

submit.addEventListener("click", () => {
    const checkedAns = document.querySelector('input[type="radio"]:checked')
    console.log(checkedAns);
    // console.log(checkedAns.nextElementSibling.textContent);
    if( checkedAns === null){
        alert("Please select an answer");
    }else{
        if( checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer){
            score++;
        }

        currentQuestion++;
        if( currentQuestion < quiz.length){
            question.textContent = quiz[currentQuestion].question;
            optiona.textContent = quiz[currentQuestion].ans1text;
            optionb.textContent = quiz[currentQuestion].ans2text;
            optionc.textContent = quiz[currentQuestion].ans3text;
            optiond.textContent = quiz[currentQuestion].ans4text;
            checkedAns.checked = false;
        }else{
            alert("Your score is " + score + " out of " + quiz.length);
            location.reload();
        }

    }
});