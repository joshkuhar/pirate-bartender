'use strict';
var Drink = function(){
  this.ingredients = [];
};

Drink.prototype.add = function(ingredient) {
  this.ingredients.push(ingredient);
};

var Pantry = function(){
  Drink.call(this);
  this.ingredients = [
  ["Glug of rum", "slug of whisky", "splash of gin"],
  ["Olive on a stick", "salt-dusted rim", "rasher of bacon"],
  ["Shake of bitters", "splash of tonic", "twist of lemon peel"],
  ["Sugar cube", "spoonful of honey", "splash of cola"],
  ["Slice of orange", "dash of cassis", "cherry on top"]
    ];
};

Pantry.prototype = Object.create(Drink.prototype);
Pantry.prototype.constructor = Pantry;

Pantry.prototype.getIngredient = function(number){
  return this.ingredients[number][0];
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
console.log(question.askQuestion(1));


var a = ["a", "b", "c", "d"];

var Drink = function(){
  this.ingredient = [];
};

Drink.prototype.add = function(ingredient) {
  this.ingredient.push(ingredient);
};



