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

  /************* ***********************
   * Services swiper2
   * 
   * *********************************************/
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



  // /****************
  //  * SWIPER 3 
  // *************************************** */
  const swiper3 = new Swiper(".mySwiper3", {
    grabCursor: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-20%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
     direction: 'horizontal',
  //    loop: true,
     autoplay: {
      delay: 3000, // 3 seconds
      disableOnInteraction: false, // Keeps autoplay running after user interaction
  },
  speed: 2000, // Transition speed in milliseconds (1 second)
    
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
      on: {
      slideChange: function () {
      // Check if at the last slide
      if (this.activeIndex === this.slides.length - 1) {
          this.autoplay.stop(); // Pause briefly
          setTimeout(() => {
          this.autoplay.reverseDirection = true; // Reverse direction
          this.autoplay.start(); // Resume
          }, 100); // Small delay to avoid glitch
      }
      // Check if at the first slide
      else if (this.activeIndex === 0) {
          this.autoplay.stop(); // Pause briefly
          setTimeout(() => {
          this.autoplay.reverseDirection = false; // Forward direction
          this.autoplay.start(); // Resume
          }, 100); // Small delay to avoid glitch
      }
      },
  },
  });
  