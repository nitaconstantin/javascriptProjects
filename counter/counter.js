// set initial count
let count = 0;
var decrease = document.querySelector('.decrease')
var reset = document.querySelector('.reset')
var increase = document.querySelector('.increase')
const value = document.querySelector('#span')
const btns = document.querySelectorAll('.btn')
//console.log(btns)

btns.forEach(function(btn){
    //console.log(item)
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList
        if(styles.contains('decrease')){
            count--
        }else if(styles.contains('increase')){
            count++
        }else if(styles.contains('reset')){
            count = 0;
        }
        if(count > 0){
            value.style.color = '#00ff00'
        }else if(count < 0){
            value.style.color = "#ff0000"
        }else{
            value.style.color = '#000000'
        }
        value.textContent = count;
    })
})

