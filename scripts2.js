// console.log(this);

// calculateAge(1985);
//
// function calculateAge(year){
//     console.log(2016-year);
//     console.log(this);
// }
//
// var john = {
//     name: 'john',
//     yearOfBirth: 1990,
//     calculateAge: function () {
//         console.log(this);
//         console.log(2016-this.yearOfBirth);
//         function innerFunction(){
//             console.log(this);
//         }
//         innerFunction();
//     }
// }
//
// john.calculateAge();


//
// // fizzBuzz
// function fizzBuzz(number){
//     for(i=1; i<=number; i++){
//         if(i%15==0){
//             console.log('fizzBuzz')
//         }else if(i%3==0){
//             console.log('fizz')
//         }else if(i%5==0){
//             console.log('buzz')
//         }else{
//             console.log(i);
//         }
//     }
// }
//
// fizzBuzz(200);


//Array Sum
var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = 0;
//
for(var i = 0;i<numArray.length;i++){
    sum += numArray[i];
}

console.log(sum);

