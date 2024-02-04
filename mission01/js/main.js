/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/


const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

function state(initValue) {
  let value = initValue;

  function read() {
    return value;
  }

  function write(newValue) {
    value = newValue;
  }

  return [read, write];
}


const [ getLoginStatus, setLoginStatus ] = state(false);


function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}


const userEmail = document.querySelector('#userEmail');
const userPassword = document.querySelector('#userPassword');
const submit = document.querySelector('.btn-login');


function handleCheckId(){
const isValid = emailReg(this.value);
  if (!isValid) {
    this.classList.add('is--invalid');
  } else {
    this.classList.remove('is--invalid');
  }
}

function handleCheckPw(){
  const isValid = pwReg(this.value);

  if (!isValid) {
    this.classList.add('is--invalid');
  } else {
    this.classList.remove('is--invalid');
  }
}


userEmail.addEventListener('input', handleCheckId);
userPassword.addEventListener('input', handleCheckPw);

function handleSubmit(e){
  e.preventDefault();
  
  const inputEmail = userEmail.value;
  const inputPassword = userPassword.value;

  if (emailReg(inputEmail) && pwReg(inputPassword) && inputEmail === user.id && inputPassword === user.pw) {
    setLoginStatus(true); 
    console.log("Login successful");
    window.location.href = 'welcome.html'
  } else {
    setLoginStatus(false); 
    console.log("Login failed");
    window.location.href = 'error.html'
  }

}

submit.addEventListener('click', handleSubmit);


