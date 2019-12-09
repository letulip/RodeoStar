const body = document.querySelector(`body`);
const overlay = body.querySelector(`.overlay`);
const getPrice = body.querySelectorAll(`.button--getPrice`);
const callMe = body.querySelectorAll(`.button--callMe`);

const form = body.querySelector(`.form`);

const textarea = form.querySelector(`.form__input--textarea`);
const textareaHidden = form.querySelector(`#form__input--textarea-hidden`);
const telInput = form.querySelector(`.form__input--tel`);
const getPriceSubmit = form.querySelector(`.button--getPrice-submit`);

const formPrice = `
  <form class="form form--promo" action="/submit" method="post">
    <fieldset class="form__fieldset">
      <label class="form__label">
        <span class="text text--light-grey text--sm">Ваше имя</span>
        <input type="text" class="form__input" id="form_name" name="form_name" placeholder="Иван Иванов" required>
      </label>
      <label class="form__label">
        <span class="text text--light-grey text--sm">Телефон</span>
        <input type="tel" class="form__input form__input--tel" id="form_phone" name="form_phone" placeholder="+7(999)123-1415" required>
      </label>
      <label class="form__label">
        <span class="text text--light-grey text--sm">E-mail</span>
        <input type="email" class="form__input" id="form_email" name="form_email" placeholder="ivan.ivanov@mail.ru" required>
      </label>
        <button class="button button--action button--center button--getPrice-submit" type="submit">Получить прайс</button>
    </fieldset>
  </form>
  `;

const formCallMe = `
  <form class="form form--callMe" action="/submit" method="post">
    <fieldset class="form__fieldset">
      <label class="form__label">
        <span class="text text--light-grey text--sm">Ваше имя</span>
        <input type="text" class="form__input" id="form_name" name="form_name" placeholder="Иван Иванов" required>
      </label>
      <label class="form__label">
        <span class="text text--light-grey text--sm">Телефон</span>
        <input type="tel" class="form__input form__input--tel" id="form_phone" name="form_phone" placeholder="+7(999)123-1415" required>
      </label>
      <label class="form__label">
        <span class="text text--light-grey text--sm">E-mail</span>
        <input type="email" class="form__input" id="form_email" name="form_email" placeholder="ivan.ivanov@mail.ru" required>
      </label>
        <button class="button button--action button--center button--getPrice-submit" type="submit">Получить прайс</button>
    </fieldset>
  </form>
  `;

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
  body.style.overflow = `auto`;
  form.style.display = `none`;
  form.removeEventListener(`submit`, formSubmitEventListener);
}

const formSubmitEventListener = (evt) => {
  // evt.preventDefault();
  // console.log(form.action);
  formClose();
}

const formOpen = () => {
  overlay.style.display = `block`;
  overlay.addEventListener(`click`, formClose);
  body.style.overflow = `hidden`;
  form.addEventListener(`submit`, formSubmitEventListener);
}

const openPromoForm = () => {

};

const openCallMeForm = () => {

};

if (getPrice) {
  getPrice.forEach((button) => {
    button.addEventListener(`click`, openPromoForm);
  })
}

if (callMe) {
  callMe.forEach((button) => {
    button.addEventListener(`click`, openCallMeForm);
  })
}
