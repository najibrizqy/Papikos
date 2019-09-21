const init = {
  Partner: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
};

const partner = (state = init, action) => {
  switch (action.type) {
    case 'GET_PARTNERS_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
        isLoggedIn: false,
      };
    case 'GET_PARTNERS_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'GET_PARTNERS_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        isLoggedIn: true,
        Partner: action.payload.data,
      };
    case 'GET_A_PARTNER_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
        isLoggedIn: false,
      };
    case 'GET_A_PARTNER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'GET_A_PARTNER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        isLoggedIn: true,
        Partner: action.payload.data.data
      };
    case 'UPDATE_PARTNER_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
        isLoggedIn: false,
      };
    case 'UPDATE_PARTNER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'UPDATE_PARTNER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        isLoggedIn: true,
        Partner: action.payload.data,
      };
    case 'DELETE_PARTNER_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
        isLoggedIn: false,
      };
    case 'DELETE_PARTNER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'DELETE_PARTNER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        isLoggedIn: true,
        Partner: action.payload.data,
      };
    default:
      return state;
  }
};

export default partner;
