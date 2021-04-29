// //A bit of test code from class
// let fName = "Ethan";
// let lName = "Herman";
// let iNumber = "111222333";

// log(fName);

// // This function declaration is hoisted
// function log(varName) {
//     console.log(varName);
// }



// // create an object
// let student1 = {
//     firstName: "Erica",
//     lastName: "Magden",
//     iNum: "000111222"
// }

// console.log(student.firstName);

// // create a students array
// let students = [];
// students.push(student1);

// // putting the students array into local storage
// // Turns the object into a string, which is needed for local storage.
// localStorage.setItem("students", JSON.stringify(students));


// // turns the students string back into an object.
// let stud = JSON.parse(localStorage.getItem("students"));



function getName() {
    event.preventDefault();
    let name = document.querySelector('input').value;
    let outputDiv = document.querySelector('#output').textContent = name;
}

let button = document.querySelector('button');
button.addEventListener('click', getName);



