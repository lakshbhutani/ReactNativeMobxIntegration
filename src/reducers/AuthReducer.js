
const INITIAL_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false,
    token: ''
  };

export default (state = INITIAL_STATE, action) => {
    // console.log()
    switch (action.type) {
      case "login_user":
        console.log(action.payload);
        return action.payload;
      default:
        return state;
    }
};