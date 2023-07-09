let password = document.getElementById('pwd');
let confirmPassword = document.getElementById('confirmpwd');
let passwordMatchError = document.getElementById('passwordMatchError');

function checkPasswordMatch() {
    let pwdValue = password.value;
    let confirmpwdValue = confirmPassword.value;
  
    if (pwdValue !== confirmpwdValue) {
      confirmPassword.classList.add('error');
      passwordMatchError.style.display = 'block';
    } else {
      confirmPassword.classList.remove('error');
      passwordMatchError.style.display = 'none';
    }
  }
  
  password.addEventListener('input', checkPasswordMatch);
  confirmPassword.addEventListener('input', checkPasswordMatch);