import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

const STORAGE_KEY_FORM = 'feedback-form-state';

let formData = {};

const onFormInput = e => {
  formData[e.target.name] = e.target.value.trim();

  localStorage.setItem(STORAGE_KEY_FORM, JSON.stringify(formData));
};

const getValueLocalStorage = () => {
  const getSaveValue = JSON.parse(localStorage.getItem(STORAGE_KEY_FORM));

  if (localStorage.getItem(STORAGE_KEY_FORM)) {
    formData = getSaveValue;
    const keys = Object.keys(formData);
    for (const key of keys) {
      formRef.elements[key].value = formData[key];
    }
  }
};

getValueLocalStorage();

const onFormSub = e => {
  e.preventDefault();

  if (
    formRef.email.value.trim() === '' ||
    formRef.message.value.trim() === ''
  ) {
    alert('Bсе поля должны быть заполнены!');
    return false;
  }

  console.log(formData);

  e.target.reset();
  localStorage.removeItem(STORAGE_KEY_FORM);

  formData = {};
};

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSub);
