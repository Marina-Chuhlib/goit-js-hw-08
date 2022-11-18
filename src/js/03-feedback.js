import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

const STORAGE_KEY_FORM = 'feedback-form-state';

const formData = {};

const onFormInput = e => {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_KEY_FORM, JSON.stringify(formData));
};

const onFormSub = e => {
  e.preventDefault();

  const mail = formRef.elements.email.value;
  const msg = formRef.elements.message.value;

  e.target.reset();
  localStorage.removeItem(STORAGE_KEY_FORM);

  console.log(`email : ${mail}`);
  console.log(`message : ${msg}`);
};

const textareaInput = () => {
  const getSaveValue = JSON.parse(localStorage.getItem(STORAGE_KEY_FORM));

  try {
    return (
      ((formRef.email.value = getSaveValue.email) &&
        (formRef.message.value = getSaveValue.message || '')) ||
      []
    );
  } catch (error) {
    return [];
  }
};

textareaInput();

formRef.addEventListener('input', throttle(onFormInput, 500));
formRef.addEventListener('submit', onFormSub);
