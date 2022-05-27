

const introJumbtron = document.querySelector('#intro .jumbotron');
const introContainer = document.querySelector('#intro .container');
const slider = document.querySelector('.slider');

const tl = new TimelineMax();

  tl.fromTo(slider, 1.2, {y: '-100%'}, {y: '0%', ease: Power2.easeInOut}, '-=1.2')


$(function(){
  
  var loading = new TimelineMax();
  loading
  .fromTo('.slider', 1.2, {x: '-100%'}, {x: '0%', ease: Power2.easeInOut}, )
 // .fromTo('#intro .container', 1.2, {height: "0%"}, {height: '70%', ease: Power2.easeInOut})
  //.fromTo('#intro .container', 1.2, {width: "100%"}, {width: '80%', ease: Power2.easeInOut})  
  .fromTo('h1',1,{autoAlpha: 0},{autoAlpha: 1,ease: Power1.easeInOut})
  .from('h1',1,{yPercent:-100,ease: Bounce.easeOut})
})


