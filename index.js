const paneles = document.querySelectorAll(".panel");

paneles.forEach((panel) => {
  panel.addEventListener("click", (e) => {
    activePanel();
    panel.classList.add("active");
  });
});

const activePanel = () => {
    paneles.forEach((panel) => {
          panel.classList.remove("active");
      });
};
