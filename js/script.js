let text = document.querySelector('#text');
let content = document.querySelector('.content');
let bar = document.querySelector('.bar');
let progress = document.querySelector('.progress');
let v,i;

text.addEventListener('input', (e) => {
    v = e.target.value;
    i = v.length / progress.clientWidth * 169;
    bar.style.width = i+'%';
    bar.style.background = '';
    if ( v.length <= 200 ) {
        bar.style.backgroundColor = '#009F02'
    }
    
    if ( v.length >= 185 ) {
        content.classList.add('active')
        bar.style.background = 'linear-gradient(to right, rgb(254, 171, 6) 4%, rgb(0, 159, 2) 30%)'
    } 
    if ( v.length >= 240 ) {
        content.classList.add('active')
        bar.style.background = 'linear-gradient(to right, #ff0909 -3%,#FEAB06 8%,#009F02 28%)'
    } else {
        content.classList.remove('active')
     }

    if ( v.length >= 255 ) {
        e.target.value = e.target.value.substr(0,254)
    }
    content.querySelector('span').textContent = v.length
})