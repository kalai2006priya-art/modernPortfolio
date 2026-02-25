function initAnimations(){

  // Hero animations (for index.html)
  gsap.from(".hero h1",{
    y:60,
    opacity:0,
    duration:1
  });

  gsap.from(".hero-subtitle",{
    y:40,
    opacity:0,
    duration:1,
    delay:.2
  });

  gsap.from(".hero-description",{
    y:40,
    opacity:0,
    duration:1,
    delay:.4
  });

  gsap.from(".hero-buttons",{
    y:40,
    opacity:0,
    duration:1,
    delay:.6
  });

  gsap.from(".hero-icon",{
    scale:0,
    opacity:0,
    duration:1.2,
    delay:.8,
    ease: "back.out(1.7)"
  });

  // FIXED CARD ANIMATION
  gsap.from(".card",{
    y:30,
    duration:0.8,
    stagger:0.15
  });

}

document.addEventListener("DOMContentLoaded",initAnimations);