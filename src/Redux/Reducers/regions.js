const init = {
  Regions: [],
  isLoading: false,
  isRejected: false,
  isFulfilled: false,
};

const regions = (state = init, action) => {
  switch (action.type) {
    case 'GET_REGIONS_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfilled: false,
        isLoggedIn: false,
      };
    case 'GET_REGIONS_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'GET_REGIONS_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfilled: true,
        isLoggedIn: true,
        Regions: action.payload.data,
      };
    default:
      return state;
  }
};

export default regions;
