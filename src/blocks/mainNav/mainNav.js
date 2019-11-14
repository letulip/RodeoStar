const CLOSE = `mainNav__burger--close`;
const MAIN_NAV_ITEM_FLEX = `mainNav__item--mobile-flex`;
const mainNav = document.querySelector(`.mainNav`);
const burger = mainNav.querySelector(`.mainNav__item--burger`);
const burgerElement = burger.querySelector(`.mainNav__burger`);
const mobileItems = mainNav.querySelectorAll(`.mainNav__item--mobile`);

const viewItems = () => {
  mobileItems.forEach((item) => {
    item.classList.add(MAIN_NAV_ITEM_FLEX);
  });
};

const unviewItems = () => {
  mobileItems.forEach((item) => {
    item.classList.remove(MAIN_NAV_ITEM_FLEX);
  });
};

const closeNav = () => {
  burgerElement.classList.remove(CLOSE);
  burger.removeEventListener(`click`, closeNav);
  unviewItems();
};

const dropNav = () => {
  burgerElement.classList.add(CLOSE);
  burger.addEventListener(`click`, closeNav);
  viewItems();
};

if (burger) {
  burger.addEventListener(`click`, dropNav);
}
