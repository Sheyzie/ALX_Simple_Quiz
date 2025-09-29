// DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  loadSript();
});

function loadSript() {
    document.getElementById("submit-answer").addEventListener('click', checkAnswer);
};

function checkAnswer() {
    const correctAnswer = "4";
    const quizRadioBtn = document.querySelector('[name="quiz"]').value;
    const feedback = document.getElementById('feedback');

    let userAnswer = ""
    
    if (quizRadioBtn.checked) {
        userAnswer = quizRadioBtn.value
    }

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    };
};