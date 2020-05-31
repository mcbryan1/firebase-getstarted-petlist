import firebase from "../../firebase/firebase";

//          registration action
export function registrationForm(email, password) {
  return async (dispatch) => {
    try {
      const user = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
        console.log(user)
      dispatch(loggedIn(user));
    } catch (error) {
      dispatch(registerError(error.message));
    }
  };
}

//          login action
export function loginForm(email, password) {
  return async (dispatch) => {
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      dispatch(loggedIn(user));
    } catch (error) {
      dispatch(loginError(error.message));
    }
  };
}

//          logout action
export function logout() {
  return async (dispatch) => {
    try {
      await firebase.auth().signOut();
      dispatch(loggedOut());
    } catch (error) {
      console.log(error);
    }
  };
}


//          Register Error Action
export function registerError(error){
  return{
    type: "REGISTER_ERROR",
    payload: error
  }
}

//          Login Error Action
export function loginError(error){
  return{
    type: "LOGIN_ERROR",
    payload: error
  }
}

//          login function
function loggedIn(user) {
  return {
    type: "LOGGED_IN",
    payload: user,
  };
}

//          logout function
function loggedOut() {
    return {
      type: "LOGGED_OUT",
    };
  }
