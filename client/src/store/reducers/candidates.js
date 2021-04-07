import { GET_CANDIDATES_SUCCESS, POST_VOTE_SUCCESS } from '../actions/candidates';

const initialState = {
  candidatesList: [],
  voteResult: '',
  requestStatus: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_CANDIDATES_SUCCESS: {
      return {
        ...state,
        candidatesList: action.payload.data.candidates,
      };
    }
    case POST_VOTE_SUCCESS: {
      return {
        ...state,
        voteResult: action.payload.data.status,
        requestStatus: 'success',
      };
    }
    default: {
      return state;
    }
  }
}
