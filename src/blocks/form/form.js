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
  // overlay.style.display = `none`;
  body.style.overflow = `auto`;
  // const form = body.querySelector(`.form`);
  if (formElement) {
    formElement.style.display = `none`;
  }
  // console.log(evt);
  
};

const formSubmitEventListener = (formElement) => {
  formClose(formElement);
};

// const getXsrf = () => {
//   return xsrf;
  
// };

// const formPrice = {
//   class: `form--promo`,
//   action: `./submit`,
//   layout: `
//   <fieldset class="form__fieldset">
//     <label class="form__label">
//       <span class="text text--light-grey text--sm">Ваше имя</span>
//       <input type="text" class="form__input" id="form_name" name="form_name" placeholder="Иван Иванов" required>
//     </label>
//     <label class="form__label">
//       <span class="text text--light-grey text--sm">Телефон</span>
//       <input type="tel" class="form__input form__input--tel" id="form_phone" name="form_phone" placeholder="+7(999)123-1415" required>
//     </label>
//     <label class="form__label">
//       <span class="text text--light-grey text--sm">E-mail</span>
//       <input type="email" class="form__input" id="form_email" name="form_email" placeholder="ivan.ivanov@mail.ru" required>
//     </label>
//     ${getXsrf()}
//     <button class="button button--action button--center button--submit" type="submit">Получить прайс</button>
//   </fieldset>`,
// }

// const formPrice = `
//     <fieldset class="form__fieldset">
//       <label class="form__label">
//         <span class="text text--light-grey text--sm">Ваше имя</span>
//         <input type="text" class="form__input" id="form_name" name="form_name" placeholder="Иван Иванов" required>
//       </label>
//       <label class="form__label">
//         <span class="text text--light-grey text--sm">Телефон</span>
//         <input type="tel" class="form__input form__input--tel" id="form_phone" name="form_phone" placeholder="+7(999)123-1415" required>
//       </label>
//       <label class="form__label">
//         <span class="text text--light-grey text--sm">E-mail</span>
//         <input type="email" class="form__input" id="form_email" name="form_email" placeholder="ivan.ivanov@mail.ru" required>
//       </label>
//       ${getXsrf()}
//       <button class="button button--action button--center button--submit" type="submit">Получить прайс</button>
//     </fieldset>`;

// const formCallMe = `
//     <fieldset class="form__fieldset">
//       <label class="form__label">
//         <span class="text text--light-grey text--sm">Ваше имя</span>
//         <input type="text" class="form__input" id="form_name" name="form_name" placeholder="Иван Иванов" required>
//       </label>
//       <label class="form__label">
//         <span class="text text--light-grey text--sm">Телефон</span>
//         <input type="tel" class="form__input form__input--tel" id="form_phone" name="form_phone" placeholder="+7(999)123-1415" required>
//       </label>
//       ${getXsrf()}
//       <button class="button button--action button--center button--submit" type="submit">Перезвоните мне</button>
//     </fieldset>`;

const addFormEventListeners = (formElement) => {
  const textarea = formElement.querySelector(`.form__input--textarea`);
  const telInput = formElement.querySelector(`.form__input--tel`);
  // console.log(telInput);
  // const submit = formElement.querySelector(`.button--submit`);

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
  // overlay.style.display = `block`;
  // overlay.addEventListener(`click`, formClose);
  createOverlay(formElement);
  body.style.overflow = `hidden`;

  formElement.style.display = `block`;

  // const formFragment = document.createDocumentFragment();
  // const template = document.createElement(`template`);
  // form.innerHTML = formElement.layout;
  // formFragment.appendChild(template.content);
  addFormEventListeners(formElement);

  // const form = formFragment.querySelector(`.form`);
  // body.appendChild(addFormEventListeners(form));
};

const openPriceForm = () => {
  formOpen(formPrice);
};

const openCallMeForm = () => {
  formOpen(formCallMe);
};

if (getPrice) {
  getPrice.forEach((button) => {
    button.addEventListener(`click`, openPriceForm);
  })
}

if (callMe) {
  callMe.forEach((button) => {
    button.addEventListener(`click`, openCallMeForm);
  })
}
