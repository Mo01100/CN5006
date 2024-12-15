import React, { useState } from "react";
import axios from "axios";

export default function AddBook() {
    const [state, setState] = useState({
        booktitle: "",
        author: "",
        formate: "",
        Topic: "",
        PubYear: 1990,
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setState({
            ...state,
            [e.target.name]: value,
        });
    };

    const OnSubmit = (e) => {
        e.preventDefault();
        const bookdata = {
            booktitle: state.booktitle,
            PubYear: state.PubYear,
            author: state.author,
            Topic: state.Topic,
            formate: state.formate,
        };

        axios.post("http://localhost:3003/addbook", bookdata)
            .then((res) => console.log(res.data))
            .catch((err) => console.error(err));
    };

    return (
        <div style={{ marginTop: 10 }}>
            <h3>Add Book</h3>
            <form onSubmit={OnSubmit}>
                <div className="form-group">
                    <label>Book Title:</label>
                    <input
                        className="form-control"
                        type="text"
                        name="booktitle"
                        value={state.booktitle}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Author:</label>
                    <input
                        className="form-control"
                        name="author"
                        value={state.author}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label>Topic:</label>
                    <select
                        className="form-control"
                        name="Topic"
                        value={state.Topic}
                        onChange={handleChange}
                    >
                        <option value="Computer Science">Computer Science</option>
                        <option value="Programming">Programming</option>
                        <option value="Data Science">Data Science</option>
                        <option value="AI">AI</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Format:</label>
                    <div>
                        <input
                            type="radio"
                            name="formate"
                            value="Hard Copy"
                            checked={state.formate === "Hard Copy"}
                            onChange={handleChange}
                        />
                        <label> Hard Copy</label>
                        <input
                            type="radio"
                            name="formate"
                            value="Electronic Copy"
                            checked={state.formate === "Electronic Copy"}
                            onChange={handleChange}
                        />
                        <label> Electronic Copy</label>
                    </div>
                </div>
                <div className="form-group">
                    <label>Publication Year:</label>
                    <input
                        type="number"
                        name="PubYear"
                        min="1980"
                        max="2025"
                        value={state.PubYear}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Book</button>
            </form>
        </div>
    );
}
