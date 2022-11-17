import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');

const formData = {};

const onFormInput = e => {
  formData[e.target.name] = e.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const onFormSub = e => {
  e.preventDefault();

  const mail = formRef.elements.email.value;
  const msg = formRef.elements.message.value;

  e.target.reset();
  localStorage.removeItem('feedback-form-state');

  console.log(`email : ${mail}`);
  console.log(`message : ${msg}`);
};

const textareaInput = () => {
  const getSaveValue = JSON.parse(localStorage.getItem('feedback-form-state'));

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
