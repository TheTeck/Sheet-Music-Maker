import tokenService from './tokenService';

const BASE_URL = '/api/opera';

export function create(opus) {
    return fetch(BASE_URL, {
        method: 'POST',
        body: JSON.stringify(opus),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
        
    }).then(res => res.json())
}

export function getAll() {
    return fetch(BASE_URL, {
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
    })
    .then(res => res.json());
  }

export function removeOpus(opusID) {
  return fetch(`${BASE_URL}/${opusID}`, {
    method: 'DELETE',
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  }).then(res => res.json())
}