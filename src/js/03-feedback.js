import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

const STORAGE_KEY_FORM = 'feedback-form-state';

let formData = {};

const onFormInput = e => {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_KEY_FORM, JSON.stringify(formData));
};

const getValueLocalStorage = () => {
  const getSaveValue = JSON.parse(localStorage.getItem(STORAGE_KEY_FORM));

  if (localStorage.getItem(STORAGE_KEY_FORM)) {
    formData.email = getSaveValue.email;
    formData.message = getSaveValue.message || '';

    formRef.email.value = getSaveValue.email;
    formRef.message.value = getSaveValue.message || '';
  }
};

getValueLocalStorage();

const onFormSub = e => {
  e.preventDefault();

  console.log(formData);

  e.target.reset();
  localStorage.removeItem(STORAGE_KEY_FORM);

  formData = {};
};

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSub);
