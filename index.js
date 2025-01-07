function toggleCard(card) {
    const role = card.querySelector(".role");
    const socialIcons = card.querySelector(".social-icons");
  
    if (role.classList.contains("hidden")) {
      role.classList.remove("hidden");
      socialIcons.classList.remove("hidden");
    } else {
      role.classList.add("hidden");
      socialIcons.classList.add("hidden");
    }
  }
  
  function scrollLeft() {
    const carousel = document.querySelector(".carousel");
    carousel.scrollBy({ right: -400, behavior: "smooth" });
  }
  
  function scrollRight() {
    const carousel = document.querySelector(".carousel");
    carousel.scrollBy({ left: 250, behavior: "smooth" });
  }
  