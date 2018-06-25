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


function arraySum(array) {
    let sum = 0;
    for (i=0; i<array.length;i++) {
        sum = sum + array[i];
    }
    return(sum);
}
console.log(sum);