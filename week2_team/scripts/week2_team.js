const links = [{
    label: "Week 1 notes",
    url: "../week1/index.html"
},
{
    label: "Week 2 notes",
    url: "../week2/index.html"
},
{
    label: "Week 2 team",
    url: "../week2_team/index.html"
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



function addNum(){
    event.preventDefault();
    let numbers = document.querySelector("input").value;
    document.querySelector("#numbers").textContent = numbers;
}


function addSum(){
    event.preventDefault();
    let numbers = document.querySelector("#sum").value;
    let sum = 0;
    for(x = 0; x <= numbers; x++){
        sum += x;
        console.log(sum);
    }
    document.querySelector("#total").textContent = sum;
}

function squish(){
    event.preventDefault();
    let number1 = document.querySelector("#sums").value;
    let number2 = document.querySelector("#sums2").value;
    let sum = Number(number1) + Number(number2);
    document.querySelector("#out").textContent = sum;
    
}



let button = document.querySelector('#texting');
button.addEventListener('click', addNum);

let add = document.querySelector('#plus');
add.addEventListener('click', addSum);

let sums = document.querySelector("#adding");
sums.addEventListener('click', squish);

