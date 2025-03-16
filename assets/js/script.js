const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // Allows users to click on pagination bullets
      dynamicBullets: true, // Optional: makes bullets dynamic
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
      effect: "cube",
      grabCursor: true,
      cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
      },
      autoplay: {
        delay: 5000, // 5 seconds
        disableOnInteraction: false, // Keeps autoplay running after user interaction
    },

  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

  /* Services swiper2*/
  const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    breakpoints: {
      0: {
          slidesPerView: 1, // For very small screens
      },
      500: {
          slidesPerView: 2, // For small screens
      },
      1024: {
          slidesPerView: 3, // For larger screens
      }
  },
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },
    autoplay: {
      delay: 3000, // 3 seconds
      disableOnInteraction: false, // Keeps autoplay running after user interaction
      loop:true,
  },
  });