const sr = ScrollReveal({
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  });
  
  // header container
  sr.reveal('.header__container img', {
    duration: 1000,
  });
  
  sr.reveal('.header__container h1', {
    delay: 500,
  });
  
  sr.reveal('.header__container p', {
    delay: 1000,
  });
  
  sr.reveal('.header__btns', {
    delay: 1500,
  });


// about container

sr.reveal('.about__image img', {
    origin: "left",
});

sr.reveal('.about__content h3', {
    delay: 500,
});

sr.reveal('.about__content .section__header', {
    delay: 1000,
});

sr.reveal('.about__content .section__subheader', {
    delay: 1500,
});

sr.reveal('.about__content .about__grid', {
    delay: 2000,
});

// contact container

sr.reveal('.contact__image img', {
    origin: "left",
});



// swiper

const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
})


  


