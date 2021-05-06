var questions = [];
window.onload = function() {
    const newQuestion = {
        "id": 1,
        "question": "2 + 3",
        "answers": [
        {
            "answer": 3,
            "correct": false
        },
        {
            "answer": 4,
            "correct": false
        },
        {
            "answer": 5,
            "correct": true
        }]
    }
    $.post({url:"http://localhost:3000/questions", data: newQuestion})
    $.get({url: "http://localhost:3000/questions"})
    .done((response) => {
        questions = response;
    })
    .then(() => {
        createQuiz();
        populateQuiz();
    })
}

var index = 0;
function createQuiz() {
    const container = document.getElementById("quiz");
    const quizQuestion = document.createElement("h3"); //<h3></h3>
    quizQuestion.id = "question"; //<h3 id="question"></h3>

    container.appendChild(quizQuestion); //<div id="quiz"><h3 id="question"></h3></div>
    for(let i = 0; i < 3; i++) {
        const input = document.createElement("input");
        const lable = document.createElement("label");
        lable.className = "rasp";

        input.type = "radio";
        input.name = "answer";
        container.appendChild(input);
        container.appendChild(lable);
    }

    const button = document.createElement("button");
    button.innerHTML = "Check";
    button.addEventListener("click", nextQuestion)
    container.appendChild(button);
}

function populateQuiz() {
    // const question = document.getElementsByTagName("h3")[index];
    const question = document.getElementById("question");
    question.innerText = questions[index].question;

    const inputs = document.getElementsByTagName("input");
    const labels = document.getElementsByClassName("rasp");
    for(let i = 0; i < inputs.length; i++) {
        labels[i].innerHTML = questions[index].answers[i].answer;
        inputs[i].value = questions[index].answers[i].correct;
        inputs[i].checked = false;
    }
}

function nextQuestion() {
    const button = document.getElementsByTagName("button")[0];

    if(button.innerHTML === "Check") {
        const inputs = document.getElementsByTagName("input");
        const labels = document.getElementsByClassName("rasp");

        for(let i = 0; i < inputs.length; i++) {
            labels[i].style.color = "black";
            labels[i].style.fontWeight = "normal"
        }
        for(let i = 0; i < inputs.length; i++) {
            if(inputs[i].checked === true) {
                if(inputs[i].value === "true") {
                    button.innerHTML = "Next question"
                } else {
                    labels[i].style.color = "red";
                    labels[i].style.fontWeight = "bold"
                }
            }
        }
    } else {
        index++;
        populateQuiz();
    }
}

