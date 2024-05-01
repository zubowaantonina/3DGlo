const menu = () => {
  const menu = document.querySelector("menu");

  const handleMenu = () => {
    menu.classList.toggle("active-menu");
  };

  document.addEventListener("click", (e) => {
    if (e.target.closest(".close-btn")) {
      handleMenu();
    }
    if (e.target.closest(".active-menu") && e.target.hasAttribute("href")) {
      handleMenu();
    }
    if (!e.target.closest("menu") && menu.classList.contains("active-menu")) {
      handleMenu();
    } else if (e.target.closest(".menu")) {
      handleMenu();
    }
  });
};
export default menu;
