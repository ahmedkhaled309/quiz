const questions = [
    {
        question: "who is the best one in the world ?",
        answers: [
            {text: "hossam mansour " , correct: false},
            {text: "abdo elasbany" , correct: false},
            {text: "ahmed khaled" , correct: true},
            {text: "kristiano ronaldo" , correct: false},
        ]
    },
    {
        question: "who is the man that womens love",
        answers: [
            {text: "ahmed khlaed" , correct: true},
            {text: "johny sence" , correct: false},
            {text: "abdo saytara" , correct: false},
            {text: "karim creistiano" , correct: false},
        ]
    },
    {
        question: "which of the following is most brillient",
        answers: [
            {text: "monkey" , correct: false},
            {text: "Albert Einstein" , correct: false},
            {text: "Dr. magdy yakoob" , correct: false},
            {text: "ahmed khaled" , correct: true},
        ]
    },
    {
        question: "who bulit pyramids",
        answers: [
            {text: "the Egyptains" , correct: false},
            {text: "the amiricans" , correct: false},
            {text: "ahmed khaled" , correct: true},
            {text: "mohammed salah" , correct: false},
        ]
    },
    {
        question: "who is the first person on the moon",
        answers: [
            {text: "Neil Armstrong" , correct: false},
            {text: "ahmed khaled" , correct: true},
            {text: "abo mohammed" , correct: false},
            {text: "mohammed abdo" , correct: false},
        ]
    }
];


const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const NextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    NextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct; 
        }
        button.addEventListener("click" , selectAnswer);
    });
} 

function resetState(){
    NextButton.style.display = "None"
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}
 
function selectAnswer (e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true ;
    });
    NextButton.style.display = "block";
}

function showscore(){
    resetState();
    questionElement.innerHTML = `Your Score: ${score} / ${questions.length}`;
    NextButton.innerHTML = "Again";
    NextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showscore();
    }
}


NextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();