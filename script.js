function learnMore() {
  document.getElementById("register").scrollIntoView({
    behavior: "smooth"
  });
}

const accordions = document.querySelectorAll(".accordion");

accordions.forEach(acc => {
  acc.addEventListener("click", function () {

    const panel = this.nextElementSibling;
    const isOpen = panel.classList.contains("open");

    // Close all panels first
    document.querySelectorAll(".panel").forEach(p => {
      p.classList.remove("open");
      p.style.maxHeight = null;
      p.style.opacity = 0;
    });

    document.querySelectorAll(".accordion").forEach(a => {
      a.classList.remove("active");
      a.innerHTML = a.innerHTML.replace("−", "+");
    });

    // Open clicked one if it wasn't open
    if (!isOpen) {
      panel.classList.add("open");
      this.classList.add("active");
      this.innerHTML = this.innerHTML.replace("+", "−");

      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.opacity = 1;
    }

  });
});