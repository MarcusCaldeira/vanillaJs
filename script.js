
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

var age = 20;

if(age < 20 ){
    console.log('teenager');
} else if (age >= 20 && age < 30) {
    console.log('john is a young man')
} else {
    console.log('is an adult');
}

var job = 'teacher';

switch (job){
    case 'teacher':
    console.log('john teaches kids');
        break;
    case 'driver':
        console.log('john drives a cab in Lisbon');
        break;
    case 'cop':
        console.log('john helps fight crime');
        break;
    default:
        console.log('john does something else');
}