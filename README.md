# 네이버 로그인 페이지 구현
<br/>
로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있는 페이지 입니다.


<br/>
<br/>


![image](https://github.com/sulahhong/js-homework/assets/100662448/5e8c26b6-b768-4536-8e13-c7b6823afe7b)


<br/>

## 페이지 주요 기능
<br/>

- 사용자의 email, password 정규식을 사용한 유효성 확인
  - 입력 필드 유효성 검사 결과에 따른 시각적 피드백을 제공합니다.

<br/>

- 로그인 버튼 클릭 시, 성공 여부에 따른 페이지 이동
  - 성공 시 `welcom.html` , 실패 시 `error.html` 로 이동합니다.
 
<br/>


- `state` 함수를 사용한 상태 관리
    - `state` 함수는 초기 상태 값을 인자로 받아, 해당 상태 값을 읽거나 새로운 값으로 업데이트하는 두 개의 함수를 반환

 ``` 
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
 ```

<br/>


  - 아래 코드에서는 사용자의 로그인 상태를 관리하는 방법으로, 초기 로그인 상태는 `false`로 설정되며, `getLoginStatus` 함수를 통해 현재 로그인 상태를 읽고, `setLoginStatus` 함수를 통해 로그인 상태를 업데이트할 수 있습니다.


 ``` 
const [getLoginStatus, setLoginStatus] = state(false);

// 현재 로그인 상태 확인
console.log(getLoginStatus()); // false

// 로그인 상태 업데이트
setLoginStatus(true);

// 업데이트된 로그인 상태 확인
console.log(getLoginStatus()); // true
 ``` 



## 사용된 JavaScript 기능
<br/>

이 프로젝트에서는 다음과 같은 JavaScript의 핵심 기능들을 사용하여 동적인 사용자 인터페이스를 구현하고, 사용자와의 상호작용을 관리하였습니다.

<br/>


<br/>

`querySelector` 메소드를 사용하여 DOM에서 요소를 선택하고 조작하여 HTML 요소에 접근하여 스타일, 속성, 내용 등을 동적으로 변경할 수 있습니다.
````
const submitButton = document.querySelector('.btn-submit');
````

<br/>

`addEventListener` 이벤트 리스너를 사용하여 클릭, 입력 등에 반응하는 이벤트 핸들러를 설정하여 특정 이벤트가 발생했을 때 실행될 함수를 정의하였습니다.
````
submitButton.addEventListener('click', handleSubmit);
````

<br/>

`classList` 속성을 통해 HTML 요소의 클래스를 추가, 제거하여 요소의 스타일을 조건부로 변경할 수 있으며, 유효성 검사 결과에 따라 시각적 피드백을 제공하는 등의 용도로 사용되었습니다.
````
if (!isValid) {
  inputElement.classList.add('is-invalid');
} else {
  inputElement.classList.remove('is-invalid');
}
````

<br/>

`preventDefault` 메소드를 사용하여 웹 브라우저의 기본 동작을 방지합니다. 폼 제출 시 페이지가 새로고침되는 것을 막기 위해 사용되었습니다.
````
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
````

<br/>



