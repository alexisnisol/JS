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