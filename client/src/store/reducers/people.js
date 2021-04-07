import { AUTHORIZATION_REQUEST, AUTHORIZATION_SUCCESS } from '../actions/people';

const initialState = {
  person: {},
  token: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case AUTHORIZATION_REQUEST: {
      return {
        ...state,
        person: {},
        token: '',
      };
    }
    case AUTHORIZATION_SUCCESS: {
      const { person, token } = action.payload.data;
      return {
        ...state,
        person,
        token,
      };
    }
    default: {
      return state;
    }
  }
}
