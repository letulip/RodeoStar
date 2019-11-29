const body = document.querySelector(`body`);
const overlay = body.querySelector(`.overlay`);
const form = body.querySelector(`.form--promo`);
const textarea = form.querySelector(`.form__input--textarea`);
const textareaHidden = form.querySelector(`#form__input--textarea-hidden`);
const telInput = form.querySelector(`.form__input--tel`);
const getPriceSubmit = form.querySelector(`.button--getPrice-submit`);
const getPrice = body.querySelectorAll(`.button--getPrice`);

if (textarea) {
  textarea.addEventListener(`input`, () => {
    let text = ``;
    textarea.value.replace(/[<>]/g, `_`).split(`\n`).forEach((string) => {
      text += `<div>` + string.replace(/\s\s/g, ` &nbsp;`) + `&nbsp;</div>` + `\n`;
    });
    textareaHidden.innerHTML = text;
    let height = textareaHidden.offsetHeight + 15;
    textarea.style.height = height + `px`;
  });
}

const telInputValidate = (input) => {
  const valids = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `0`, `(`, `)`, `+`, `-`, ` `];

  const inputArray = Array.from(input.target.value);

  for (let i = 0; i < inputArray.length; i++) {
    if (!valids.includes(inputArray[i])) {
      telInput.setCustomValidity(`Используйте цифры и ( ) + -`);
      return;
    } else {
      telInput.setCustomValidity(``);
    }
    
  }

};

if (telInput) {
  telInput.addEventListener(`input`, telInputValidate);
}

const formClose = () => {
  overlay.removeEventListener(`click`, formClose);
  overlay.style.display = `none`;
  form.style.display = `none`;
  form.removeEventListener(`submit`, formSubmitEventListener);
}

const formSubmitEventListener = (evt) => {
  evt.preventDefault();
  formClose();
}

const formOpen = (evt) => {
  overlay.style.display = `block`;
  overlay.addEventListener(`click`, formClose);
  form.style.display = `block`;
  form.addEventListener(`submit`, formSubmitEventListener);
}

if (getPrice) {
  getPrice.forEach((button) => {
    button.addEventListener(`click`, formOpen);
  })
}
