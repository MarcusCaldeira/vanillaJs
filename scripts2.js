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



function myAge(dob) {
    var today = new Date();
    var birthday = new Date(dob);
    var age = today.getYear() - birthday.getYear();
    var marcus = today.getM() - birthday.getM();
    if (marcus < 0 || (marcus === 0 && today.getDate() < birthday.getDate())) {
        age = age - 1;
    }
    return age;
}
alert(getAge("09/27/1991"));