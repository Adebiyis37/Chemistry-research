const questions = [
    {
        question: "What is the IUPAC name of CH₃-CH₂-CH₂-CH₃? - (WAEC 2023)",
        answers: [
            {text: "Butane", correct: true},
            {text: "Butene", correct: false},
            {text: "Propane", correct: false},
            {text: "Ethane", correct: false},
        ]
    },
    {
        question: "The IUPAC name of CH₂=CH₂ is: ____.  - NECO 2022",
        answers: [
            {text: "Ethane", correct: false},
            {text: "Ethene", correct: true},
            {text: "Ethane", correct: false},
            {text: "Propene", correct: false},
        ]
    },
    {
        question: "What is the name of CH₃-C≡CH? - UTME 2021",
        answers: [
            {text: "Propene", correct: false},
            {text: "Propyne", correct: true},
            {text: "Butyne", correct: false},
            {text: "Ethyne", correct: false},
        ]
    },

    {
        question: "The IUPAC name of CH₃-CH₂-CHO is _____. - WAEC 2022",
        answers: [
            {text: "Ethanal", correct: false},
            {text: "Propanal", correct: true},
            {text: "Butanal", correct: false},
            {text: "Methanal", correct: false},
        ]
    },

    {
        question: "What is the correct name for CH₃-CH₂-COOH? - NECO 2021",
        answers: [
            {text: "Ethanoic acid", correct: false},
            {text: "Propanoic acid", correct: true},
            {text: "Butanoic acid", correct: false},
            {text: "Methanoic acid", correct: false},
        ]
    },
    {
        question: "The IUPAC name of CH₃-CO-CH₃ is __. -(UTME 2020) ",
        answers: [
            {text: "Propanone", correct: true},
            {text: "Butanone", correct: false},
            {text: "Ethanal", correct: false},
            {text: "Methanal", correct: false},
        ]
    },
    {
        question: "What is the name of CH₃-CH₂-OH? - (WAEC 2021)",
        answers: [
            {text: "Methanol", correct: false},
            {text: "Ethanol", correct: true},
            {text: "Propanol", correct: false},
            {text: "Butanol", correct: false},
        ]
    },
    {
        question: "The IUPAC name of CH₃-CH₂-CH₂-Cl is ____. (NECO 2020)",
        answers: [
            {text: "Chloromethane", correct: false},
            {text: "Chloroethane", correct: false},
            {text: "1-Chloropropane", correct: true},
            {text: "2-Chloropropane", correct: false},
        ]
    },
    {
        question: "What is the correct name for CH₃-CH(Br)-CH₃? - (UTME 2022)",
        answers: [
            {text: "1-Bromopropane", correct: false},
            {text: "2-Bromopropane", correct: true},
            {text: "Bromoethane", correct: false},
            {text: "3-Bromopropane", correct: false},
        ]
    },
    {
        question: "The IUPAC name of CH₃-CH=CH-CH₃ is ______. - (WAEC 2020)",
        answers: [
            {text: "But-1-ene", correct: false},
            {text: "But-2-ene", correct: true},
            {text: "Propene", correct: false},
            {text: "Pentene", correct: false},
        ]
    },
    {
        question: "What is the name of C₆H₅-CH₃? - (NECO 2023)",
        answers: [
            {text: "Phenol", correct: false},
            {text: "Toluene", correct: true},
            {text: "Benzene", correct: false},
            {text: " Aniline", correct: false},
        ]
    },
    {
        question: "The IUPAC name of CH₃-CH₂-NH₂ is ___. -(UTME 2023)",
        answers: [
            {text: "Methanamine", correct: false},
            {text: "Ethanamine", correct: true},
            {text: "Propanamine", correct: false},
            {text: "Butanamine", correct: false},
        ]
    },
    {
        question: "What is the correct name for CH₃-O-CH₃?- (WAEC 2019)",
        answers: [
            {text: "Methoxymethane", correct: true},
            {text: "Ethoxyethane", correct: false},
            {text: "Methanol", correct: false},
            {text: "Dimethyl ketone", correct: false},
        ]
    },
    {
        question: "The IUPAC name of CH₃-CH₂-COO-CH₃ is ____. - (NECO 2019)",
        answers: [
            {text: "Ethyl butanoate", correct: false},
            {text: "Methyl propanoate", correct: true},
            {text: "Ethyl methanoate", correct: false},
            {text: "Methyl ethanoate", correct: false},
        ]
    },
    {
        question: "What is the name of CH₃-CH₂-CH₂-CH₂-OH? - (UTME 2019)",
        answers: [
            {text: "Propanol", correct: false},
            {text: "Butanol", correct: true},
            {text: "Pentanol", correct: false},
            {text: "Ethanol", correct: false},
        ]
    },
    
    {
        question: "The IUPAC name of CH₃-CH=CH-CHO is ___. -(WAEC 2018)",
        answers: [
            {text: "But-2-enal", correct: true},
            {text: "Propenal", correct: false},
            {text: "But-3-anal", correct: false},
            {text: "Pent-2-enal", correct: false},
        ]
    },
    {
        question: "What is the correct name for C₆H₅-COOH? - (NECO 2018)",
        answers: [
            {text: "Benzoic acid", correct: true},
            {text: "Phenol", correct: false},
            {text: "Benzaldehyde", correct: false},
            {text: "Toluene", correct: false},
        ]
    },
    {
        question: "The IUPAC name of (CH₃)₂CH-CH₂-CH₃ is __. - (UTME 2018)",
        answers: [
            {text: "2-Methylbutane", correct: true},
            {text: "3-Methylbutane", correct: false},
            {text: "Pentane", correct: false},
            {text: "Isopentane", correct: false},
        ]
    },
    {
        question: "What is the name of CH₃-CH₂-CH₂-CH₂-CHO? - (WAEC 2017)",
          answers: [
            {text: "Pentanal", correct: true},
            {text: "Butanal", correct: false},
            {text: "Hexanal", correct: false},
            {text: "Propanal",correct: false},
        ]
    },
    {
        question: "The IUPAC name of CH₃-CH₂-CH₂-CO-CH₃ is ___. - (NECO 2017)",
          answers: [
            {text: "Butanone", correct: true},
            {text: "Pentanone",correct: false},
            {text: "Propanone", correct: false},
            {text: "Hexanone", correct: false},
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
