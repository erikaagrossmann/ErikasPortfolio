document.addEventListener('DOMContentLoaded', function(){
    gsap.from('nav', 1, {right:-500, delay:0.5})
    gsap.from('h2', 1, {opacity:0, delay:0.5})
    gsap.from('.work', 1, {opacity:0, delay:0.5})
    gsap.from('p', 1, {opacity:0, delay:0.5})
    gsap.from('.imgs', 1, {opacity:0, delay:0.5})
    gsap.from('.poster', 1, {opacity:0, delay:0.5})
  })