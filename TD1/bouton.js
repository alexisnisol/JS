let paragraphe = document.querySelector('p');

let button = document.querySelector('#action');
button.addEventListener('click', function(e){
    paragraphe.classList.remove('design');
});

let btnId = document.querySelector('#addbtn');
btnId.addEventListener('click', function(e){
    paragraphe.classList.add('design');
});

let btnToggle = document.querySelector('#togglebtn');
btnToggle.addEventListener('click', function(e){
    paragraphe.classList.toggle('design');
});

document.querySelector('#cptbtn').addEventListener('click', function(e){
    let cpt = document.querySelector('#cpt');
    cpt.innerHTML = parseInt(cpt.innerHTML) + 1;
});


// output single object
const someObject = { str: "Some text", id: 5 };
console.log(someObject);

// Output multiple object
const car = "Dodge Charger";
const anotherObject = { str: "Some text", id: 5 };
console.info("My first car was a", car, ". The object is:", anotherObject);

// iterator / substition
for (let i = 0; i < 5; i++) {
  console.log("Hello, %s. You've called me %d times.", "Bob", i + 1);
}

// Stack trace
function foo() {
  function bar() {
      console.trace();
  }
  bar();
}
foo();


// let admin;
// let nameG = "Geoffroy";
// admin = nameG;
// alert(admin);

// let name = "Ilya";
// alert( `hello ${1}` ); // 1
// alert( `hello ${"name"}` ); // name
// alert( `hello ${name}` ); // Ilya

// let accessAllowed;
// let age = prompt('How old are you?', '');

// if (age > 18) {
//   accessAllowed = true;
// } else {
//   accessAllowed = false;
// }
// alert(accessAllowed);

// let a = +prompt('a?', ''); // + permet de caster en nombre le résultat du prompt

// switch (a) {
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert('2,3');
//         break;
//     default:
//         alert('default');
// }

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert("Hello!") :
  () => alert("Greetings!");

welcome(); // ok now

