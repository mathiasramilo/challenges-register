const form = document.getElementById('sign-up-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const errors = validateForm(formData);

  document.getElementById('email-error').innerText = errors.email;
  document.getElementById('username-error').innerText = errors.username;
  document.getElementById('password-error').innerText = errors.password;
  document.getElementById('confirm-password-error').innerText =
    errors.confirmPassword;

  if (
    errors.email ||
    errors.username ||
    errors.password ||
    errors.confirmPassword
  )
    return;

  // Loading state for 2 secs & success
  form.innerHTML = `
    <div>Loading...</div>
  `;

  setTimeout(() => {
    form.innerHTML = `
      <div>You're signed in ${formData.get('username')}!</div>
    `;
  }, 2000);
});

const validateForm = (formData) => {
  const errors = {
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  };

  const fieldValues = {};

  for (let [name, value] of formData) {
    fieldValues[name] = value;
  }

  const emailValidation = validateEmail(fieldValues.email);
  if (!emailValidation.result) errors.email = emailValidation.message;

  const usernameValidation = validateUsername(fieldValues.username);
  if (!usernameValidation.result) errors.username = usernameValidation.message;

  const passwordValidation = validatePassword(
    fieldValues.password,
    fieldValues['confirm-password']
  );
  if (!passwordValidation.result) {
    errors.password = passwordValidation.passwordMessage;
    errors.confirmPassword = passwordValidation.confirmPasswordMessage;
  }

  return errors;
};

const validateEmail = (email) => {
  const validDomains = ['gmail.com', 'hotmail.com', 'lightit.io'];

  const domain = email.split('@')[1];
  if (validDomains.includes(domain)) {
    return { result: true };
  } else {
    return {
      result: false,
      message:
        'Invalid email. Please use an email address from the following domains: @gmail.com, @hotmail.com, or @lightit.io.',
    };
  }
};

const validateUsername = (username) => {
  const re = /^[a-z]+$/;
  if (re.test(username)) {
    return {
      result: true,
    };
  } else {
    return {
      result: false,
      message:
        'Invalid username. It must only contain lowercase letters with no spaces, numbers, or special characters.',
    };
  }
};

const validatePassword = (password, confirmPassword) => {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  if (!re.test(password))
    return {
      result: false,
      passwordMessage:
        'Invalid password. It must be at least 8 characters long and include uppercase letters, lowercase letters, and at least one special character.',
      confirmPasswordMessage: '',
    };

  if (confirmPassword !== password)
    return {
      result: false,
      passwordMessage: '',
      confirmPasswordMessage:
        'Passwords do not match. Please ensure both passwords are identical.',
    };

  return {
    result: true,
  };
};
