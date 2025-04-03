document.addEventListener("DOMContentLoaded", function () {
    let images = document.querySelectorAll(".lazy-image");
    
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let img = entry.target;
          let highRes = img.getAttribute("data-highres");

          let tempImg = new Image();
          tempImg.src = highRes;
          tempImg.onload = function () {
            img.src = highRes;
          };

          observer.unobserve(img); // Stop observing once loaded
        }
      });
    }, { rootMargin: "1200px" });

    images.forEach(img => observer.observe(img));
  });