const fieldAPIHandlers = {
  getField: (FieldId) => {
    // Retrieve a single Field
    return fetch(`http://localhost:8000/field/fields/${FieldId}/`);
  },
  getFields: () => {
    // Retrieve all Fields
    return fetch(`http://localhost:8000/field/fields/`);
  },
  createField: (FieldData) => {
    // Create a new Field
    return fetch(`http://localhost:8000/field/fields/`, {
      method: "POST",
      body: JSON.stringify(FieldData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  updateField: (FieldId, FieldData) => {
    // Update an existing Field
    return fetch(`http://localhost:8000/field/fields/${FieldId}/`, {
      method: "PUT",
      body: JSON.stringify(FieldData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  },
  deleteField: (FieldId) => {
    // Delete a Field
    return fetch(`http://localhost:8000/field/fields/${FieldId}/`, {
      method: "DELETE",
    });
  },
};

export default fieldAPIHandlers;
