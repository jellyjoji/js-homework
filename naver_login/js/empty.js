const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*
로그인과 비밀번호를 정확히 입력했을 때 welcome 페이지로 넘어갈 수 있도록 코드 로직을 작성합니다.
맞는 이메일과 비번 형식을 입력하면 -> 페이지 전환
폼 현식을 인증 받기 

if 조건문 이용? (만약 맞는 이메일과 비번 형식을 입력하면) {페이지 전환} else {에러 메세지

에러메세지 (login false){아이디는 이메일 형식으로 입력해 주세요.} 
에러메세지 (login true and password false){비밀번호는 특수문자 포함 10자리 이상 입력해 주세요.}
로그인 성공(login true and password true){환영합니다 페이지 전환}
}
- [x] 재사용 가능한 함수를 분리하고 함수를 중심으로 설계하는 방법에 대해 학습합니다.

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/
/* practice-------------------------------------------------------------------------- */
function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

const email = document.querySelector(".user-email-input");
const pw = document.querySelector(".user-password-input");
const button = document.querySelector(".btn-login");
const error = document.querySelector(".error-message");

let emailPass = false;
let pwPass = false;

// 이메일
// 이메일을 입력했을때 입력값이 올바르면 에러메세지를 삭제
email.addEventListener("input", function () {
  if (emailReg(this.value)) {
    this.classList.remove("is-active");

    emailPass = true;
  } else {
    // 이메일을 입력했을때 입력값이 틀리면 에러메세지를 추가
    this.classList.add("is-active");
    emailPass = false;
  }
});

// 버튼을 클릭했을때
button.addEventListener("click", () => {
  if (emailPass && pwPass) {
    console.log("로그인");
    window.location.href = "welcome.html";
  }
});

// 비밀번호
// 비밀번호를 입력했을때 입력값이 올바르면 에러메세지를 삭제
pw.addEventListener("input", function () {
  if (pwReg(this.value)) {
    this.classList.remove("is-active");

    pwPass = true;
  } else {
    // 이메일을 입력했을때 입력값이 틀리면 에러메세지를 추가
    this.classList.add("is-active");
    pwPass = false;
  }
});

// 버튼을 클릭했을때
button.addEventListener("click", () => {
  if (emailPass && pwPass) {
    console.log("로그인");
    window.location.href = "welcome.html";
  }
});

/* -------------------------------------------------------------------------- */
function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

/* 힌트-------------------------------------------------------------------------- */

const input = document.querySelector("#todo");
let value = input.value;
input.addEventListener("input", () => {
  value = input.value;
  console.log(value === "hello");
});

// input.classList.add("is-active");
// input.classList.remove("is-active");

/* -------------------------------------------------------------------------- */
function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

const email = document.querySelector(".email");
const pw = document.querySelector(".pw");
const button = document.querySelector("button");

let emailPass = false;

email.addEventListener("input", function () {
  if (emailReg(this.value)) {
    this.classList.remove("is-active");

    emailPass = true;
  } else {
    this.classList.add("is-active");
    emailPass = false;
  }
});

button.addEventListener("click", () => {
  if (emailPass) {
    console.log("로그인");
  }
});
/* -------------------------------------------------------------------------- */

function validateForm() {
  // Get the value of the input field with id="email"
  var email = document.getElementById("userEmail").value;
  // Get the value of the input field with id="password"
  var password = document.getElementById("userPassword").value;
  // Regular expression to check if the email is in the correct format
  var emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  // Check if the email is empty

  var error = document.querySelector(".error-message");

  if (email == "") {
    alert("Email field must be filled out");
    return false;
  }
  // Check if the email is in the correct format
  if (!email.match(emailRegex)) {
    alert("Please enter a valid email address");

    // display error-message if the email is in the correct format
    error.style.display = "block";
    // .is--invalid 추가가 안되는데 이유를 모르겠음
    // alert(error.classList.add("is--invalid"));

    return false;
  }
  // Check if the password is empty
  if (password == "") {
    alert("Password field must be filled out");
    return false;
  }
  // Send a request to the server to check the user's credentials
  // If the credentials are correct, return true to submit the form
  // If the credentials are incorrect, display an error message and return false to prevent the form from being submitted
  return true;
}

// validateForm() when you push the submit button
const submit = document.querySelector(".btn-login");
submit.addEventListener("click", validateForm);
