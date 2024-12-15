import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddBook from "./components/AddBook";
import BookUpdate from "./components/BookUpdate";
import DeleteBook from "./components/DeleteBook";
import DsplyBk_fnCompt from "./components/DsplyBk_fnCompt";

export default function App() {
    return (
        <Router>
            <div className="container">
                <h2 className="text-center">Online Library</h2>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/" className="navbar-brand">Add Book</Link>
                    <Link to="/display" className="navbar-brand">Display Books</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<AddBook />} />
                    <Route path="/display" element={<DsplyBk_fnCompt />} />
                    <Route path="/edit/:id" element={<BookUpdate />} />
                    <Route path="/delete/:id" element={<DeleteBook />} />
                </Routes>
            </div>
        </Router>
    );
}
