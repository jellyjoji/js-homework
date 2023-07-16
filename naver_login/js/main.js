const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

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
    // error.classList.remove("is-active");
    this.classList.remove("is-active");

    emailPass = true;
  } else {
    // 이메일을 입력했을때 입력값이 틀리면 에러메세지를 추가
    console.log(email.value);
    this.classList.add("is-active");

    emailPass = false;
  }
});

// 비밀번호
// 비밀번호를 입력했을때 입력값이 올바르면 에러메세지를 삭제
pw.addEventListener("input", function () {
  if (pwReg(this.value)) {
    this.classList.remove("is-active");

    pwPass = true;
  } else {
    // 비밀번호를 입력했을때 입력값이 틀리면 에러메세지를 추가
    console.log(pw.value);
    this.classList.add("is-active");
    pwPass = false;
  }
});

// 버튼을 클릭했을때 submit 되는걸 prevent 해주고
// 만약 이메일과 비밀번호가 둘다 true 일때 welcome.html로 이동한다,
// 아니면 이메일과 비밀번호 확인 메세지를 전달한다
button.addEventListener("click", (e) => {
  e.preventDefault();
  if (emailPass && pwPass === true) {
    console.log("로그인 성공");
    window.location.href = "welcome.html";
  } else {
    console.log("아이디와 비밀번호를 확인해주세요");
  }
});

/* -------------------------------------------------------------------------- */
