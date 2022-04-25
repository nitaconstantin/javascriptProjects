var count = 0;
var decrease = document.querySelector('.decrease');
var reset = document.querySelector('.reset');
var increase = document.querySelector('.increase');
var value = document.querySelector('#value');
var btns = document.querySelectorAll('.btn');


btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }else if(styles.contains('reset')){
            count = 0;
        }else if(styles.contains('increase')){
            count++
        }

        if(count < 0){
            value.style.color = '#ff0000'
        }else if(count > 0){
            value.style.color = '#00ff00'
        }else{
            value.style.color = '#000'
        }
        value.textContent = count;
    })
})