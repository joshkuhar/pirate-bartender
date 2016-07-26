'use strict';

var Question = function(question) {
  this.question = question;
};

var Ingredients = function(ingredients) {
  this.ingredients = ingredients;
};

var Pantry = function(pantryItem) {
  this.pantry = pantryItem;
};

var questionOne = new Question("Do ye like yer drinks strong?");
var questionTwo = new Question("Do ye like it with a salty tang?");
var questionThree = new Question("Are ye a lubber who likes it bitter?");
var questionFour = new Question("Would ye like a bit of sweetness with yer poison?");
var questionFive = new Question("Are ye one for a fruity finish?");

var questions = [
	"Do ye like yer drinks strong?", 
	"Do ye like it with a salty tang?", 
	"Are ye a lubber who likes it bitter?", 
	"Would ye like a bit of sweetness with yer poison?", 
	"Are ye one for a fruity finish?"];

	/*


var a = ["a", "b", "c", "d"];

var Drink = function(){
  this.ingredient = [];
};

Drink.prototype.add = function(ingredient) {
  this.ingredient.push(ingredient);
};




var x = new Drink();
I want to present a series of questions.
If the question is answered with a yes, then I want to add an item to drink 
from the pantry. 
Once completed, I want to display the new drink.

question with 

var Pantry = function(preference) {
	var drink = [];
	grab preference and add to drink;
}

var Strong = ["Glug of rum", "slug of whisky", "splash of gin"]
var Salty = ["Olive on a stick", "salt-dusted rim", "rasher of bacon"]
var Bitter = ["Shake of bitters", "splash of tonic", "twist of lemon peel"]
var Sweet = ["Sugar cube", "spoonful of honey", "splash of cola"]
var Fruity = ["Slice of orange", "dash of cassis", "cherry on top"]

Strong ingredients: ["Glug of rum", "slug of whisky", "splash of gin"]
Salty ingredients: ["Olive on a stick", "salt-dusted rim", "rasher of bacon"]
Bitter ingredients: ["Shake of bitters", "splash of tonic", "twist of lemon peel"]
Sweet ingredients: ["Sugar cube", "spoonful of honey", "splash of cola"]
Fruity ingredients: ["Slice of orange", "dash of cassis", "cherry on top"]

var Pantry = function(){
	this.rum = "Glug of Rum";
	this.whiskey = "slug of whiskey";
	this.gin = "splash of gin";
	this.olive = "Olive on a stick";
	this.salt = "salt-dusted rim";
	this.bacon = "rasher of backon";
	this.bitters = "Shake of bitters";
	this.tonic = "splash of tonic";
	this.lemon = "twist of lemon peel";
	this.sugar = "Sugar cube";
	this.honey = "spoonful of honey";
	this.cola = "splash of cola";
	this.orange = "slice of orange";
	this.cassis = "dash of cassis";
	this.cherry = "cherry on top";
}


	*/