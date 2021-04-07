export const AUTHORIZATION_REQUEST = 'AUTHORIZATION_REQUEST';
export const AUTHORIZATION_SUCCESS = 'AUTHORIZATION_SUCCESS';
export const AUTHORIZATION_FAIL = 'AUTHORIZATION_FAIL';
export function authorizeRequest(formData) {
  return {
    type: AUTHORIZATION_REQUEST,
    payload: { formData },
  };
}
