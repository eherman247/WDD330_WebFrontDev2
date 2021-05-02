const links = [{
    label: "Week 1 notes",
    url: "../week1/index.html"
},
{
    label: "Week 2 notes",
    url: "../week2/index.html"
},
{
    label: "Week 2 group",
    url: "../week2_group/index.html"
},
{
    label: "Week 3 notes",
    url: "../week3/index.html"
}
];

// get pointer to <ul> element
let ul = document.querySelector("ul");

links.forEach(
link => {
    ul.innerHTML += 
    `
        <li>
            <a href="${link.url}">${link.label}</a>
        </li>
    `;
}
);







function save1() {
    // console.log('save1');
    let name = document.querySelector('#name');
    console.log(name.value);

    //Another way to do this.
    // const name = document.querySelector('#name').value;
    // console.log(name);

    document.getElementById("result").innerHTML = name.value;
    // console.log(result.value);
    
}

function number(){

    let value = document.querySelector("#value").value;
    console.log(value);

    let sum = 1;
    for(i = 0; i <= value; i++){
        console.log(i);
        sum += i;
        // sum.value += i.value;
        console.log(sum);
    };
    console.log(sum);
    document.getElementById("result2").innerHTML = sum;
}
// const save2 = function() {
//     console.group('save2');
// }

// const save3 = (x) => {
//     console.log('save3');
// }

function adding(){

    let num1 = document.querySelector("#num1").value;
    let num2 = document.querySelector("#num2").value;

    let results = Number(num1) + Number(num2);
    document.getElementById("results").innerHTML = results;
    
}

document.querySelector('button').addEventListener('click', save1);

