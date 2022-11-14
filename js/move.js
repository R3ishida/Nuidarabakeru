  console.log("オレいる？")
let intViewportWidth = window.innerWidth;
gsap.to('#photo', { 
  x: 1200,
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
  trigger: 'body',
  start: 'top top', 
  }
});

gsap.to('#photo .line', { 
  opacity: 1,
  duration: 2,
  scrollTrigger: {
  trigger: 'body',
  start: 'top top', 
  }
});


gsap.to('#photo .hide', { 
  x: intViewportWidth*0.3,
  duration: 2.5,
  scrollTrigger: {
  trigger: 'body',
  start: 'top top', 
  }
});


gsap.to('#basketball', { 
  x: -1200,
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
  trigger: '#photo',
  start: 'top top', 
  }
});

gsap.to('#basketball .line', { 
opacity: 1,
duration: 2,
scrollTrigger: {
trigger: '#photo',
start: 'top top', 
}
});


gsap.to('#basketball .hide', { 
x: -intViewportWidth*0.3,
duration: 2.5,
scrollTrigger: {
trigger: '#photo',
start: 'top top', 
}
});


gsap.to('#break', { 
  x: 1200,
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
  trigger: '#basketball',
  start: 'top top', 
  }
});

gsap.to('#break .line', { 
opacity: 1,
duration: 2,
scrollTrigger: {
trigger: '#basketball',
start: 'top top', 
}
});


gsap.to('#break .hide', { 
x: intViewportWidth*0.3,
duration: 2.5,
scrollTrigger: {
trigger: '#basketball',
start: 'top top', 
}
});

gsap.to('#music', { 
  x: -1200,
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
  trigger: '#break',
  start: 'top top', 
  }
});

gsap.to('#music .line', { 
opacity: 1,
duration: 2,
scrollTrigger: {
trigger: '#break',
start: 'top top', 
}
});


gsap.to('#music .hide', { 
x: -intViewportWidth*0.3,
duration: 2.5,
scrollTrigger: {
trigger: '#break',
start: 'top top', 
}
});


gsap.to('#architecture', { 
  x: 1200,
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
  trigger: '#music',
  start: 'top top', 
  }
});

gsap.to('#architecture .line', { 
opacity: 1,
duration: 2,
scrollTrigger: {
trigger: '#music',
start: 'top top', 
}
});


gsap.to('#architecture .hide', { 
x: intViewportWidth*0.3,
duration: 2.5,
scrollTrigger: {
trigger: '#music',
start: 'top top', 
}
});

gsap.to('#engineering', { 
  x: -1200,
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
  trigger: '#architecture',
  start: 'top top', 
  }
});

gsap.to('#engineering .line', { 
opacity: 1,
duration: 2,
scrollTrigger: {
trigger: '#architecture',
start: 'top top', 
}
});


gsap.to('#engineering .hide', { 
x: -intViewportWidth*0.3,
duration: 2.5,
scrollTrigger: {
trigger: '#architecture',
start: 'top top', 
}
});


gsap.to('#coffee', { 
  x: 1200,
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
  trigger: '#engineering',
  start: 'top top', 
  }
});

gsap.to('#coffee .line', { 
opacity: 1,
duration: 2,
scrollTrigger: {
trigger: '#engineering',
start: 'top top', 
}
});


gsap.to('#coffee .hide', { 
x: intViewportWidth*0.3,
duration: 2.5,
scrollTrigger: {
trigger: '#engineering',
start: 'top top', 
}
});

gsap.to('#beer', { 
  x: -1200,
  duration: 1,
  ease: "power4.out",
  scrollTrigger: {
  trigger: '#coffee',
  start: 'top top', 
  }
});

gsap.to('#beer .line', { 
opacity: 1,
duration: 2,
scrollTrigger: {
trigger: '#coffee',
start: 'top top', 
}
});


gsap.to('#beer .hide', { 
x: -intViewportWidth*0.3,
duration: 2.5,
scrollTrigger: {
trigger: '#coffee',
start: 'top top', 
}
});
