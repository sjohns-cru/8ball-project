$(document).ready(function() {

var magic8ball = {};
magic8ball.listofAnswers = ["eat a taco", "you're in love", "cuddle a puppy", "it's all good", "call a friend"];
$("#answer").hide();

magic8ball.askQuestion = function(question) {
$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
$("#answer").fadeIn(4000);

var randomNumber = Math.random();
var randomNumberArray = randomNumber * this.listofAnswers.length;
var randomIndex = Math.floor(randomNumberArray);
var answer = this.listofAnswers [randomIndex];

$("#answer").text(answer);

console.log(question);
console.log(answer);
};

var onClick = function() {
    $("#answer").hide();
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
	$("#8ball").effect( "shake" );

    setTimeout(
       function() {
           //show prompt
           var question = prompt("Ask a question")
           magic8ball.askQuestion(question)
       }, 500);
};

	$("#questionButton").click(onClick);
});
