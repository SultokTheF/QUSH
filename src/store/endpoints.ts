//endpoints for verification
const BASE_URL = `http://38.180.38.174`;

const verificationEndpoint = `${BASE_URL}:8001/verification/fields-ver/`;
const accept = `${BASE_URL}:8001/verification/accept/`;
const decline = `${BASE_URL}:8001/verification/decline/`;

const auth = `${BASE_URL}:8090/auth`;
const register = `${BASE_URL}:8090/auth/register`;
const validate = `${BASE_URL}:8090/auth/validate?token=`;

const field = `${BASE_URL}:8000/field/fields/`;

const rent = `${BASE_URL}:7999/rent/rents/`;
const ticket = `${BASE_URL}:7999/rent/ticket/`;

export { verificationEndpoint, accept, decline, auth, register, field, rent, ticket, validate };