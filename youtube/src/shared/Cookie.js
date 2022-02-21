// import Cookies from "universal-cookie"
// const cookies = new Cookies()

// export function TokenToCookie(session) {
//   cookies.set("session", session)
// }

// // 키값 기준으로 쿠키에 저장된 값을 가져오는 함수
// const getCookie = (name) => {
//   // 쿠키 값을 가져옵니다.
//   let value = "; " + document.cookie
//   // 키 값을 기준으로 파싱합니다.
//   let parts = value.split("; " + name + "=")
//   // value를 return!
//   if (parts.length === 2) {
//     return parts.pop().split(";").shift()
//   }
// }

const token = (name, value, exp = 5) => {

  let date = new Date();
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
};

const deleteCookie = (name) => {
  document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;';
};

export { token, deleteCookie };
