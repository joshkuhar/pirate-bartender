'use strict';
var Drink = function(){
  this.drinkIngredients = [];
};

Drink.prototype.add = function(ingredient) {
  this.drinkIngredients.push(ingredient);
};

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

var q = 0;
var question = new Questions();
console.log(question.askQuestion(q));

console.log(pantry.getIngredient(q));


