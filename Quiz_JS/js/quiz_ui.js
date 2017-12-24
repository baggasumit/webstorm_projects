Quiz.prototype.renderHTML = function () {
    console.log("Rendering...");
    var questionElement = document.getElementById("question");
    var choice0Element = document.getElementById("choice0");
    var choice1Element = document.getElementById("choice1");
    var progressElement = document.getElementById("progress");

    if (this.hasEnded()) {
        var quizOverHTML = "";
        quizOverHTML += "<h2 class=''>You answered " + this.rightAnswers + " questions correctly out of " +
            this.questions.length + "!</h2>";
        document.getElementById("quiz").innerHTML = quizOverHTML;
        progressElement.style.display = "none";
    } else {
        var question = this.getCurrentQuestion();
        questionElement.innerHTML = question.question;
        choice0Element.innerHTML = question.choice0;
        choice1Element.innerHTML = question.choice1;
        progressElement.innerHTML = "<span>" + (this.currentQuestionIndex + 1) + "/</span>" + this.questions.length;
    }
};