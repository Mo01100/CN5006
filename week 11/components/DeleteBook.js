import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function DeleteBook() {
    const { id } = useParams(); // Get the book ID from the URL

    const deleteBook = () => {
        axios.post(`http://localhost:3003/deleteBook/${id}`)
            .then(() => alert("Book deleted successfully"))
            .catch((err) => console.error(err));
    };

    return (
        <div>
            <h3>Are you sure you want to delete this book?</h3>
            <button className="btn btn-danger" onClick={deleteBook}>Yes, Delete</button>
        </div>
    );
}
