import tokenService from './tokenService';

const BASE_URL = '/api/users/';


// NOTE THIS IS configured to send of a multi/part form request
// aka photo 
function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    body: user
  })
  .then(res => {
    if (res.ok) return res.json();
    // Probably a duplicate email
    throw new Error('Email already taken!');
  })
  // Parameter destructuring!
  .then(({token}) => tokenService.setToken(token));
  // Setting our token in localStorage in our browser
  // then we'll be able to use with every request!
  // The above could have been written as
  //.then((token) => token.token);
}

function deleteUser(userId) {
  return fetch(BASE_URL + userId, {
    method: 'DELETE',
    headers: new Headers({
      'Authorization': 'Bearer ' + tokenService.getToken()
    })
  }).then (res => {
    if (res.ok) return res.json();
    throw new Error('Unable to delete user!');
  })
}

function update(data) {
  return fetch(BASE_URL + data.id, {
    method: 'PUT',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    }),
    body: JSON.stringify(data)
  }).then (res => {
    if (res.ok) return res.json();
    throw new Error('Unable to update user!');
  }).then (({token}) => tokenService.setToken(token));
}

function getUser() {
  return tokenService.getUserFromToken();
}

function logout() {
  tokenService.removeToken();
}

function login(creds) {
  return fetch(BASE_URL + 'login', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(creds)
  })
  .then(res => {
    // Valid login if we have a status of 2xx (res.ok)
    if (res.ok) return res.json();
    throw new Error('Bad Credentials!');
  })
  .then(({token}) => tokenService.setToken(token));
}

function getAll() {
  return fetch(BASE_URL, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    })
  }).then(res => {
    if (res.ok) return res.json();
    throw new Error('Error in the database');
  })
}

function getOneUserById(id) {
  return fetch(BASE_URL + id, {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + tokenService.getToken()
    })
  }).then(res => {
    if (res.ok) return res.json();
    throw new Error('Error in the database');
  })
}


export default {
  signup, 
  logout,
  login,
  getUser,
  update,
  getAll,
  getOneUserById,
  deleteUser
};