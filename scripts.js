const COMMUNITY_LINKS = {
  discord: "https://discord.gg/EDITAR",
  github: "https://github.com/jpachec0/k0sec",
  social: "#editar-rede-social",
  communityPolicy: "#politica-de-comunidade",
  codeOfConduct: "#codigo-de-conduta",
  contact: "mailto:contato@k0sec.org"
};

document.documentElement.classList.add("has-js");

const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const linkedElements = document.querySelectorAll("[data-link]");
const revealElements = document.querySelectorAll(".reveal");

linkedElements.forEach((element) => {
  const linkKey = element.dataset.link;
  const linkTarget = COMMUNITY_LINKS[linkKey];

  if (linkTarget) {
    element.setAttribute("href", linkTarget);
  }
});

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";

  navToggle.setAttribute("aria-expanded", String(!isOpen));
  navMenu.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("menu-open", !isOpen);
});

navMenu.addEventListener("click", (event) => {
  if (!(event.target instanceof HTMLAnchorElement)) {
    return;
  }

  navToggle.setAttribute("aria-expanded", "false");
  navMenu.classList.remove("is-open");
  document.body.classList.remove("menu-open");
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.14
  }
);

revealElements.forEach((element) => revealObserver.observe(element));
