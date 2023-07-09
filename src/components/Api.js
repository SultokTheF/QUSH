import React, { useEffect, useState } from "react";

export default function Api() {
    const [fields, setFields] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8000/field/fields');
            const data = await response.json();
            setFields(data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchData();
    }, []);

    return (
        <div>
        {fields.map((field) => (
            <div key={field.id}>
            <h2>{field.name}</h2>
            <p>{field.description}</p>
            {/* Render other fields as needed */}
            </div>
        ))}
        </div>
    );
}
