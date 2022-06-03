
// My Skills

$(".bar").each(function(){
  $(this).find(".bar-inner").animate({
    width: $(this).attr("data-width")
  },2000)
});

// Animate Text

var animate1 = {};
animate1.opacityIn = [0,1];
animate1.scaleIn = [0.2, 1];
animate1.scaleOut = 8;
animate1.durationIn = 900;
animate1.durationOut = 700;
animate1.delay = 600;

anime.timeline({loop: true})
  .add({
    targets: '.animate1 .letters-1',
    opacity: animate1.opacityIn,
    scale: animate1.scaleIn,
    duration: animate1.durationIn
  }).add({
    targets: '.animate1 .letters-1',
    opacity: 0,
    scale: animate1.scaleOut,
    duration: animate1.durationOut,
    easing: "easeInExpo",
    delay: animate1.delay
  }).add({
    targets: '.animate1 .letters-2',
    opacity: animate1.opacityIn,
    scale: animate1.scaleIn,
    duration: animate1.durationIn
  }).add({
    targets: '.animate1 .letters-2',
    opacity: 0,
    scale: animate1.scaleOut,
    duration: animate1.durationOut,
    easing: "easeInExpo",
    delay: animate1.delay
  }).add({
    targets: '.animate1 .letters-3',
    opacity: animate1.opacityIn,
    scale: animate1.scaleIn,
    duration: animate1.durationIn
  }).add({
    targets: '.animate1 .letters-3',
    opacity: 0,
    scale: animate1.scaleOut,
    duration: animate1.durationOut,
    easing: "easeInExpo",
    delay: animate1.delay
  }).add({
    targets: '.animate1 .letters-4',
    opacity: animate1.opacityIn,
    scale: animate1.scaleIn,
    duration: animate1.durationIn
  }).add({
    targets: '.animate1 .letters-4',
    opacity: 0,
    scale: animate1.scaleOut,
    duration: animate1.durationOut,
    easing: "easeInExpo",
    delay: animate1.delay
  }).add({
    targets: '.animate1',
    opacity: 0,
    duration: 500,
    delay: 500
  });


// Contact //
document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});
