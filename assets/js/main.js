(function () {
    emailjs.init("rAq0VH083ceWyvjmi"); // ← replace this
  })();

  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_swxp4mc",   // ← replace
      "template_y5endqo",  // ← replace
      this
    ).then(
      function () {
        alert("Message sent successfully!");
      },
      function (error) {
        alert("Failed to send message. Try again.");
        console.error(error);
      }
    );
  });



const wrapper = document.getElementById("projectsWrapper");
const dotsContainer = document.getElementById("scrollDots");
const slides = document.querySelectorAll(".project-slide");

slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => {
    wrapper.scrollTo({
      left: i * window.innerWidth,
      behavior: "smooth"
    });
  });
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll("span");

wrapper.addEventListener("scroll", () => {
  const index = Math.round(wrapper.scrollLeft / window.innerWidth);
  dots.forEach(d => d.classList.remove("active"));
  dots[index]?.classList.add("active");
});

dots[0].classList.add("active");
