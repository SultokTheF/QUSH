//endpoints for verification
const verification = "http://83.229.87.19:8001/verification/fields-ver/";
const accept = "http://83.229.87.19:8001/verification/accept/";
const decline = "http://83.229.87.19:8001/verification/decline/";

const auth = "http://83.229.87.19:8090/auth";
const register = "http://83.229.87.19:8090/auth/register";
const validate = "http://83.229.87.19:8090/auth/validate?token=";

const field = "http://83.229.87.19:8000/field/fields/";

const rent = "http://83.229.87.19:7999/rent/rents/";
const ticket = "http://83.229.87.19:7999/rent/ticket/";

export { verification, accept, decline, auth, register, field, rent, ticket, validate };