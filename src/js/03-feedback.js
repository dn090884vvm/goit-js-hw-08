import throttle from 'lodash.throttle';

const fieldDatas = document.querySelector('.feedback-form');

// console.log(fieldDatas);
const keyForStorage = 'feedback-form-state';
fieldDatas.addEventListener('input', throttle(handleInput, 500));
// fieldDatas.addEventListener('input', handleInput);

function checkingStorageForDatas() {
  //   event.preventDefault();
  const savedDatas = localStorage.getItem(keyForStorage);
  if (savedDatas) {
    const parsedSavedDatas = JSON.parse(savedDatas);

    fieldDatas.email.value = parsedSavedDatas.email;
    fieldDatas.message.value = parsedSavedDatas.message;
    return parsedSavedDatas;
  } //else return;
}
checkingStorageForDatas();
// const inputDatas = { email: '', message: '' };
// let inputDatas = parsedDaveddatas || { email: '', message: '' };
// let inputDatas = parsedSavedDatas;
let inputDatas = checkingStorageForDatas() || { email: '', message: '' };

function handleInput(event) {
  inputDatas[event.target.name] = event.target.value;
  localStorage.setItem(keyForStorage, JSON.stringify(inputDatas));

  //==============================================
  //   event.preventDefault();
  //   const {
  //     elements: { email, message },
  //   } = event.currentTarget;

  //   const inputDatas = {
  //     email: email.value,
  //     message: message.value,
  //   };

  //   console.log(email.value);
  //   console.log(message.value);
}

fieldDatas.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();

  if (localStorage.length) {
    const getSavedDatas = localStorage.getItem(keyForStorage);
    const parsedDaveddatas = JSON.parse(getSavedDatas);
    console.log(parsedDaveddatas);
    // return parsedDaveddatas;
  } else {
    return;
  }

  event.currentTarget.reset();
  localStorage.removeItem(keyForStorage);
  inputDatas.email = '';
  inputDatas.message = '';

  //====================================
  //   const {
  //     elements: { email, message },
  //   } = event.currentTarget;

  //   console.log(email.value);
  //   console.log(message.value);

  //   email.value = '';
  //   message.value = '';

  //   localStorage.clear();
}
