const questions = [
    {
        question: "How many bones are there in an adult human skeleton?",
        answers: [
            {text: "206", correct: true},
            {text: "210", correct: false},
            {text: "205", correct: false},
            {text: "200", correct: false},
        ]
    },
    {
        question: "Which is the longest bone in the human body?",
        answers: [
            {text: "Humerus", correct: false},
            {text: "Femur", correct: true},
            {text: "Fibula", correct: false},
            {text: "Tarsal", correct: false},
        ]
    },
    {
        question: "Which part of the skeleton protects the brain?",
        answers: [
            {text: "Skull", correct: true},
            {text: "Spine", correct: false},
            {text: "Ribcage", correct: false},
            {text: "Pelvis", correct: false},
        ]
    },

    {
        question: "What is the main function of the ribcage?",
        answers: [
            {text: "To help in digestion", correct: false},
            {text: "To protect the heart and lungs", correct: true},
            {text: "To produce blood cells", correct: false},
            {text: "To support the body’s weight", correct: false},
        ]
    },

    {
        question: "Which bone is also known as the collarbone?",
        answers: [
            {text: "Scapula", correct: false},
            {text: "Sternum", correct: false},
            {text: "Clavicle", correct: true},
            {text: "Pelvis", correct: false},
        ]
    },
    {
        question: "What is the taste of most acids?",
        answers: [
            {text: "Sweet", correct: false},
            {text: "Sour", correct: true},
            {text: "Bitter", correct: false},
            {text: "Salty", correct: false},
        ]
    },
    {
        question: "What is the taste of most bases?",
        answers: [
            {text: "Sweet", correct: false},
            {text: "Sour", correct: false},
            {text: "Bitter", correct: true},
            {text: "Salty", correct: false},
        ]
    },
    {
        question: "Which of the following is an example of Acids?",
        answers: [
            {text: "Vinegar", correct: true},
            {text: "Baking Soda", correct: false},
            {text: "Soap", correct: false},
            {text: "Milk", correct: false},
        ]
    },
    {
        question: "Which of the following is an example of Bases?",
        answers: [
            {text: "Vinegar", correct: false},
            {text: "Baking Soda", correct: true},
            {text: "Soap", correct: false},
            {text: "Milk", correct: false},
        ]
    },
    {
        question: "What happens to blue litmus paper when it is dipped in an acid?",
        answers: [
            {text: "It turns red", correct: true},
            {text: "It turns green", correct: false},
            {text: "It turns orange", correct: false},
            {text: "It turns yellow", correct: false},
        ]
    },
    {
        question: "What are rocks made of?",
        answers: [
            {text: "Only water", correct: false},
            {text: "Sand", correct: false},
            {text: "Minerals", correct: true},
            {text: "Plants", correct: false},
        ]
    },
    {
        question: "Which type of rock is formed from cooled lava or magma?",
        answers: [
            {text: "Sedimentary rock", correct: false},
            {text: "Igneous rock", correct: true},
            {text: "Metamorphic rock", correct: false},
            {text: "Meteorites", correct: false},
        ]
    },
    {
        question: "Which type of rock is made from layers of sediment?",
        answers: [
            {text: "Sedimentary rock", correct: true},
            {text: "Igneous rock", correct: false},
            {text: "Metamorphic rock", correct: false},
            {text: "Meteorites", correct: false},
        ]
    },
    {
        question: "What is the process of breaking rocks into smaller pieces called?",
        answers: [
            {text: "Weathering", correct: true},
            {text: "Melting", correct: false},
            {text: "Erosion", correct: false},
            {text: "Crystalization", correct: false},
        ]
    },
    {
        question: "The process of stopping a moving vehicle requires ____?",
        answers: [
            {text: "force", correct: true},
            {text: "strenght", correct: false},
            {text: "power", correct: false},
            {text: "mercy", correct: false},
        ]
    },
    {
        question: "Sounds are caused by ____",
        answers: [
            {text: "tension", correct: false},
            {text: "vibrations", correct: true},
            {text: "spirits", correct: false},
            {text: "our brain", correct: false},
        ]
    },
    {
        question: "Flies buzz around in which medium?",
        answers: [
            {text: "Water", correct: false},
            {text: "Air", correct: true},
            {text: "Solids", correct: false},
            {text: "Smokes", correct: false},
        ]
    },
    {
        question: "Which of these is not a natural sound for humans?",
        answers: [
            {text: "Sneezing", correct: false},
            {text: "Squeaking", correct: true},
            {text: "Shouting", correct: false},
            {text: "Screaming", correct: false},
        ]
    },
    {
        question: "Which of these animals depends echolocation?",
        answers: [
            {text: "Eagle", correct: false},
            {text: "Owl", correct: false},
            {text: "Bat", correct: true},
            {text: "Hawk", correct: false},
        ]
    },
    {
        question: "Which of these is not a property of Sound",
        answers: [
            {text: "Pitch", correct: false},
            {text: "Amplitude", correct: false},
            {text: "Timbre", correct: false},
            {text: "Corrosive", correct: true},
        ]
    },

]
    



const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("nxt-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ".   " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
   const selectedBtn = e.target;
   const isCorrect = selectedBtn.dataset.correct ==="true";
   if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
   }
   else{
    selectedBtn.classList.add("incorrect")
   }
   Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = true;
   });
   nextButton.style.display = "block";
}
    function showScore(){
        resetState();
        questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
        nextButton.innerHTML = "Play Again";
        nextButton.style.display = "block";
    }
    function handleNextButton(){
        currentQuestionIndex++;
        if(currentQuestionIndex < questions.length){
            showQuestion();
        }
        else {
            showScore();
        }
    }
nextButton.addEventListener("click", ()=>{
    if (currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();