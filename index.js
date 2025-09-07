// const searchLogo = document.getElementById("search-icon");
// const searchBox = document.getElementById("search-box");


// // Enter key press
// searchBox.addEventListener("keypress", (e) => {
//   if (e.key === "Enter") {
//     performSearch();
//     searchBox.classList.remove("active");
//     searchBox.value = ""; // clear after search
//   }
// });
// const hamburger = document.querySelector(".hamburger");
// const navbar1 = document.querySelector(".navbar1");

// hamburger.addEventListener("click", () => {
//   navbar1.classList.toggle("show");
// });
// document.addEventListener("DOMContentLoaded", () => {
//   const swiper = new Swiper('.swiper', {
//     loop: true,
//     autoplay: {
//       delay: 5000,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },

//     // Responsive settings
//     breakpoints: {
//       320: { slidesPerView: 1 },   // phones
//       768: { slidesPerView: 1 },   // tablets
//       1024: { slidesPerView: 1 },  // laptops
//       1440: { slidesPerView: 1 },  // big desktops
//     }
//   });
// });



const searchLogo=document.getElementById('search-icon');  
const searchBox=document.getElementById('search-box');
searchLogo.addEventListener('click',()=>{
    searchBox.classList.toggle('active');
    if (searchBox.classList.contains("active")) {
    searchBox.focus();
  }
  
})
searchBox.addEventListener('keydown',(enter)=>{
    if(enter.key==='Enter'){
        searchBox.classList.remove('active');
         searchBox.value = ""; 

    }
})

// Wait until DOM + Swiper script loads
document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive settings
    breakpoints: {
      320: { slidesPerView: 1 },   // phones
      768: { slidesPerView: 1 },   // tablets
      1024: { slidesPerView: 1 },  // laptops
      1440: { slidesPerView: 1 },  // big desktops
    }
  });
});


