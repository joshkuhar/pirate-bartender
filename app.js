'use strict';
//Global variable to keep track of questions
var questionNumber = 0;

$('.answer').on('click', 'span', function(){
	
	if ( $( this ).attr('id') === 'yes') {
		tryIt(questionNumber);
	} else {
		console.log("no");
	}

	questionNumber++;
	console.log( $( this ).attr('id') );
	console.log(questionNumber);
})

//Drink - this is the drink object
var Drink = function(){
  this.drinkIngredients = [];
};

//add() - this function adds an ingredient to the drink
Drink.prototype.add = function(ingredient) {
  this.drinkIngredients.push(ingredient);
};

//Pantry - this is the list of drink ingredients
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
  	"Are ye curious enough to try one of me drinks?",
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

function tryIt(q){
  pantry.add(pantry.getIngredient(q));
}

console.log(question.askQuestion(questionNumber));

console.log(pantry.getIngredient(questionNumber));


