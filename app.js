'use strict';
//Global variable to keep track of questions
var questionNumber = 0;

$('.answer').on('click', 'span', function(){
	if ( $( this ).attr('id') === 'yes'  &&  questionNumber === 0 ){
		tryIt(questionNumber);
		$('.question').text('').text(question.questions[questionNumber]);
		questionNumber++;
	} else if ( $( this ).attr('id') === 'no'  &&  questionNumber === 0 ){
		$('.question').text('').text("Yer nuttin but a blowfish. Arrrgh!");
	} else if ( $( this ).attr('id') === 'yes' && questionNumber < 5) {
		$('.question').text('').text(question.questions[questionNumber]);
		tryIt(questionNumber);
		questionNumber++;
	} else if (questionNumber < 5){
		$('.question').text('').text(question.questions[questionNumber]);
		questionNumber++;
	} else {
		$('#play-again, #description, #recipe').css('display', 'block');
		$('.question, .answer').hide();
	}
})

//this is the drink object
var Drink = function(){
  this.drinkIngredients = [];
};

//this function adds an ingredient to the drink
Drink.prototype.add = function(ingredient) {
  this.drinkIngredients.push(ingredient);
};

//this is the list of drink ingredients
var Pantry = function(){
  Drink.call(this);
  this.pantryIngredients = [
  ["Strong", "glug of rum", "slug of whisky", "splash of gin"],
  ["Salty", "olive on a stick", "salt-dusted rim", "rasher of bacon"],
  ["Bitter", "shake of bitters", "splash of tonic", "twist of lemon peel"],
  ["Sweetness", "sugar cube", "spoonful of honey", "splash of cola"],
  ["Fruity", "slice of orange", "dash of cassis", "cherry on top"]
    ];
};

Pantry.prototype = Object.create(Drink.prototype);
Pantry.prototype.constructor = Pantry;

//getIngredient() - this function pulls an ingredient from the pantry
Pantry.prototype.getIngredient = function(questionNumber){
  return this.pantryIngredients[questionNumber][Math.floor((Math.random() * 3) + 1)];
};

var pantry = new Pantry();

var Questions = function(){
  this.questions = [
	"Do ye like yer drinks strong?", 
	"Do ye like it with a salty tang?", 
	"Are ye a lubber who likes it bitter?", 
	"Would ye like a bit of sweetness with yer poison?", 
	"Are ye one for a fruity finish?"];
};

Questions.prototype.askQuestion = function(questionNumber) {
  return this.questions[questionNumber];
};
var question = new Questions();

//This adds the ingredient to the drink
function tryIt(q){
  pantry.add(pantry.getIngredient(q));
}




