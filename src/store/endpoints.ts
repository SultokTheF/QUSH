//endpoints for verification
const BASE_URL = `http://127.0.0.1:8090`;

const verificationEndpoint = `${BASE_URL}/verification/fields-ver/`;
const accept = `${BASE_URL}/verification/accept/`;
const decline = `${BASE_URL}/verification/decline/`;

const auth = `${BASE_URL}/auth`;
const register = `${BASE_URL}/auth/register`;
const validate = `${BASE_URL}/auth/validate?token=`;

const field = `${BASE_URL}/field/fields/`;

const rent = `${BASE_URL}/rent/rents/`;
const ticket = `${BASE_URL}/rent/ticket/`;

export { verificationEndpoint, accept, decline, auth, register, field, rent, ticket, validate };