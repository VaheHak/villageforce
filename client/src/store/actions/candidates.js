export const GET_CANDIDATES_REQUEST = 'GET_CANDIDATES_REQUEST';
export const GET_CANDIDATES_SUCCESS = 'GET_CANDIDATES_SUCCESS';
export const GET_CANDIDATES_FAIL = 'GET_CANDIDATES_FAIL';
export const POST_VOTE_REQUEST = 'POST_VOTE_REQUEST';
export const POST_VOTE_SUCCESS = 'POST_VOTE_SUCCESS';
export const POST_VOTE_FAIL = 'POST_VOTE_FAIL';

export function getCandidatesList() {
  return {
    type: GET_CANDIDATES_REQUEST,
    payload: {},
  };
}

export function postVote(id, token) {
  return {
    type: POST_VOTE_REQUEST,
    payload: { id, token },
  };
}
