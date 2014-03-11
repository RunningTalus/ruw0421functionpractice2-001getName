//http://winter2014.refactoru.com/exercises/problem-set/function-practice2
//Function Practice #2
//1) Write a function called 'getName' which takes a single object argument and returns the value of the 'name' property of the given object.

//getName({ name: 'Luisa', age: 25 }) should return 'Luisa'

var personData = {name:'Luisa', age: 25};	
var getName = function(person){
	console.log('EXPECT name Luisa: '+ person.name);
};
getName(personData);

//calling the function getName and passing the parameters from personData