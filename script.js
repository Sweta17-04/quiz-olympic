function showNextQuestion(currentQuestion, nextQuestion) {
    // Hide the current question
    document.getElementById('question' + currentQuestion).style.display = 'none';

    // Show the next question
    document.getElementById('question' + nextQuestion).style.display = 'block';
}

document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let score = 0;

    // Check answers
    if (document.querySelector('input[name="q1"]:checked') && document.querySelector('input[name="q1"]:checked').value === 'a') score++;
    if (document.querySelector('input[name="q2"]:checked') && document.querySelector('input[name="q2"]:checked').value === 'a') score++;
    if (document.querySelector('input[name="q3"]:checked') && document.querySelector('input[name="q3"]:checked').value === 'a') score++;
    if (document.querySelector('input[name="q4"]:checked') && document.querySelector('input[name="q4"]:checked').value === 'a') score++;
    if (document.querySelector('input[name="q5"]:checked') && document.querySelector('input[name="q5"]:checked').value === 'a') score++;

    // Display result
    document.getElementById('result').innerHTML = `<h3>You scored ${score} out of 5!</h3>`;
});
