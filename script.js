const menuLinks = document.querySelectorAll(".menu a[href^='#']");

function distance(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function nativeScroll(distance) {
  window.scroll({
    top: distance,
    behavior: "smooth",
  });
}

function scrollToSection(event) {
  event.preventDefault();
  const distanceTop = distance(event.target) - 90;
  nativeScroll(distanceTop);
}

menuLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

window.sr = ScrollReveal({ reset: true });

sr.reveal(".headLine", { duration: 2000 });

sr.reveal(".headLineAbout", {
  rotate: { x: 0, y: 50, z: 0 },
  duration: 3000,
});

sr.reveal(".headLineHabilidade", {
  rotate: { x: 0, y: 50, z: 0 },
  duration: 2000,
});

sr.reveal(".headLineFormacao", {
  rotate: { x: 0, y: 20, z: 0 },
  duration: 3000,
});

sr.reveal(".headLineExperiencia", {
  rotate: { x: 0, y: 20, z: 0 },
  duration: 2000,
});
