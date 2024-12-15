import React, { useState, useEffect } from "react";
import axios from "axios";

export default function DsplyBk_fnCompt() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3003/allbooks")
            .then((res) => setBooks(res.data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div>
            <h3>All Books</h3>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Topic</th>
                        <th>Format</th>
                        <th>Year</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {books.map((book) => (
                        <tr key={book._id}>
                            <td>{book.booktitle}</td>
                            <td>{book.author}</td>
                            <td>{book.Topic}</td>
                            <td>{book.formate}</td>
                            <td>{book.PubYear}</td>
                            <td>
                                <a href={`/edit/${book._id}`} className="btn btn-primary">Edit</a>
                                <a href={`/delete/${book._id}`} className="btn btn-danger">Delete</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
