const BASE_URL = 'http://localhost:3000';
var APIRepositoriesPrefix = BASE_URL + '/repositories';

const customError = function(message, errorCode) {
  var error = new Error(message);
  error.errorCode = errorCode;
  return error;
};

export async function getCommitData(owner, repo, commitSHA) {
    let url = `${APIRepositoriesPrefix}` + `/${owner}` + `/${repo}` + '/commits' + `/${commitSHA}` + '/diff';
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin',
  })
    .then(async response => {
      let result = await response.json();

      if (response.ok) {
          console.log(result);
        return result;
      } else {
        throw customError(`${result.reason}`, `${result.errorCode}`);
      }
    })
    .catch(error => {
      throw error;
    });

// const response = await fetch(url, {
//     method: 'GET',
//     headers: {
//       //Authorization: 'Bearer ' + accessToken
//       'Content-Type': 'application/json'
//     }
//   });
//   const string = await response.text();
//   const json = string === "" ? {} : JSON.parse(string);
//   return json;

}

