"use strict"
let ratina = document.querySelectorAll('.ratina');

window.addEventListener('mousemove',(e)=>{
    const{pageX, pageY} = e;

    const{innerWidth, innerHeight} = window;
    let left = (pageX / innerWidth) * 100; // convert pagex to %
    let top = (pageY / innerHeight) * 100; // convert pagey to %

    left = left < 0 ? 0: (left > 70)? 70:left; // set left right boundries
    top = top < 0 ? 0: (top > 70)?70:top; // set top bottom boundries

    ratina.forEach((e)=>{
        e.setAttribute('style',`left:${left}%;top:${top}%`);
    })
})