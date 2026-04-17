// Search Box Handler with animation
function searchBoxHandler(){
  const searchForm = document.getElementById("search-form");
  if (searchForm.classList.contains('active')) {
      searchForm.style.animation = 'slideOut 0.3s ease forwards';
      setTimeout(() => {
        searchForm.style.display = "none";
        searchForm.classList.remove('active');
        searchForm.style.animation = '';
      }, 300);
    } else {
      searchForm.style.display = "flex";
      searchForm.style.animation = 'slideDown 0.4s ease forwards';
      searchForm.classList.add('active');
    }
}
document.querySelector("#search-btn").onclick = () => {
  searchBoxHandler();
}


/* login */
document.getElementById("login-btn").addEventListener("click",function(){
  const loginForm = document.querySelector(".login-form-container");
  loginForm.classList.add("active");
  loginForm.style.animation = 'fadeInScale 0.5s ease';
});

document.getElementById("close-login-btn").addEventListener("click",function(){
  const loginForm = document.querySelector(".login-form-container");
  loginForm.style.animation = 'fadeOutScale 0.3s ease forwards';
  setTimeout(() => {
    loginForm.classList.remove("active");
    loginForm.style.animation = '';
  }, 300);
});

// Close login form when clicking outside
document.addEventListener('click', function(event) {
  const loginForm = document.querySelector(".login-form-container");
  if (event.target === loginForm && loginForm.classList.contains('active')) {
    loginForm.style.animation = 'fadeOutScale 0.3s ease forwards';
    setTimeout(() => {
      loginForm.classList.remove("active");
      loginForm.style.animation = '';
    }, 300);
  }
});

// Smooth scroll behavior with animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Books carousel with better settings
var bookSwiper = new Swiper(".books-list", {
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay: 3000,
        disableOnInteraction: false,
    },
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

// Featured books carousel with pagination
var featuredSwiper = new Swiper(".featured-slider", {
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay: 3500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

// Reviews carousel
var reviewsSwiper = new Swiper(".reviews-slider", {
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay: 4000,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

// Add scroll animation for elements with staggered effect
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      entry.target.style.transitionDelay = `${index * 0.1}s`;
    }
  });
}, observerOptions);

document.querySelectorAll('.box, .arrival-box').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
  observer.observe(el);
});

// Add CSS keyframes dynamically
const style = document.createElement('style');
style.innerHTML = `
  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes slideOut {
    from { opacity: 1; transform: translateY(0); }
    to { opacity: 0; transform: translateY(-30px); }
  }
  @keyframes fadeOutScale {
    from { opacity: 1; transform: scale(1); }
    to { opacity: 0; transform: scale(0.9); }
  }
`;
document.head.appendChild(style);
