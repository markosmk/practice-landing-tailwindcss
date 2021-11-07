/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.remove('translate-x-80');
  });
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.add('translate-x-80');
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('#nav-menu ul li a');

function linkAction() {
  const navMenus = document.getElementById('nav-menu');
  navMenus.classList.add('translate-x-80');
}

navLink.forEach((n) => {
  n.addEventListener('click', linkAction);
});

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById('header');

  if (this.scrollY >= 80) {
    header.classList.add('shadow-xl');
  } else {
    header.classList.remove('shadow-xl');
  }
}

window.addEventListener('scroll', scrollHeader);

/*=============== QUESTIONS ACCORDION ===============*/

const accordionItems = document.querySelectorAll('.questions__item');

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector('.questions__header');
  accordionHeader.addEventListener('click', () => {
    const openItem = document.querySelector('.accordion-open');
    toggleItem(item);
    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

const toggleItem = (item) => {
  const accordionContent = item.querySelector('.questions__content');

  if (item.classList.contains('accordion-open')) {
    accordionContent.removeAttribute('style');
    item.classList.remove('accordion-open');
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + 'px';
    item.classList.add('accordion-open');
  }
};

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector('#nav-menu a[href*=' + sectionId + ']')
        .classList.add('active-link');
    } else {
      document
        .querySelector('#nav-menu a[href*=' + sectionId + ']')
        .classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  if (this.scrollY >= 200) {
    scrollUp.classList.add('bottom-8');
    scrollUp.classList.remove('-bottom-12');
  } else {
    scrollUp.classList.remove('bottom-8');
    scrollUp.classList.add('-bottom-12');
  }
}

window.addEventListener('scroll', scrollUp);

/*=============== DARK LIGHT THEME ===============*/

const changeButton = document.getElementById('theme-button');
const html = document.querySelector('html');
const getStatusTheme = localStorage.getItem('theme');

if (getStatusTheme) {
  html.classList.add(getStatusTheme);
}
const toggleDarkMode = function () {
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    localStorage.removeItem('theme');
  } else {
    html.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
  //changeButton.checked ? html.classList.add('dark') : html.classList.remove('dark');
};
// toggleDarkMode();
changeButton.addEventListener('click', toggleDarkMode);
