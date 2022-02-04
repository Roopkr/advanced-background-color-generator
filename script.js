let body = document.querySelector('body');
let input1 = document.querySelector('.color1');
let input2 = document.querySelector('.color2');
let select = document.querySelector('#direction');
let css = document.querySelector('h3');
let changeGradient = function() {
    body.style.background = "linear-gradient(" + select.value + "," + input1.value + "," + input2.value + ")";
    css.textContent = body.style.background;
}

input1.addEventListener('input', changeGradient);
input2.addEventListener('input', changeGradient);
select.addEventListener('input', changeGradient);