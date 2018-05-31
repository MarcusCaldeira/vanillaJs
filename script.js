
/*
var name = 'JOhn';
console.log(name);


var lastName = 'Smith';
console.log(lastName);

var age = 23 ;
console.log(age);

var fullAge = true;
console.log(fullAge);
*/

// Lecture Variables 2
//
// var name = ('John');
// var age = 26;
//
// // console.log(name + age);
//
// var job, ismarried;
// // console.log(job);
//
// job = 'teacher';
// ismarried = 'false';
// console.log(name + ' is ' + age + ' years old ' + job + ' is he married? ' +
// ismarried + ' . ');
//
// age = 'thirty-five';
// job = 'driver';
//
// job = 'driver';
// ismarried = 'false';
// console.log(name + ' is ' + age + ' years old ' + job + ' is he married? ' +
//     ismarried + ' . ');
//
// // var lastName = prompt ('what is the last name?');
// // console.log(lastName);
//
// alert(name + ' is ' + age + ' years old ' + job + ' is he married? ' +
//     ismarried + ' . ');

//Lecture Operators
//
// var now = 2016;
//
// var birthYear = now - 26;
//
// birthYear = now - 26 * 2;
// //2015 -52
// //1964
//
// console.log(birthYear);
//
// var ageOfJohn = 30;
// var ageofMark = 30;
//
// ageOfJohn =  ageofMark = (3 + 5) * 4 - 6;
// // ageOfJohn = ageOfMark= 26
// //ageofJohn = 26
// ageOfJohn++;
// ageofMark *= 2;
// ageofMark = ageofMark * 2;
// console.log(ageOfJohn + 1 , ageofMark);
// console.log(ageofMark);

// var name = 'john';
// var age = 26;
// var isMarried = 'yes';
//
// if (isMarried == 'yes'){
//     console.log(name + 'is married!' );
// } else {
//     console.log(name + 'will marry soon' );
// }
//
// isMarried = true;


//
// if(isMarried){
//     console.log('yes');
// }else{
//     console.log('no');
// }

// if(isMarried){
//     console.log('yes');
// }
//
// if(23 === "23"){
//     console.log('something to print. . .');
// }


// Lecture Boolean Logic
//
// var age = 20;
//
// if(age < 20 ){
//     console.log('teenager');
// } else if (age >= 20 && age < 30) {
//     console.log('john is a young man')
// } else {
//     console.log('is an adult');
// }
//
// var job = 'teacher';
//
// job = prompt('what does john do');
//
// switch (job){
//     case 'teacher':
//     console.log('john teaches kids');
//         break;
//     case 'driver':
//         console.log('john drives a cab in Lisbon');
//         break;
//     case 'cop':
//         console.log('john helps fight crime');
//         break;
//     default:
//         console.log('john does something else');
// }


// coding challenge 1

// var johnAge = (25);
// var johnHeight = (177);
// var friendAge = (27);
// var friendHeight = (377);
//
// var scoreJohn = johnHeight + 5 * johnAge;
// var scooreFriend = friendHeight + 5 * friendAge;

/*
if (scoreJohn > scooreFriend){
    console.log('john wins the game' + scoreJohn + 'points')
} else if(scooreFriend > scoreJohn){
    console.log('friend wins the game' + scooreFriend  + 'points');
} else if (scoreJohn == scooreFriend){
    console.log('there is a draw');
}
*/


//
// var mary = 26;
// var maryHeight = 235;
// var maryScore = maryHeight + 5 * mary;
//
// if (scoreJohn > scooreFriend && scoreJohn > maryScore){
//     console.log('john wins the game' + scoreJohn + 'points')
// }
// else if (scooreFriend > scoreJohn && scooreFriend > maryScore){
//     console.log('friend wins the game' + scooreFriend  + 'points');
// }
// else if (maryScore > scoreJohn && maryScore > scooreFriend){
//     console.log('Mary wins the game' + maryScore  + 'points');
// }
// else{
//     console.log('it\'s it a draw')
// }

//Lecture Functions

// function calculateAge(yearOfBirth){
//     var age = 2016 -yearOfBirth;
//     return age;
// }
// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1969);
// var ageMary = calculateAge(1948);
// console.log(ageJohn);
// console.log(ageMike);
// console.log(ageMary);
//
//
// function yearsUntilRetirement(name, year){
//     var age = calculateAge(year);
//     var retirement = 65 - age;
//
//     if (retirement >= 0){
//         console.log(name + ' retires in ' + retirement + ' years. ');
//     } else{
//         console.log(name + ' is already retired!')
//     }
//
//
// }
// yearsUntilRetirement('John', 1990);
// yearsUntilRetirement('Mike', 1969);
// yearsUntilRetirement('Mary', 1948);
//
//
//
// function points(ranking){
//     var userPoints = ranking + 1;
//     return userPoints;
// }
// var pointsJohn = points(170);
// var pointsMike = points(160);
// var pointsMary = points(130);
// console.log(pointsJohn);
// console.log(pointsMike);
// console.log(pointsMary);
//
// function whoIsGonnaWin(name, score) {
//     var userPoints = userPoints(points);
//     var winner = 1 + points;
//
//     if (winner >= 100){
//         console.log(userPoints);
//     } else console.log('points arent high enough');
//
// }
//
// function someFun(Param) {
//     //code
// }
//
// var someFun = function (par) {
//     //code
// }
//
//
// //statement produces and action does not produce an immediate value.
// if (x === 5){
//     //then do something
// }

// var names = ['John', 'Jane', 'Mark'];
// var years = new Array(1990, 1989, 1946);
//
// console.log(names[1]);
// //this will give us jane.
//
// names[1] = 'Ben';
// console.log(names);


//v1.0
// var john = {
//     name: 'john',
//     lastName: 'smith',
//     yearOfBirth: 1990,
//     job: 'teacher',
//     isMarried: false,
//     family:['jane', 'mark', 'bob'],
//     calculateAge: function(){
//         return 2016 - this.yearOfBirth;
//     }
// };


//
//
// console.log(john.calculateAge());
//
// var age = john.calculateAge();
// john.age = age;
//
//
//
// console.log(john.age);


// //v2.0
// var john = {
//     name: 'john',
//     lastName: 'smith',
//     yearOfBirth: 1990,
//     job: 'teacher',
//     isMarried: false,
//     family: ['jane', 'mark', 'bob'],
//     calculateAge: function () {
//         this.age = 2016 - this.yearOfBirth
//     }
// };
//
// john.calculateAge();
// console.log(john);
//
//
// var mike = {
//     yearOfBirth: 1950,
//     calculateAge: function () {
//         this.age = 2016 - this.yearOfBirth;
//     }
// };
//
// mike.calculateAge();
// console.log(mike);
//
//
//
// //my own thing
// var user = {
//     age: 15,
//     facebook: 'URL',
//     myspace: 'URL',
//     anything: 'else',
//     calculateAge: function () {
//         this.age = 2016 - this.age;
// };
//
// console.log(user);

// Lecture Loops

// for (var i  = 0 ; i < 10; i++){
//     console.log(i);
// }

//
// //for loops
// var names = ['john', 'jane', 'mary', 'mark', 'bob'];
//
// // for (var i = 0; i < names.length; i++){
// //     console.log(names[i]);
// // }
//
// // for (var i = names.length -1; i >= 0; i--){
// //     console.log(names[i]);
// // }
//
// // while loops
// var i = 0;
//
// while ( i < names.length){
//     console.log(names[i]);
//     i++;
//
// }
//
// for (var i = 1; i <= 5; i++ ){
//     console.log(i);
//
//     if (i == 3){
//         break;
//     }
// }
//
//
// for (var i = 1; i <= 5; i++ ){
//     if (i == 3){
//         continue;
//     }
//     console.log(i);
// }

// Coding Challenge 2

var years = [2001, 1985, 1994, 2014, 1973];

function printFullAge(years) {
    var ages = [];
    var fullAges = [];

    for (var i= 0; i < years.length; i++) {
        ages[i] = 2016 - years [i];
    }
    for (i = 0; i < ages.length; i++){
        if (ages[i] >= 18){
            console.log(' Person '  +  (i + 1) +  'is'  + ages  [i]  +
                'years old and is of full age');
            fullAges.push(true);
        } else {
            console.log(' Person ' +  (i  + 1) +  'is'  +  ages  [i]  +
                'years old and is NOT of full age');
            fullAges.push(false);
        }
    }
    return fullAges;
}