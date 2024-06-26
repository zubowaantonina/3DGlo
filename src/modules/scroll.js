const scroll = () => {
  const menu = document.querySelector("menu");
  const links = menu.querySelectorAll("ul>li>a");
  const mainBtn = document.querySelector("main>a");
  const allLinks = [...links, mainBtn];

  allLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const id = link.getAttribute("href").substring(1);
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
};
export default scroll;
