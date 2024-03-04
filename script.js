document.getElementById('diceButton').addEventListener('click', function() {
    const answers = ["Answer 1", "Answer 2", "Answer 3", "Answer 4", "Answer 5"];
    const randomIndex = Math.floor(Math.random() * answers.length);
    document.getElementById('answerDisplay').textContent = answers[randomIndex];
});
