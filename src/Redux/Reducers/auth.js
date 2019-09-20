const init = {
  User: [],
  Partner: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
};

const auth = (state = init, action) => {
  switch (action.type) {
    case 'LOGIN_USER_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
        isLoggedIn: false,
      };
    case 'LOGIN_USER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'LOGIN_USER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        isLoggedIn: true,
        User: action.payload.data,
      };
    case 'REGISTER_USER_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'REGISTER_USER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'REGISTER_USER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
      };
    case 'LOGIN_PARTNER_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
        isLoggedIn: false,
      };
    case 'LOGIN_PARTNER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'LOGIN_PARTNER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        isLoggedIn: true,
        Partner: action.payload.data,
      };
    case 'REGISTER_PARTNER_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
      };
    case 'REGISTER_PARTNER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'REGISTER_PARTNER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
      };
    default:
      return state;
  }
};
export default auth;
