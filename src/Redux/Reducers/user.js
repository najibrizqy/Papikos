const init = {
  User: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
  isLoggedIn: false
};

const user = (state = init, action) => {
  switch (action.type) {
    case 'GET_USERS_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
        isLoggedIn: false,
      };
    case 'GET_USERS_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'GET_USERS_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        isLoggedIn: true,
        User: action.payload.data,
      };
    case 'GET_A_USER_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
        isLoggedIn: false,
      };
    case 'GET_A_USER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'GET_A_USER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        isLoggedIn: true,
        User: action.payload.data,
      };
    case 'UPDATE_USER_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
        isLoggedIn: false,
      };
    case 'UPDATE_USER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'UPDATE_USER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        isLoggedIn: true,
        User: action.payload.data,
      };
    case 'DELETE_USER_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
        isLoggedIn: false,
      };
    case 'DELETE_USER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'DELETE_USER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        isLoggedIn: true,
        User: action.payload.data,
      };
    default:
      return state;
  }
};

export default user;
