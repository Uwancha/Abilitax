import React from "react";
import Nav from "../components/Header";

export default function Loading() {
    return (
        <>
            <Nav />
                <div className="loading">
                <button className="circular-btn"></button>
                <button className="circular-btn"></button>
                <button className="circular-btn"></button>
            </div>
        </>
    );
};


