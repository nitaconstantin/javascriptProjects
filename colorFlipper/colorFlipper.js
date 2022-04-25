var body = document.querySelector('body');
var backgroundValue = document.querySelector('#background-value');
function randomNumber(max){
    var result = Math.round(Math.random() * max);

    return result;
}

console.log(randomNumber(255))

function randomColor(){
    var color = `rgb(${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;
    return color;
}

var btn = document.querySelector('#btn-color');
btn.addEventListener('click',function(){
    body.style.backgroundColor = randomColor();
    backgroundValue.innerText = randomColor();
})
