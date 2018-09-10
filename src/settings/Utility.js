import { createUser, getUserList, authenticateUser, uploadUserImage } from './ApiUrls';

export default class NetworkOps {

    fetchResource = (path, userOptions = {}) => {
      const url = path;
      let response = null;
      return fetch(url+"/0/1/10", userOptions)
        .then(responseObject => {
          response = responseObject;
          console.log(response);
          if (response.status === 401) {
          }
          if (response.status < 200 || response.status >= 300) {
            return response.text();
          }
          return response.json();
        })
        .then(parsedResponse => {
          console.log(parsedResponse);
          return parsedResponse;
        })
        .catch(error => {
          console.log(error,'inside error');
        });
  };
}

 // const defaultOptions = {};
    // const defaultHeaders = {};
    
    // const options = {
    //   // Merge options
    //   ...defaultOptions,
    //   ...userOptions,
    //   // Merge headers
    //   headers: {
    //     ...defaultHeaders,
    //     ...userOptions.headers,
    //   },
    // };
    // console.log(options);
