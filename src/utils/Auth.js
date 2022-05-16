const BASE_URL = "https://api.nomoreparties.co";

// export const getContent = (jwt) => {
//   return fetch(`${BASE_URL}/users/me`, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       'Authorization': `${jwt}`,
//     }
//   })
//   .then((res) => {
//     console.log(`getContent: response: ${res}`);
//     return res.json();
//   })
// }

function cheeckResponse(promise) {
  return promise.then((res) => {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
  })
  }

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email,password})
  })
  .then(cheeckResponse)
}

// export const authorize = (email, password) => {
//   return fetch(`${BASE_URL}/signin`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       email,
//       password,
//     }),
//   })
//   .then((response) => {
//     if(response.status === 400) {
//       return "не передано одно из полей"
//     } else if(response.status === 401) {
//       return "пользователь с email не найден"
//     } else {
//       return response.json();
//     }
//   })
//   .then((data) => {
//     console.log(data);
//     return data;
//     localStorage.setItem('jwt', data.jwt);
//     console.log(`user id: ${data.id}`)
//   })

  
// }