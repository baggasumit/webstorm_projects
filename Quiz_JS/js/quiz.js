function Quiz() {
    this.questions = [];
    this.currentQuestionIndex = 0;
    this.rightAnswers = 0;
};

Quiz.prototype.add = function (question) {
    this.questions.push(question);
};

Quiz.prototype.next = function () {
    this.currentQuestionIndex++;
    this.renderHTML();
};

Quiz.prototype.guessedCorrectly = function (userGuess) {
    if (userGuess === this.getCurrentQuestion().correctGuess) {
        this.rightAnswers++;
        console.log("You answered correctly...");
    }
};

Quiz.prototype.hasEnded = function () {
    return this.currentQuestionIndex >= this.questions.length;
}

Quiz.prototype.getCurrentQuestion = function () {
    return this.questions[this.currentQuestionIndex];
}

