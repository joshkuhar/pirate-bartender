'use strict';
//Global variable to keep track of questions
var questionNumber = 0;

$('.answer').on('click', 'span', function(){
	if ( $( this ).attr('id') === 'yes'  &&  questionNumber === 0 ){
		$('.question').text('').text(question.questions[questionNumber]);
		questionNumber++;
	} else if ( $( this ).attr('id') === 'no'  &&  questionNumber === 0 ){
		$('.question').text('').text("Yer nuttin but a blowfish. Arrrgh!");
	} else if ( $( this ).attr('id') === 'no'  &&  questionNumber === 1 ) {
		pantry.add("bottle of beer");
		$('.question').text('').text(question.questions[questionNumber]);
		questionNumber++;
	} else if ( $( this ).attr('id') === 'yes' && questionNumber < 5) {
		$('.question').text('').text(question.questions[questionNumber]);
		addIt(questionNumber);
		questionNumber++;
	} else if (questionNumber < 5){
		$('.question').text('').text(question.questions[questionNumber]);
		questionNumber++;
	} 
	else if ( $( this ).attr('id') === 'yes' && questionNumber === 5) {
		addIt(questionNumber);
		$('#play-again, #description, #recipe, #ingredients').css('display', 'block');
		$('.question, .answer').hide();
		bartender.makeDrink(pantry.drinkIngredients);
		$('#recipe').append(bartender.drinkDescription(bartender.description));
		$('#description').append(bartender.drinkName(bartender.nameAdjective, bartender.nameNoun));
	}
	else {
		$('#play-again, #description, #recipe, #ingredients').css('display', 'block');
		$('.question, .answer').hide();
		bartender.makeDrink(pantry.drinkIngredients);
		$('#recipe').append(bartender.drinkDescription(bartender.description));
		$('#description').append(bartender.drinkName(bartender.nameAdjective, bartender.nameNoun));
	}
});

$('#play-again').on('click', function(){
	console.log("clicked play again");
	questionNumber = 0;
	$('#description, #recipe, #ingredients').text('').css('display', 'none');
	$('.question, .list').text('');
	$('#play-again').css('display', 'none');
	$('.question').append("Ye liked the sting didn't ye? Another then?");
	$('.question, .answer').show();
	bartender.emptyDrink();
});

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
  [],
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
function addIt(q){
  pantry.add(pantry.getIngredient(q));
}

var Bartender = function(){
	Drink.call(this);
	this.description = ["This drink'll put the hair back on yer chest. Hopes ye ain't be a lass!",
	"This drink'll make ye forgets about blimey everything! Can ye lend me a sawbuck?", 
	"Had this one for breakfast. Still feeling its waves, if ye catch my drift!",
	"I hope ye like it. Yer the first'll ever sipped it. Aye!",
	"Ye'll be likely to fall in love with toad after a few of these. Aye!",
	"Not so sure 'bout this one. Might be a little on the weakly side. Aye!",
	"I'll be sure to be getting better looking after this one. Arrr!",
	"This one be my mother's monkey. She grew a moustache with it. Ahoy!",
	"I did me best with what yer asking. Aye!"
	];
	this.nameAdjective = ["Slippery", "Salty", "Floatn'", "Smelly", "Blowin'", "Whistling",
	"Peg-legged", "Girly", "Bearded", "Ugly", "One-eyed"
	];
	this.nameNoun = ["Lubber", "Dolphin", "Seagull", "Lad", "Sail", "Ship", "Morning", "Gang Plank",
	"Parrot", "Cheese", "Penguin"
	];

};
Bartender.prototype = Object.create(Drink.prototype);
Bartender.prototype.constructor = Bartender;

Bartender.prototype.makeDrink = function(ingredients){
	for (var i = 0; i < ingredients.length; i++) {
  		$('#ingredients').append("<div class='list'> Arr! A " + ingredients[i] + "</div></br>");
	}
};

Bartender.prototype.emptyDrink = function(){
	pantry.drinkIngredients.length = 0;
}

Bartender.prototype.drinkDescription = function(descriptions){
	return this.description[Math.floor((Math.random() * descriptions.length))];
};

Bartender.prototype.drinkName = function(firstName, secondName){
	return this.nameAdjective[Math.floor((Math.random() * firstName.length))] + " " + this.nameNoun[Math.floor((Math.random() * secondName.length))];
};

var bartender = new Bartender();




