var geographyQuiz = new Quiz();

var question1 = new Question("What is the capital of Norway?", "Oslo", "Helsinki", 0);
var question2 = new Question("What is the capital of Sweden?", "Stockholm", "Brussels", 1);
var question3 = new Question("What is the capital of Finland?", "Copenhagen", "Helsinki", 1);
var question4 = new Question("What is the capital of Finland?", "Copenhagen", "Helsinki", 1);


geographyQuiz.add(question1);
geographyQuiz.add(question2);
geographyQuiz.add(question3);

geographyQuiz.renderHTML();

var button0 = document.getElementById("guess0");
var button1 = document.getElementById("guess1");

button0.onclick = function () {
    geographyQuiz.guessedCorrectly(0);
    geographyQuiz.next();
};

button1.onclick = function () {
    geographyQuiz.guessedCorrectly(1);
    geographyQuiz.next();
};