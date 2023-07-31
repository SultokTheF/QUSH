const APIHandlers = {
  handleGET: (id, endpoint) => {
    // Retrieve a single record
    return endpoint.parse().find( item => item.id === id );
  },
  handleGETs: ( endpoint ) => {
    // Retrieve all records
    return endpoint.parse();
  },
  handlePOST: (response, endpoint) => {
    // Create a new record
    return fetch(`${endpoint}`, {
      method: "POST",
      body: JSON.stringify(response),
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  handlePUT: (id, endpoint, response) => {
    // Update an existing Field
    return fetch(`${endpoint}${id}/`, {
      method: "PUT",
      body: JSON.stringify(response),
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  handleDELETE: (id, endpoint) => {
    // Delete a Field
    return fetch(`${endpoint}${id}/`, {
      method: "DELETE",
    });
  },
};

export default APIHandlers;
