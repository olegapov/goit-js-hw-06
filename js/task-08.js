const formDef = document.querySelector(`.login-form`);

formDef.addEventListener(`submit`, function (event) {
  event.preventDefault();
  const emailDef = formDef.elements.email;
  const passwordDef = formDef.elements.password;
  if (emailDef.value.length === 0 || passwordDef.value.length === 0) {
    alert(`Ви повинні заповнити всі поля`);
    return;
  }
  const formObt = {
    email: emailDef.value,
    password: passwordDef.value,
  };

  console.log(formObt);
  formDef.reset;
});
