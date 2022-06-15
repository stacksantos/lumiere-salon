<<<<<<< HEAD
/* -------------------------------------------------------------------------- */
/*                                                                            */
/* -------------------------------------------------------------------------- */

// for mobile menu

=======
>>>>>>> d05a863d188b95dc1d1a3437e0d3470c777dc9c3
const button = document.querySelector("#dropButton");
const menu = document.querySelector(".menu");

button.addEventListener("mousedown", () => {
  if (window.getComputedStyle(menu).display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
    window.addEventListener("scroll", () => {
      menu.style.display = "none";
    });
  }
});
<<<<<<< HEAD

// change active class on full size menu

const navItems = document.querySelectorAll(".navItem");
const active = document.querySelector(".active");

navItems.forEach((navItem) =>
  navItem.addEventListener("mousedown", (e) => {
    e.preventDefault();
    document.querySelector(".navItem.active").classList.remove("active");
    navItem.classList.add("active");
  })
);

/* -------------------------------------------------------------------------- */
/*                          SECTION SCROLL INTO VIEW                          */
/* -------------------------------------------------------------------------- */
const scrollSections = document.querySelectorAll(".scroll")
const scrollSection = document.querySelector(".scroll");
const scrollOffset = 100;

scrollSections.forEach((section) => {
  section.style.opacity = 0;
});

const sectionInView = (section, dividend = 1) => {
  const sectionTop = section.getBoundingClientRect().top;

  return (
    sectionTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
    );
};

const sectionOutofView = (section) => {
  const sectionTop = section.getBoundingClientRect().top;

  return (
    sectionTop > (window.innerHeight ||
      document.documentElement.clientHeight)
  );
};

const displayScrolledSection = (section) => {
  section.classList.add("intoView");
};
const hideScrolledSection = (section) => {
  section.classList.remove("intoView");
};

const handleScrollAnimation = () => {
  scrollSections.forEach((section) => {
    if (sectionInView(scrollSection, scrollOffset)) {
      displayScrolledSection(scrollSection);
    } else if (sectionOutofView(section)) {
      hideScrolledSection(section)
    }
  })
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});



/* -------------------------------------------------------------------------- */
/*                                     END                                    */
/* -------------------------------------------------------------------------- */
=======
>>>>>>> d05a863d188b95dc1d1a3437e0d3470c777dc9c3
