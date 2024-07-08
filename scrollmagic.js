document.addEventListener('DOMContentLoaded', () => {
    // Initialize ScrollMagic controller
    var controller = new ScrollMagic.Controller();
  
    // Create animations for each word
    var tween1 = gsap.timeline()
      .fromTo("#word1", {opacity: 0}, {opacity: 1, duration: 1})
      .to("#word1", {opacity: 0, duration: 1}, "+=1");
  
    var tween2 = gsap.timeline()
      .fromTo("#word2", {opacity: 0}, {opacity: 1, duration: 2})
      .to("#word2", {opacity: 0, duration: 2}, "+=1");
  
    var tween3 = gsap.timeline()
      .fromTo("#word3", {opacity: 0}, {opacity: 1, duration: 3})
      .to("#word3", {opacity: 0, duration: 3}, "+=1");
  
    // Create ScrollMagic scenes
    new ScrollMagic.Scene({
      triggerElement: "#about",
      triggerHook: 0.1,
      duration: "100%"
    })
    .setPin("#about")
    .setTween(tween1)
    .addTo(controller);
  
    new ScrollMagic.Scene({
      triggerElement: "#about",
      triggerHook: 0.1,
      offset: window.innerHeight,
      duration: "100%"
    })
    .setTween(tween2)
    .addTo(controller);
  
    new ScrollMagic.Scene({
      triggerElement: "#about",
      triggerHook: 0.1,
      offset: window.innerHeight * 2,
      duration: "100%"
    })
    .setTween(tween3)
    .addTo(controller);
  
    // Unpin the about section after the animations
    new ScrollMagic.Scene({
      triggerElement: "#about",
      triggerHook: 0.1,
      offset: window.innerHeight * 3,
      duration: "100%"
    })
    .on("end", function() {
      controller.destroy(true);
      document.getElementById("about").style.position = "relative";
    })
    .addTo(controller);
});