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

const emailInput = document.querySelector("#userEmail");
const pwInput = document.querySelector("#userPassword");
const loginButton = document.querySelector(".btn-login");

// 잘 넘어갔다면 true
// 전역변수를 오염시키는 존재이므로 closure 를 사용한다거나 하기
let emailPass = false;
let pwPass = false;

// 태그가 가지고 있는 고유한 능력 x
function handleLogin(e) {
  // 기본 동작 자체를 차단시켜주는 역할
  e.preventDefault();
  console.log("hit");
}

function handleCheckEmail() {
  // 값을 제대로 입력했을때
  if (emailReg(this.value)) {
    this.classList.remove("is--valid");
    // 잘 입력했을때 true를 넘겨받음
    emailPass = true;
  } else {
    // 값을 제대로 안입력했을때
    this.classList.add("is--valid");
    // 값을 제대로 안입력했을때 false를 넘겨받음
    emailPass = false;
  }
}

function handleCheckPw() {
  const value = this.vlaue;

  if (pwReg(value)) {
    this.classList.remove("is--valid");
  } else {
    // 값을 제대로 안입력했을때
    this.classList.add("is--valid");
  }
}

function handleLogin(e) {
  if (emailPass && pwPass) {
    // 이 함수 에러 테스트 try{}catch(e){}
    try {
      // 변수를 함수에 담기
      const id = email.value;
      const pw = pwInput.value;

      // 혹시 서버가 끊겼을때를 위해 try{}catch(e){}
      // 서버와의 통신은 불안정할 가능성이 크다
      // 값이 안넘어오면 ReferenceError 가 난다
      const getUserId = user.id;
      const getUserPw = user.pw;

      if (id === getUserId && pw === getUserPw) {
        console.log("로그인 성공");
      } else {
        console.log("정확한 아이디와 비밀번호를 입력해주세요");
      }
    } catch (e) {
      alert(e.message);
    }
  }
}

// 가독성을 위해 함수를 먼저 선언하고 밑에서 호출는 방식 사용

emailInput.addEventListener("input", handleCheckEmail);
loginButton.addEventListener("click", handleLogin);
/* -------------------------------------------------------------------------- */

const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

/*

1. email 정규표현식을 사용한 조건처리 
   - false면 해당 input에 is--invalid 추가
   - true면 해당 input에 is--invalid 제거

2. pw 정규표현식을 사용한 validation
   - false면 해당 input에 is--invalid 추가
   - true면 해당 input에 is--invalid 제거

3. 로그인 버튼을 클릭시 user.id의 값과 input의 값을 비교
4. 로그인 버튼을 클릭시 user.pw의 값과 input의 값을 비교


5. 두 값이 일치 한다면 다음 페이지(welcome.html)로 이동

*/

// @ 기호 포함, .포함 이후 2글자 이상
function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

// 최소 6글자 이상, 0~9숫자 1개 이상 포함, 특수기호 1개 이상 포함
function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

const emailInput = document.querySelector("#userEmail");
const pwInput = document.querySelector("#userPassword");
const loginButton = document.querySelector(".btn-login");

let emailPass = false;
let pwPass = false;

// 태그가 가지고있는 고유한 능력 x

function handleCheckEmail() {
  const value = this.value;

  if (emailReg(value)) {
    this.classList.remove("is--invalid");
    emailPass = true;
  } else {
    this.classList.add("is--invalid");
    emailPass = false;
  }
}

function handleCheckPw() {
  const value = this.value;

  if (pwReg(value)) {
    this.classList.remove("is--invalid");
    pwPass = true;
  } else {
    this.classList.add("is--invalid");
    pwPass = false;
  }
}

function handleLogin(e) {
  e.preventDefault();

  if (emailPass && pwPass) {
    try {
      const id = emailInput.value;
      const pw = pwInput.value;

      const getUserId = user.id;
      const getUserPw = user.pw;

      if (id === getUserId && pw === getUserPw) {
        window.location.href = "welcome.html";
      } else {
        console.log("정확한 아이디와 비밀번호를 입력해 주세요.");
      }
    } catch (e) {
      alert(e.message);
    }
  } else {
    console.log("정확한 아이디와 비밀번호를 입력해 주세요.");
  }
}

emailInput.addEventListener("input", handleCheckEmail);
pwInput.addEventListener("input", handleCheckPw);
loginButton.addEventListener("click", handleLogin);
