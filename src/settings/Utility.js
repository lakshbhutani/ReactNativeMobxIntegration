import {apiUrl,createUser,authenticateUser} from './ApiUrls';
import {SignIn} from '../components/SignIn'; 

export var loginDataValue = {};

export async function getMoviesFromApi () {
    let signIn = new SignIn()
    try {
      let response = await fetch(authenticateUser, {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // 'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImJoYXNrYXJqNjFAZ21haWwuY29tIiwicGFzc3dvcmQiOiIkMmEkMTAkdS9Ld3FuVERFbXhzSUFrZEI5QVJiLlVwQnEzZEppVGRWUmo5MFVHbUwvYTJQSy5yRUpQZ0ciLCJpYXQiOjE1MzU2MTY1MjMsImV4cCI6MTUzNTcwMjkyM30.j391j74Mz6ZHVtdNs2jK7OLwJsSQzWqIDYH4QKrazyY'
        },
        body: JSON.stringify({
          email: "bhaskarj61@gmail.com",
          password: "test1234"
      })});
      let responseJson = await response.json();
    //   console.log(responseJson);
      signIn.valuesFetched(responseJson);
    //   loginDataValue = JSON.parse(responseJson.data);
      return responseJson;
    } catch (error) {
      console.error(error);
    }
  }
