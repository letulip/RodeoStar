const body = document.querySelector(`body`);
// const overlay = body.querySelector(`.overlay`);
const getPrice = body.querySelectorAll(`.button--getPrice`);
const callMe = body.querySelectorAll(`.button--callMe`);
const formPrice = body.querySelector(`.form--price`);
const formCallMe = body.querySelector(`.form--callMe`);

const addTextareaEventListener = (elementArea, elementAreaHidden) => {
  elementArea.addEventListener(`input`, () => {
    let text = ``;
    elementArea.value.replace(/[<>]/g, `_`).split(`\n`).forEach((string) => {
      text += `<div>` + string.replace(/\s\s/g, ` &nbsp;`) + `&nbsp;</div>` + `\n`;
    });
    elementAreaHidden.innerHTML = text;
    let height = textareaHidden.offsetHeight + 15;
    elementArea.style.height = height + `px`;
  });
};

const telInputValidate = (input) => {
  const valids = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `0`, `(`, `)`, `+`, `-`, ` `];

  const inputArray = Array.from(input.target.value);

  for (let i = 0; i < inputArray.length; i++) {
    if (!valids.includes(inputArray[i])) {
      input.target.setCustomValidity(`Используйте цифры и ( ) + -`);
      return;
    } else {
      input.target.setCustomValidity(``);
    } 
  }
};

const formClose = (formElement, overlay) => {
  overlay.remove();
  body.style.overflow = `auto`;
  if (formElement) {
    formElement.style.display = `none`;
  }
  
};

const formSubmitEventListener = (formElement) => {
  formClose(formElement);
};

const addFormEventListeners = (formElement) => {
  const textarea = formElement.querySelector(`.form__input--textarea`);
  const telInput = formElement.querySelector(`.form__input--tel`);

  if (textarea) {
    const textareaHidden = formElement.querySelector(`#form__input--textarea-hidden`);
    addTextareaEventListener(textarea, textareaHidden);
  }

  if (telInput) {
    telInput.addEventListener(`input`, telInputValidate);
  }

  formElement.addEventListener(`submit`, formSubmitEventListener);
  return formElement;
};

const createOverlay = (formElement) => {
  const overlay = document.createElement(`div`);
  overlay.classList.add(`overlay`);
  overlay.addEventListener(`click`, () => {
    formClose(formElement, overlay);
  });
  body.appendChild(overlay);
};

const formOpen = (formElement) => {
  createOverlay(formElement);
  body.style.overflow = `hidden`;

  formElement.style.display = `block`;

  addFormEventListeners(formElement);
};

const openPriceForm = () => {
  formOpen(formPrice);
};

const openCallMeForm = () => {
  formOpen(formCallMe);
};

if (getPrice && formPrice) {
  getPrice.forEach((button) => {
    button.addEventListener(`click`, openPriceForm);
  })
}

if (callMe && formCallMe) {
  callMe.forEach((button) => {
    button.addEventListener(`click`, openCallMeForm);
  })
}
