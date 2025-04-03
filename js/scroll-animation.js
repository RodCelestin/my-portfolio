const mediaQuery = window.matchMedia('(min-width: 800px)')
// Check if the media query is true
if (mediaQuery.matches) {

gsap.registerPlugin(ScrollTrigger);

// Header for home page, profile page, all projects page
gsap.to('#animateIntro', { autoAlpha: 0, y: +200,
    scrollTrigger: {
      id: 'animateIntro',
      start: 'top top+=0',
      end: '+=500',
      scrub: true,
      // markers: true
    } 
});

// Selected work
gsap.to('#animateSelected', { autoAlpha: 0, y: +50,
    scrollTrigger: {
      id: 'animateSelected',
      start: 'top top+=0',
      end: '+=200',
      scrub: true,
      // markers: true
    } 
});

// Scroll trigger indicator on mobile
gsap.to('#animateScrollIndicator', { autoAlpha: 0, y: +10,
    scrollTrigger: {
      id: 'animateScrollIndicator',
      start: 'top top+=0',
      end: '+=500',
      scrub: true,
     // markers: true
    } 
});

}